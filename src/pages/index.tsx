import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { Button } from 'src/components/button/button'
import { GitHubBody } from 'src/components/github/github-body'
import { HeaderSection } from 'src/components/header/header-section'
import { PortfolioSection } from 'src/components/portfolio/portfolio-section'
import { SectionBody } from 'src/components/section/section-body'
import { SectionTitle } from 'src/components/section/section-title'
import { TwitterSection } from 'src/components/twitter/twitter-section'
import { client } from 'src/lib/client'
import { Data, ClientResponse } from 'src/types/microcms'

type Props = {
  blogs: Data[]
  portfolios: Data[]
}

const Home: NextPage<Props> = ({ blogs, portfolios }) => {
  return (
    <div className='relative h-screen'>
      <HeaderSection />
      <div className='px-4'>
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
        {portfolios.map((portfolio: Data) => (
          <div key={portfolio.id}>
            <PortfolioSection data={portfolio} />
          </div>
        ))}
        <div className='flex justify-center'>
          <Button link='/portfolio' />
        </div>
        <SectionTitle title='GitHub' />
        <GitHubBody />
        <GitHubBody />
        <GitHubBody />
        <div className='flex justify-center'>
          <Button link='/about' />
        </div>
        <SectionTitle title='Twitter' />
        <TwitterSection />
        <TwitterSection />
        <TwitterSection />
        <TwitterSection />
        <div className='flex justify-center'>
          <Button text='View on Twitter' link='/about' />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<ClientResponse>({ endpoint: 'blogs' })
  const portfolios = await client.get<ClientResponse>({ endpoint: 'portfolio' })
  return {
    props: {
      blogs: blogs.contents,
      portfolios: portfolios.contents,
    },
  }
}

export default Home
