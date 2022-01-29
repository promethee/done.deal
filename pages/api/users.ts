import pgPromise from "pg-promise"
import type { NextApiRequest, NextApiResponse } from 'next'

const pgp = pgPromise({ noWarnings: true })

const connexionString = [
  'postgres://',
  process.env.POSTGRES_USER, ':', process.env.POSTGRES_PASSWORD,
  '@',
  process.env.DB_HOST,':',process.env.DB_PORT,
  '/dealt'
].join('')

const db = pgp(connexionString)

export interface RandomUser {
  name: {
    title: string
    first: string
    last: string
  }
  pictures: {
    [key: string]: string
  }
}

export interface User {
  id: string
  title: string
  firstname: string
  lastname: string
  thumbnail: string
  picture: string
}

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const users: User[] = await db.any('SELECT * FROM users');
    res.status(200).json({ users, error: null });
  } catch (error) {
    res.status(500).json({ users: [], error: 'Error while getting users' });
  }
}

export default handler
