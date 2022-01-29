import { User as UserInterface } from '../pages/api/users'
import Image from 'next/image'
import { formatUserName } from '../utils'

export const UserCard = ({ user }: { user: UserInterface }) => {
  const name = formatUserName(user);
  return (
    <figure className="bg-slate-100 p-8 m-4 justify-start md:justify-center">
      <Image
        className='w-24 h-24 mx-auto'
        src={user.picture}
        blurDataURL={user.thumbnail}
        alt={name}
        width={128}
        height={128}
      />
      <div className="pt-6 text-center space-y-4">
        <figcaption className='font-medium'>
          <div className='text-sky-500 dark:text-sky-400'>
            {name}
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default UserCard
