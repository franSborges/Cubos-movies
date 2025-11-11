import { Request, Response } from "express";
import { z } from "zod";
import * as svc from "../services/auth.service";

const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signup = async (req: Request, res: Response) =>  {
  const parse = registerSchema.safeParse(req.body)
  if (!parse.success) {
    return res.status(400).json({ message: "Dados inválidos", issues: parse.error.issues })
  }
  try {
    const { user, token } = await svc.signup(parse.data.name, parse.data.email, parse.data.password)
    return res.status(201).json({ user, token })
  } catch (e: any) {
    const msg = e?.message ?? "Erro ao registrar";
    const code = msg.includes("E-mail já cadastrado") ? 409 : 400;
    return res.status(code).json({ message: msg })
  }
}

export const login = async (req: Request, res: Response) =>{
  const parse = loginSchema.safeParse(req.body)
  if (!parse.success) {
    return res.status(400).json({ message: "Dados inválidos", issues: parse.error.issues })
  }
  try {
    const { user, token } = await svc.login(parse.data.email, parse.data.password)
    return res.status(200).json({ user, token })
  } catch (e: any) {
    return res.status(401).json({ message: e?.message ?? "Credenciais inválidas" })
  }
}

export const user = async (req: Request, res: Response) => {
  try {
    const user = await svc.user(req.user!.id)
    return res.json({ user })
  } catch (e: any) {
    return res.status(404).json({ message: e?.message ?? "Usuário não encontrado" })
  }
}