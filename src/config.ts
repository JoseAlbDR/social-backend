import dotenv from "dotenv";

dotenv.config({});

class Config {
  public DATABSE_URL: string | undefined = process.env.DATABASE_URL;
  public JWT_TOKEN: string | undefined = process.env.JWT_TOKEN;
  public NODE_ENV: string | undefined = process.env.NODE_ENV;
  public SECRET_KEY_ONE: string | undefined = process.env.SECRET_KEY_ONE;
  public SECRET_KEY_TWO: string | undefined = process.env.SECRET_KEY_TWO;
  public CLIENT_URL: string | undefined = process.env.CLIENT_URL;
}

export const config: Config = new Config();
