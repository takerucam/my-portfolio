import {
  ActionIcon,
  Burger,
  Overlay,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'

export const Header: React.FC = () => {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close navigation' : 'Open naigation'
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  console.log(opened)

  return (
    <div className='mt-11'>
      {opened && (
        <Overlay
          opacity={1}
          color='#E64980'
          zIndex={5}
          className='overflow-hidden h-screen'
        >
          <div className='px-4 mt-[44px] h-screen'>
            <div className='flex items-center mb-[24px]] h-[65px]'>
              <Burger
                opened={opened}
                onClick={() => setOpened((o: boolean) => !o)}
                title={title}
                color='white'
              />
            </div>
            <Link href='/about'>
              <div
                className='pb-4 text-[28px] font-bold text-white'
                onClick={() => setOpened(false)}
              >
                About
              </div>
            </Link>
            <Link href='/blog'>
              <div
                className='pb-4 text-[28px] font-bold text-white'
                onClick={() => setOpened(false)}
              >
                Blog
              </div>
            </Link>
            <Link href='/portfolio'>
              <div
                className='pb-4 text-[28px] font-bold text-white'
                onClick={() => setOpened(false)}
              >
                Portfolio
              </div>
            </Link>
            <Link href='/contact'>
              <div
                className='pb-4 text-[28px] font-bold text-white'
                onClick={() => setOpened(false)}
              >
                Contact
              </div>
            </Link>
          </div>
        </Overlay>
      )}
      <div className='flex justify-between py-5 px-4 h-[65px]'>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: boolean) => !o)}
          title={title}
        />
        <Link href='/'>
          <div className='font-bold'>Shimabu IT University</div>
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
  )
}
