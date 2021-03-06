module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
 networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '604778'		
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
