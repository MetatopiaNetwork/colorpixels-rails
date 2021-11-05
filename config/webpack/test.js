process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.NFT_STORAGE_API_KEY = "";

const environment = require("./environment");

module.exports = environment.toWebpackConfig();
