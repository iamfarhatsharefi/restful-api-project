const { Sequelize } = require("sequelize");

// Create a connection to the database using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql", // Change to 'postgres' if needed
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the SQL database established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
