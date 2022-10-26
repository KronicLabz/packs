import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

  const packAddress = await sdk.deployer.deployPack({
    name: "Treasure Chests",
    primary_sale_recipient: "0x366159340Ee4Cf5F4475cdDF0E17ED525B2d8F7C",
  });

  console.log(`Pack address: ${packAddress}`);
})();
