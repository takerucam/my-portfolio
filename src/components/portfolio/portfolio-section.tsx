import Image from 'next/image'
import { SectionBody } from 'src/components/section/section-body'
import { SectionSubTitle } from 'src/components/section/section-sub-title'
import { Data } from 'src/types/microcms'

type Props = {
  data: Data
}

export const PortfolioSection: React.FC<Props> = ({ data }) => {
  return (
    <div className='m-0 mb-6'>
      <div className='relative mb-2 w-full h-[184px]'>
        <Image src='/img.jpeg' alt='ポートフォリオの画像' layout='fill' />
      </div>
      <SectionBody data={data} />
    </div>
  )
}
