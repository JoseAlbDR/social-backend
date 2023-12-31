import dotenv from "dotenv";

dotenv.config({});

// const DEFAULT_DATABASE_URL: string =
//   "mongodb://127.0.0.1:27017/socialapp-backend";

// export const config = {
//   DATABASE_URL: process.env.DATABASE_URL || DEFAULT_DATABASE_URL,
//   JWT_TOKEN: process.env.JWT_TOKEN || "1234",
//   NODE_ENV: process.env.NODE_ENV || "",
//   SECRET_KEY_ONE: process.env.SECRET_KEY_ONE || "",
//   SECRET_KEY_TWO: process.env.SECRET_KEY_TWO || "",
//   CLIENT_URL: process.env.CLIENT_URL || "",
//   REDIS_HOST: process.env.REDIS_HOST || "",
// };

// export function validateConfig(): void {
//   for (const [key, value] of Object.entries(config)) {
//     if (value === undefined) {
//       throw new Error(`${key} is not defined`);
//     }
//   }
// }

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public REDIS_HOST: string | undefined;

  private readonly DEFAULT_DATABASE_URL: string =
    "mongodb://127.0.0.1:27017/socialapp-backend";

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN || "1234";
    this.NODE_ENV = process.env.NODE_ENV || "";
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || "";
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || "";
    this.CLIENT_URL = process.env.CLIENT_URL || "";
    this.REDIS_HOST = process.env.REDIS_HOST || "";
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`${key} is not defined`);
      }
    }
  }
}
export const config: Config = new Config();
