import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";

export interface AuthUser {
  id: string;
  email: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: AuthUser;
  }
}

export const authGuard = (req: Request, res: Response, next: NextFunction) =>  {
  const header = req.headers.authorization
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token ausente" })
  }
  const token = header.substring("Bearer ".length)
  try {
    const payload = verifyJwt(token);
    req.user = { id: payload.sub, email: payload.email }
    next()
  } catch {
    return res.status(401).json({ message: "Token inválido ou expirado" })
  }
}