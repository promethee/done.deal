import { User as UserInterface } from '../pages/api/users'
import Image from 'next/image'
import { formatUserName } from '../utils'

export const User = ({ user }: { user: UserInterface }) => {
  const name = formatUserName(user);
  return (
    <figure>
      <Image
        className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
        src={user.picture}
        blurDataURL={user.thumbnail}
        alt={name}
        width={384}
        height={512}
      />
      <figcaption className='font-medium'>
        <div className='text-sky-500 dark:text-sky-400'>
          {name}
        </div>
      </figcaption>
    </figure>
  )
}

export default User;
