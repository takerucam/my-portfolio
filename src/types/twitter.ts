import { type } from 'os'

export type TwitterProfileType = {
  id: string
  name: string
  profile_image_url: string
  user_name: string
}

export type TweetType = {
  id: string
  create_at: string
  text: string
}

export type TwitterType = {
  profile: TwitterProfileType
  tweets: TweetType[]
}
