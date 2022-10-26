import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

  const pack = sdk.getPack("0x1D7714b0c712D601b6058B566e0450a2275594EE");

  const packNfts = await pack.getAll();

  const x = await pack.get(0);

  console.log(x.supply.toNumber());
})();
