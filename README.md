[![Maintained by Spydra.app](https://img.shields.io/badge/maintained%20by-spydra.app-blueviolet)](https://www.spydra.app/?utm_source=github&utm_medium=fabric_contract)
[![npm version](https://badge.fury.io/js/spydra-fabric-contract-node.svg)](https://badge.fury.io/js/spydra-fabric-contract-node)
# Spydra Hyperledger Fabric Base Contract

The Spydra Hyperledger Fabric Base Contract has various utility methods which provide additional functionalities out of the box to any Chaincode that is deployed in a [Spydra](https://www.spydra.app/?utm_source=github&utm_medium=fabric_contract) blockchain network. Simply extend your own Chaincode Smart Contract from the Spydra Base Contract to get these additional features.

- Query the world state using Graph QL. For more details, refer to [Spydra Graph QL](https://docs.spydra.app/products-overview/graphql).

## Quick Start
1. Install spydra-fabric-contract-node from npm.

    With npm:
    ```sh
    $ npm install --save spydra-fabric-contract-node
    ```

    or using yarn:
    ```sh
    $ yarn add spydra-fabric-contract-node
    ```
2. Extend your Smart Contract from the Spydra Base Contract.
    ```javascript
    class MyCustomContract extends SpydraContract {
	    
    }
    ```
3. Export the SpydraContract as one of the Smart contracts in index.js.
    ```javascript
        module.exports.contracts = [MyCustomContract, SpydraContract];
    ```

4. [Deploy](https://docs.spydra.app/how-to/apps/deploy-app) the Chaincode on a Spydra Blockchain network and start querying on any attribute using [Graph QL](https://docs.spydra.app/products-overview/graphql).