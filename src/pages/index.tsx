import dayjs from 'dayjs'
import type { GetStaticProps, NextPage } from 'next'
import {
  TweetUserTimelineV2Paginator,
  TweetV2,
  TwitterApi,
  UserV2,
  UserV2Result,
} from 'twitter-api-v2'
import { Button } from 'src/components/button/button'
import { GitHubBody } from 'src/components/github/github-body'
import { HeaderSection } from 'src/components/header/header-section'
import { PortfolioSection } from 'src/components/portfolio/portfolio-section'
import { SectionBody } from 'src/components/section/section-body'
import { SectionTitle } from 'src/components/section/section-title'
import { TwitterSection } from 'src/components/twitter/twitter-section'
import { useWindowSize } from 'src/hooks/use-window-size'
import { client } from 'src/lib/client'
import { Data, ClientResponse } from 'src/types/microcms'
import { TweetType, TwitterProfileType, TwitterType } from 'src/types/twitter'

type Props = {
  blogs: Data[]
  portfolios: Data[]
  user: UserV2
  tweets: TweetV2[]
}

const Home: NextPage<Props> = ({ blogs, portfolios, user, tweets }) => {
  const isTablet = useWindowSize()
  console.log(tweets)

  return (
    <div>
      <HeaderSection />
      <div className='flex justify-center'>
        <div className={`px-4 ${isTablet ? '' : 'w-4/5'}`}>
          <SectionTitle title='Blog' />
          {blogs.map((blog: Data) => (
            <div key={blog.id}>
              <SectionBody data={blog} />
            </div>
          ))}
          <div className='flex justify-center'>
            <Button link='/blog' />
          </div>
          <SectionTitle title='Portfolio' />
          <div className={`${isTablet ? '' : 'flex flex-wrap gap-4'}`}>
            {portfolios.map((portfolio: Data) => (
              <div key={portfolio.id}>
                <PortfolioSection data={portfolio} />
              </div>
            ))}
          </div>
          <div className='flex justify-center'>
            <Button link='/portfolio' />
          </div>
          <div className={` ${isTablet ? '' : 'flex justify-between'}`}>
            <div>
              <SectionTitle title='GitHub' />
              <GitHubBody />
              <GitHubBody />
              <GitHubBody />
              <div className='flex justify-center'>
                <Button link='/about' />
              </div>
            </div>
            <div className={`${isTablet ? '' : 'w-1/2'}`}>
              <SectionTitle title='Twitter' />
              {tweets.map((tweet: TweetV2) => {
                return (
                  <div key={tweet.id}>
                    <TwitterSection
                      name={user.name}
                      userName={user.username}
                      tweet={tweet.text}
                      createdAt={dayjs(tweet.created_at).format(
                        'YYYY年MM月DD日'
                      )}
                      url={user.profile_image_url!}
                    />
                  </div>
                )
              })}
              <div className='flex justify-center mt-8'>
                <Button text='View on Twitter' link='/about' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<ClientResponse>({ endpoint: 'blogs' })
  const portfolios = await client.get<ClientResponse>({ endpoint: 'portfolio' })
  const twitterClient = new TwitterApi(process.env.TWITTER_TOKEN || '')
  const twitterUser: UserV2Result =
    await twitterClient.readOnly.v2.userByUsername('akapakkun777', {
      'user.fields': ['profile_image_url'],
    })
  const timeline: TweetUserTimelineV2Paginator =
    await twitterClient.readOnly.v2.userTimeline(twitterUser.data.id, {
      'tweet.fields': ['created_at'],
      max_results: 5,
    })

  return {
    props: {
      blogs: blogs.contents,
      portfolios: portfolios.contents,
      user: twitterUser.data,
      tweets: timeline.tweets,
    },
  }
}

export default Home
