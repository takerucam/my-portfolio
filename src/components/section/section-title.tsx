type Props = {
  title: string
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className='mt-10 mb-6'>
      <div className='h-15 border-x-0 border-t-0 border-b-2 border-border border-solid'>
        <p className='table-cell text-[26px] font-bold text-left align-top'>
          {title}
        </p>
      </div>
    </div>
  )
}
