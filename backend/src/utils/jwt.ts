import dotenv from "dotenv";
dotenv.config();

import jwt, { SignOptions, JwtPayload as JwtPayloadBase } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não definido no .env");
}

export interface AppJwtPayload extends JwtPayloadBase {
  sub: string;    
  email: string;
}

const defaultSignOptions: SignOptions = {
  expiresIn: (process.env.JWT_EXPIRES_IN ?? "1d") as unknown as number, 
};

export function signJwt(payload: AppJwtPayload, options?: SignOptions) {
  return jwt.sign(payload, JWT_SECRET as string, { ...defaultSignOptions, ...options });
}

export function verifyJwt(token: string): AppJwtPayload {
  const decoded = jwt.verify(token, JWT_SECRET as string);
  if (typeof decoded === "string") {
    throw new Error("Token inválido");
  }
  return decoded as AppJwtPayload;
}