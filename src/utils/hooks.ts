import { useState, useEffect } from 'react'

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

export const useWindowSize = (): WindowSize => {
  const isSSR = typeof window === 'undefined'

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: isSSR ? undefined : window.innerWidth,
    height: isSSR ? undefined : window.innerHeight,
  })

  useEffect(() => {
    if (isSSR) {
      return
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isSSR]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
