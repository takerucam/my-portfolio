import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { SectionBody } from 'src/components/section/section-body'
import { SectionTitle } from 'src/components/section/section-title'
import { client } from 'src/lib/client'
import { ClientResponse, Data } from 'src/types/microcms'

type Props = {
  blogs: Data[]
}

const Blog: NextPage<Props> = ({ blogs }) => {
  return (
    <div className='px-4 h-screen'>
      <SectionTitle title='Blog' />
      {blogs.map((blog: Data) => (
        <div key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a className='text-black no-underline'>
              <SectionBody data={blog} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<ClientResponse>({ endpoint: 'blogs' })
  return {
    props: {
      blogs: blogs.contents,
    },
  }
}

export default Blog
