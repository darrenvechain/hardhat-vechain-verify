import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("SuperErc20");
  const Contract = await Factory.deploy();
  await Contract.waitForDeployment();
  const simpleStorageContractAddress = await Contract.getAddress();
  console.log(`Contract Deployed @ ${simpleStorageContractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });