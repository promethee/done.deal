import { User } from "../pages/api/users"

export const Users = ({ users }: { users: User[] }) => {
  return (
    <div>
      {(users || []).length === 0 && (
        <p>No users found</p>
      )}
      {users.map((user: User) => {
        return (
          <div key={user.id}>
          </div>
        )
      })}
    </div>
  )
}

export default Users
