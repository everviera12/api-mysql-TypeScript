import { createPool } from "mysql2/promise";

export const connection = async () => {
  const conect = await createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root123",
    database: "db_test",
  });
  return conect;
};
