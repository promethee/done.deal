import { User as UserInterface } from "../pages/api/users"
import UserCard from "./usercard"

export const UsersList = ({ users }: { users: UserInterface[] }) => {
  return (
    <div className="flex flex-nowrap md:flex-wrap flex-col md:flex-row">
      {(users || []).length === 0 && <p>No users found</p>}
      {users.map((user: UserInterface) => {
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
