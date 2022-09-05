import { useLayoutEffect, useState } from 'react'

type WindSizeType = {
  width: number
  height: number
}

export const useWindowSize = (): boolean => {
  const [size, setSize] = useState<WindSizeType>({ width: 0, height: 0 })
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size.width < 768
}
