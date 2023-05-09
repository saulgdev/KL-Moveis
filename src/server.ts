import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Servidor executando na porta ${3000}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
