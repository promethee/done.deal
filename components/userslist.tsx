import { User } from "../pages/api/users"
import UserCard from "./usercard"

export const UsersList = ({ users }: { users: User[] }) => {
  return (
    <div className="flex flex-nowrap md:flex-wrap flex-col md:flex-row">
      {users.map((user: User) => {
        return (
          <div key={user.id}>
            <UserCard user={user} />
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
