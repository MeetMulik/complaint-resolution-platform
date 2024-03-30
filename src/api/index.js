import reportAbi from "../utils/reportAbi.json";
import { reportAddress } from "../utils/index.js";
import { ethers } from "ethers";

export const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    return address;
}

export const fetchReportContract = async (signerOrProvider) => {
    return new ethers.Contract(
        reportAddress,
        reportAbi,
        signerOrProvider
    );
};

export const connectWithReportContract = async (signerOrProvider) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = fetchReportContract(signer);
    return contract;
}