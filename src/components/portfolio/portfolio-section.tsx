import Image from 'next/image'
import { SectionBody } from 'src/components/section/section-body'
import { SectionSubTitle } from 'src/components/section/section-sub-title'
import { Data } from 'src/types/microcms'

type Props = {
  data: Data
}

export const PortfolioSection: React.FC<Props> = ({ data }) => {
  return (
    <div className='m-0 mb-8'>
      <Image
        src='/img.jpeg'
        alt='ポートフォリオの画像'
        width={358}
        height={184}
      />
      <SectionBody data={data} />
    </div>
  )
}
