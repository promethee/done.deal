import { User as UserInterface } from '../pages/api/users'
import { UsersList } from '../components/userslist'

export interface UserProps {
  users?: UserInterface[]
  error?: string
}

const Users = ({ users, error }: UserProps) => {
  return (
    <div className='flex flex-col'>
      <div className=''>
        <h1 className='text-3xl font-bold'>
          Users Page
        </h1>
      </div>
      {error && <div>{error}</div>}
      {users?.length === 0 ? (
        <p>No users found</p>
      ) : (
        <UsersList users={users as UserInterface[]} />
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/users`)
  const { users, error } = await res.json()
  return { props: { users, error } }
}

export default Users