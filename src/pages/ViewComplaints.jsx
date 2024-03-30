import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Flex } from "@chakra-ui/react";
import { connectWithReportContract } from "../api/index";

const ViewComplaints = () => {
  const [reports, setReports] = useState([]);
  const fetchReports = async () => {
    const contract = await connectWithReportContract();
    const reports = await contract.getReports();
    setReports([...reports].reverse());
    console.log(reports);
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div>
      <Flex gap={2}>
        {reports.length > 0 ? (
            reports.map((report, idx) => (
              <Card
                key={idx}
                report={report}
                connectWithReportContract={connectWithReportContract}
              />
            ))
          ) : (
            <>
              <h1 className="text-2xl text-gray-400 mt-8">No Report</h1>
            </>
          )}
      </Flex>
    </div>
  );
};

export default ViewComplaints;
