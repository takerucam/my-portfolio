import dayjs from 'dayjs'
import { SectionSubTitle } from 'src/components/section/section-sub-title'
import { Data } from 'src/types/microcms'

type Props = {
  data: Data
}

export const SectionBody: React.FC<Props> = ({ data }) => {
  return (
    <div className='m-0 mb-6'>
      <SectionSubTitle title={data.title} />
      <div
        className='py-2 break-words'
        dangerouslySetInnerHTML={{ __html: `${data.body}` }}
      />
      <time dateTime={data.date} className='m-0 text-xs'>
        {dayjs(data.date).format('YYYY年MM月DD日')}
      </time>
    </div>
  )
}
