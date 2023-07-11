import express, { Express } from "express";
import { SocialServer } from "./setupServer";
import dbConnection from "./setupDatabase";
import { config } from "./config";

// const loadConfig = function (): void {
//   validateConfig();
// };

// const application = {
//   initialize: function (): void {
//     loadConfig();
//     dbConnection();
//     const app: Express = express();
//     const server: SocialServer = new SocialServer(app);
//     server.start();
//   },
// };

// application.initialize();

class Application {
  public initialize(): void {
    // Validates configuration variables
    this.loadConfig();
    // Connect to database
    dbConnection();
    // Setup server
    const app: Express = express();
    const server: SocialServer = new SocialServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
