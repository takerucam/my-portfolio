import { Burger } from '@mantine/core'
import { useState } from 'react'

export const Menu: React.FC = () => {
  const [opened, setOpened] = useState(true)
  const title = opened ? 'Close navigation' : 'Open naigation'
  return (
    <div className='px-4 mt-[44px] h-screen'>
      <div className='flex items-center h-[65px]'>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: boolean) => !o)}
          title={title}
          color='white'
        />
      </div>
    </div>
  )
}
