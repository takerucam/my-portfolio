import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { SectionTitle } from 'src/components/section/section-title'
import { client } from 'src/lib/client'
import { ClientResponse, Data } from 'src/types/microcms'

type Props = {
  blog: Data
}

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <div className='px-4 h-screen'>
      <SectionTitle title={blog.title} />
      <div
        className='break-words'
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
      ></div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const blogs = await client.getList<ClientResponse>({ endpoint: 'blogs' })
  const ids = blogs.contents.map((content) => `/blog/${content.id}`)
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  if (!context.params) {
    return { notFound: true }
  }
  const blog = await client.getListDetail<Data>({
    endpoint: 'blogs',
    contentId: context.params.id,
  })

  return {
    props: {
      blog: blog,
    },
  }
}

export default BlogId
