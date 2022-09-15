import { Avatar } from '@mantine/core'
import Image from 'next/image'
import { TweetType, TwitterProfileType } from 'src/types/twitter'

type Props = {
  name: string
  userName: string
  tweet: string
  createdAt: string
  url: string
}

export const TwitterSection: React.FC<Props> = ({
  name,
  userName,
  tweet,
  createdAt,
  url,
}) => {
  return (
    <div>
      <div className='flex'>
        <div>
          <div className='relative mr-2 w-9 h-9'>
            <Avatar radius='xl' size={38} src={url} />
          </div>
        </div>
        <div>
          <div className='flex'>
            <div className='pr-1 text-base font-bold'>{name}</div>
            <div className='text-[#909296]'>{`@${userName}・${createdAt}`}</div>
          </div>
          <p className='py-4'>{tweet}</p>
        </div>
      </div>
    </div>
  )
}
