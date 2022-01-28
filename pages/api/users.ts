import pgPromise from "pg-promise"
import type { NextApiRequest, NextApiResponse } from 'next'

const pgp = pgPromise({ noWarnings: true })

const db = pgp(`postgres:://User:Password@data.local:5432/users`)

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await db.any('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: 'Error while getting users', error });
  }
}

export default handler
