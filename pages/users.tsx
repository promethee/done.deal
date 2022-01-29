import { User as UserInterface } from '../pages/api/users'
import { UsersList } from '../components/userslist'

export interface UserProps {
  users?: UserInterface[]
}

const Users = ({ users }: UserProps) => {
  return (
    <div className='flex flex-col'>
      <div className=''>
        <h1 className='text-3xl font-bold'>
          Users Page
        </h1>
      </div>
      {users?.length && <UsersList users={users} />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/users`)
  const users = await res.json()
  return { props: { users } }
}

export default Users