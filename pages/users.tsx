export interface User {
  id: string
  name: string
}

export interface UserProps {
  data?: {
    users: User[]
  }
}

const Users = ({ data }: UserProps) => {
  return (
    <div>
      <h1>Users Page</h1>
      <div>
        {data?.users?.map((user: User) => {
          return (
            <div key={user.id}>
              {user.name}
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