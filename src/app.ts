import express, { Application } from "express";
import morgan from "morgan";

//routes
import indexRoutes from "./routers/index.routers";
import usuariosRoutes from "./routers/usuarios.routers";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/usuarios", usuariosRoutes);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Hello with TypeScript on port", this.app.get("port"));
  }
}
