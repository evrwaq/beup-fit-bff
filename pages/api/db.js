import oracledb from "oracledb";
import dbConfig from "../../utils/db-config";

export const getConnection = async () => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    return connection;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
};

export const closeConnection = async (connection) => {
  try {
    if (connection) {
      await connection.close();
      console.log("Conexão com o banco de dados encerrada.");
    }
  } catch (error) {
    console.error("Erro ao fechar a conexão:", error);
  }
};
