import { GetStaticProps, NextPage } from 'next'
import { PortfolioSection } from 'src/components/portfolio/portfolio-section'
import { SectionTitle } from 'src/components/section/section-title'
import { client } from 'src/lib/client'
import { ClientResponse, Data } from 'src/types/microcms'

type Props = {
  portfolios: Data[]
}

const Portfolio: NextPage<Props> = ({ portfolios }) => {
  return (
    <div className='px-4 h-screen'>
      <SectionTitle title='Portfolio' />
      {portfolios.map((portfolio: Data) => (
        <div key={portfolio.id}>
          <PortfolioSection data={portfolio} />
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const portfolios = await client.get<ClientResponse>({
    endpoint: 'portfolio',
  })
  return {
    props: {
      portfolios: portfolios.contents,
    },
  }
}

export default Portfolio
