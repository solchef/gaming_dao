/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DoubleEndedQueueUpgradeable,
  DoubleEndedQueueUpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/utils/structs/DoubleEndedQueueUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "Empty",
    type: "error",
  },
  {
    inputs: [],
    name: "OutOfBounds",
    type: "error",
  },
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205354ffe3c3266aecb74c4118cf9e5430027e54bd44784924cab21f78049be72564736f6c63430008080033";

type DoubleEndedQueueUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoubleEndedQueueUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoubleEndedQueueUpgradeable__factory extends ContractFactory {
  constructor(...args: DoubleEndedQueueUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DoubleEndedQueueUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<DoubleEndedQueueUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DoubleEndedQueueUpgradeable {
    return super.attach(address) as DoubleEndedQueueUpgradeable;
  }
  override connect(signer: Signer): DoubleEndedQueueUpgradeable__factory {
    return super.connect(signer) as DoubleEndedQueueUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoubleEndedQueueUpgradeableInterface {
    return new utils.Interface(_abi) as DoubleEndedQueueUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleEndedQueueUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DoubleEndedQueueUpgradeable;
  }
}
