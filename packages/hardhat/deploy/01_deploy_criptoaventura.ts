import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "CriptoAventura" using the deployer account and
 * constructor arguments set to 1,000,000
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployCriptoAventura: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Sepolia
  if (hre.network.name === "sepolia") {
    await deploy("CriptoAventuraENS", {
      from: deployer,
      log: true,
      autoMine: true,
    });

    const criptoAventura = await hre.ethers.getContract<Contract>("CriptoAventuraENS", deployer);
    const contractMaxSupply = await criptoAventura.maxSupply();
    console.log("CriptoAventuraENS Address: ", await criptoAventura.getAddress());
    console.log("Total Supply NFTs: ", contractMaxSupply);
  } else {
    await deploy("CriptoAventura", {
      from: deployer,
      log: true,
      autoMine: true,
    });

    const criptoAventura = await hre.ethers.getContract<Contract>("CriptoAventura", deployer);
    const contractMaxSupply = await criptoAventura.maxSupply();
    console.log("CriptoAventura Address: ", await criptoAventura.getAddress());
    console.log("Total Supply NFTs: ", contractMaxSupply);
  }
};

export default deployCriptoAventura;

deployCriptoAventura.tags = ["CriptoAventura"];
