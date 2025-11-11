import { PrismaClient, Prisma } from '../generated/prisma';

const prisma = new PrismaClient();

export type CreateMovieInput = {
  title: string;
  originalTitle?: string | null;
  releaseDate: Date | string; 
  description?: string | null;
  budget?: number | null;
  duration: number;
  imageUrl?: string | null;
  genre: string;
  userId: string;
};

export type UpdateMovieInput = Partial<{
  title: string;
  originalTitle: string | null;
  releaseDate: Date | string;
  description: string | null;
  budget: number | null;
  duration: number;
  imageUrl: string | null;
  genre: string;
}>;

export const getMovies = async () => {
  return prisma.movie.findMany({
    orderBy: [{ releaseDate: 'desc' }, { createdAt: 'desc' }],
  });
};

export const getMovieById = async (id: string) => {
  return prisma.movie.findUnique({ where: { id } });
};

export const createMovie = async (data: CreateMovieInput) => {
  const releaseDate =
    typeof data.releaseDate === 'string' ? new Date(data.releaseDate) : data.releaseDate;

  return prisma.movie.create({
    data: {
      title: data.title,
      originalTitle: data.originalTitle ?? null,
      releaseDate,
      description: data.description ?? null,
      budget: data.budget ?? null,
      duration: data.duration,
      imageUrl: data.imageUrl ?? null,
      genre: data.genre,
      userId: data.userId,
    },
  });
};

export const updateMovie = async (id: string, data: UpdateMovieInput) => {
  const updateData: Prisma.MovieUpdateInput = {};

  if (typeof data.title !== 'undefined') updateData.title = data.title;
  if (typeof data.originalTitle !== 'undefined') updateData.originalTitle = data.originalTitle;
  if (typeof data.releaseDate !== 'undefined') {
    updateData.releaseDate =
      typeof data.releaseDate === 'string' ? new Date(data.releaseDate) : data.releaseDate;
  }
  if (typeof data.description !== 'undefined') updateData.description = data.description;
  if (typeof data.budget !== 'undefined') updateData.budget = data.budget;
  if (typeof data.duration !== 'undefined') updateData.duration = data.duration;
  if (typeof data.imageUrl !== 'undefined') updateData.imageUrl = data.imageUrl;
  if (typeof data.genre !== 'undefined') updateData.genre = data.genre;

  return prisma.movie.update({
    where: { id },
    data: updateData,
  });
};

export const deleteMovie = async (id: string) => {
  await prisma.movie.delete({ where: { id } });
};