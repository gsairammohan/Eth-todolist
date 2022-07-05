module.exports = {
  networks: {         // development server connected to ganache through given port
    development: {
      host: "127.0.0.1",  //
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}