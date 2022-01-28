import pgPromise from "pg-promise"
import type { NextApiRequest, NextApiResponse } from 'next'

const pgp = pgPromise({ noWarnings: true })

const db = pgp(`postgres://User:Password@data.local:5432/dealt`)

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
    const users = await db.any('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: 'Error while getting users', error });
  }
}

export default handler
