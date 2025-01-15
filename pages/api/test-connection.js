import { getConnection, closeConnection } from "./db";

export default async function handler(req, res) {
  let connection;

  try {
    connection = await getConnection();

    // Consulta básica para testar a conexão
    const result = await connection.execute("SELECT SYSDATE FROM DUAL");
    res.status(200).json({
      message: "Conexão bem-sucedida!",
      currentDate: result.rows[0][0],
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao conectar ao banco de dados.", error });
  } finally {
    await closeConnection(connection);
  }
}
