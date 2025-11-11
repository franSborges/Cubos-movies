import { PrismaClient } from '../generated/prisma';
import { hashPassword, comparePassword } from "../utils/password";
import { signJwt } from "../utils/jwt";

const prisma = new PrismaClient();

export const signup = async (name: string, email: string, password: string) =>  {
  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) {
    throw new Error("E-mail já cadastrado")
  }
  const passwordHash = await hashPassword(password)
  const user = await prisma.user.create({
    data: { name, email, password: passwordHash },
  });
  const token = signJwt({ sub: user.id, email: user.email })
  return { user: sanitize(user), token }
}

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error("Credenciais inválidas")
  const ok = await comparePassword(password, user.password)
  if (!ok) throw new Error("Credenciais inválidas")
  const token = signJwt({ sub: user.id, email: user.email })
  return { user: sanitize(user), token };
}

export const user = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error("Usuário não encontrado");
  return sanitize(user);
}

const sanitize = (u: { id: string; name: string; email: string }) => {
  return { id: u.id, name: u.name, email: u.email };
}