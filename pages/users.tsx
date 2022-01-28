import { formatUserName } from '../utils';
import { User } from './api/users';

export interface UserProps {
  data?: User[]
}

const Users = ({ data }: UserProps) => {
  return (
    <div>
      <div>
        <h1>Users Page</h1>
      </div>
      {(data || []).length === 0 && (
        <p>No found</p>
      )}
      <div>
        {data?.map((user: User) => {
          return (
            <div key={user.id}>
              {formatUserName(user)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users')
  const data = await res.json()
  return { props: { data } }
}

export default Users