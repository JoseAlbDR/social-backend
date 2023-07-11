import express, { Express } from "express";
import { SocialServer } from "./setupServer";
import dbConnection from "./setupDatabase";

class Application {
  public initialize(): void {
    dbConnection();
    const app: Express = express();
    const server: SocialServer = new SocialServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
