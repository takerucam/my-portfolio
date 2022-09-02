import Link from 'next/link'

type Props = {
  text?: string
  link: string
}

export const Button: React.FC<Props> = ({ text = 'View All', link }) => {
  return (
    <Link href={link}>
      <div className=' h-[45px] bg-[#25262B] rounded-full'>
        <p className='py-[10px] px-[22px] m-0 text-white'>{text}</p>
      </div>
    </Link>
  )
}
