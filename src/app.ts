import express, { Express } from "express";
import { SocialServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: SocialServer = new SocialServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
