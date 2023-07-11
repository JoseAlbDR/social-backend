import {
  Application,
  json,
  urlencoded,
  Response,
  Request,
  NextFunction,
} from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import cookierSession from "cookie-session";
import HTTP_STATUS from "http-status-codes";
import "express-async-errors";

export class SocialServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routeMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookierSession({
        name: "session",
        keys: ["test1", "test2"],
        maxAge: 30 * 7 * 3600000,
        secure: false,
      })
    );
  }

  private standardMiddleware(app: Application): void {}

  private routeMiddleware(app: Application): void {}

  private globalErrorHandler(app: Application): void {}

  private startServer(app: Application): void {}

  private createSocketID(httpServer: http.Server): void {}

  private startHttpServer(httpServer: http.Server): void {}
}
