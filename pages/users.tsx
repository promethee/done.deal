import { User } from './api/users';

export interface UserProps {
  users?: User[]
}

const Users = ({ users }: UserProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex text-center'>
        <h1 className='text-3xl font-bold'>
          Users Page
        </h1>
      </div>
      {users && <Users users={users} />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/users`)
  const users = await res.json()
  return { props: { users } }
}

export default Users