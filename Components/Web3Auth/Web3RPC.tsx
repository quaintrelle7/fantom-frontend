import type { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";

export default class EthereumRpc {
    private provider: SafeEventEmitterProvider;

    constructor(provider: SafeEventEmitterProvider) {
        this.provider = provider;
    }

    async getChainId(): Promise<string> {
        try {
            const web3 = new Web3(this.provider as any);

            // Get the connected Chain's ID
            const chainId = await web3.eth.getChainId();

            return chainId.toString();
        } catch (error) {
            return error as string;
        }
    }

    async getAccounts(): Promise<any> {
        try {
            const web3 = new Web3(this.provider as any);

            // Get user's Ethereum public address
            const address = await web3.eth.getAccounts();

            return address;
        } catch (error) {
            return error;
        }
    }

    async getBalance(): Promise<string> {
        try {
            const web3 = new Web3(this.provider as any);

            // Get user's Ethereum public address
            const address = (await web3.eth.getAccounts())[0];

            // Get user's balance in ether
            const balance = web3.utils.fromWei(
                await web3.eth.getBalance(address), "ether"
            );
            // Balance is in wei

            return balance;
        } catch (error) {
            return error as string;
        }
    }

    async sendTransaction(): Promise<any> {
        try {
            const web3 = new Web3(this.provider as any);

            // Get user's Ethereum public address
            const fromAddress = (await web3.eth.getAccounts())[0];

            const destination = fromAddress;

            const amount = web3.utils.toWei("0.001", "ether"); // Convert 1 ether to wei

            // Submit transaction to the blockchain and wait for it to be mined
            const receipt = await web3.eth.sendTransaction({
                from: fromAddress,
                to: destination,
                value: amount,
                maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
                maxFeePerGas: "6000000000000", // Max fee per gas
            });

            return receipt;
        } catch (error) {
            return error as string;
        }
    }

    async setValuex(): Promise<any> {
        try {
            const web3 = new Web3(this.provider as any);

            const abi = [
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "num",
                            "type": "uint256"
                        }
                    ],
                    "name": "store",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "retrieve",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]

            const smartContractAddress = "0xF5e8e0cFe219Eb3cC63757e9C3D5575BE3a2e7d6"
            const contractInstance = new web3.eth.Contract(abi as any, smartContractAddress);
            const fromAddress = (await web3.eth.getAccounts())[0];

            console.log(contractInstance.methods);
            const result = await contractInstance.methods.store(4).send({
                from: fromAddress,
            });
            console.log(result);

            return "receipt";
        } catch (error) {
            return error as string;
        }
    }

    async getValuex(): Promise<any> {
        try {
            const web3 = new Web3(this.provider as any);

            const abi = [
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "num",
                            "type": "uint256"
                        }
                    ],
                    "name": "store",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "retrieve",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]

            const smartContractAddress = "0xF5e8e0cFe219Eb3cC63757e9C3D5575BE3a2e7d6"
            const contractInstance = new web3.eth.Contract(abi as any, smartContractAddress);
            // console.log();
            const result = await contractInstance.methods.retrieve().call();
            console.log(result);

            return "receipt";
        } catch (error) {
            return error as string;
        }
    }

    async signMessage() {
        try {
            const web3 = new Web3(this.provider as any);

            // Get user's Ethereum public address
            const fromAddress = (await web3.eth.getAccounts())[0];

            const originalMessage = "YOUR_MESSAGE";

            // Sign the message
            const signedMessage = await web3.eth.personal.sign(
                originalMessage,
                fromAddress,
                "test password!" // configure your own password here.
            );

            return signedMessage;
        } catch (error) {
            return error as string;
        }
    }

    async getPrivateKey(): Promise<any> {
        try {
            const privateKey = await this.provider.request({
                method: "eth_private_key",
            });

            return privateKey;
        } catch (error) {
            return error as string;
        }
    }
}