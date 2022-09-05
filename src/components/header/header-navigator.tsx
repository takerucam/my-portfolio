import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'
import Link from 'next/link'

export const HeaderNavigator: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <div className='flex justify-center items-center h-[65px]'>
      <div className='w-4/5'>
        <div className='flex justify-between w-full'>
          <Link href='/'>
            <a className='text-[18px] font-bold text-black'>
              Shimabu IT University
            </a>
          </Link>
          <div className='flex gap-x-4'>
            <Link href='/about'>
              <a className='text-[18px] font-bold text-black'>About</a>
            </Link>
            <Link href='/blog'>
              <a className='text-[18px] font-bold text-black'>Blog</a>
            </Link>
            <Link href='/portfolio'>
              <a className='text-[18px] font-bold text-black'>Portfolio</a>
            </Link>
            <Link href='/contact'>
              <a className='text-[18px] font-bold text-black'>Contact</a>
            </Link>
            <ActionIcon
              variant='outline'
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title='Toggle color scheme'
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  )
}
