module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
 networks: {
    development: {
      // host: "192.168.86.3", // Laptop
      // host: "192.168.86.4", // Windows
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
//      gas: 6712390  // to mache the Ganache server
    }
  },

  mocha: {
    useColors: true
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }

};
