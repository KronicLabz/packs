import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import dotenv from "dotenv";
dotenv.config();

import fs from "fs";

(async () => {
    const packAddress = "0x1D7714b0c712D601b6058B566e0450a2275594EE";
    const tokenAddress = "0x2c920d603C3d5c8f6d6E8de39511781D2b12aF74";
    const editionAddress = "0x19f5d531C0595597ce7271d1F6C0F97B9355fBac";

    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

    const pack = sdk.getContract;("0x5F245313B874f4F5c35136E9c6Bc630Bc6C9c484");

    const token = await sdk.getContract(tokenAddress);
    await token.setApprovalForAll(packAddress);
    await token.setAllowance(packAddress, true);
    console.log("Token approved");

    const edition = await sdk.getContract(editionAddress);
    await edition.setApprovalForAll(packAddress, true);
    console.log("Edition approved");

    const packFile = fs.readFileSync("./scripts/ZombezeCardPack1.png");
    const url = `${ipfsHash,baseUri}`;
    console.log("Pack file uploaded to IPFS");

    console.log("Creating packs now...");
    const packNfts = await pack.create({
        packMetadata: {
            name: "BrainzZz",
            description: "BrainzZz",
            image: url,
        },
        erc20Rewards: [
            {
                contractAddress: tokenAddress,
                quantityPerReward: 1,
                quantity: 45,
                totalRewards: 45,
            },
        ],
        erc1155Rewards: [
            {
                contractAddress: editionAddress,
                quantityPerReward: 1,
                quantity: 1,
                totalRewards: 45,
            },
        ],
        rewardsPerPack: 2,
    });

    console.log("Packs created");
})();
