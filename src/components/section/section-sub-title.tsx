type Props = {
  title?: string
}

export const SectionSubTitle: React.FC<Props> = ({ title = 'タイトル' }) => {
  return (
    <div>
      <p className='m-0 text-[22px] font-bold'>{title}</p>
    </div>
  )
}
