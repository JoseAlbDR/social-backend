import {
  Application,
  json,
  urlencoded,
  Response,
  Request,
  NextFunction,
} from "express";
import http from "http";

export class SocialServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {}

  private securityMiddleware(app: Application): void {}

  private standardMiddleware(app: Application): void {}

  private routeMiddleware(app: Application): void {}

  private globalErrorHandler(app: Application): void {}

  private startServer(app: Application): void {}

  private createSocketID(httpServer: http.Server): void {}

  private startHttpServer(httpServer: http.Server): void {}
}
