import { useState, useEffect, useCallback } from 'react'

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

export function useContactForm(form_endpoint: string) {
  const [status, setStatus] = useState<string>()

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const injectedData: Record<string, string> = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    }

    const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[]
    const data = inputs.filter((input) => input.name).reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {} as Record<string, string>)

    Object.assign(data, injectedData)

    fetch(form_endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input')
            el.type = 'hidden'
            el.name = key
            el.value = injectedData[key]

            e.currentTarget.appendChild(el)
          })

          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          e.currentTarget.submit()

          throw new Error('Please finish the captcha challenge')
        }

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        return response.json()
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()))
  }

  return { status, handleFormSubmit }
}

// Here goes the rest of the code...

function useEmail(endpointUrl: string) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const sendEmail = useCallback(
    (data: unknown) => {
      setLoading(true)
      setSubmitted(false)
      setError(undefined)

      fetch(endpointUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
          if (response.status === 422) {
            throw new Error('Are you robot?')
          }

          if (response.status !== 200) {
            throw new Error(`${response.statusText} (${response.status})`)
          }

          return response.json()
        })
        .then(() => {
          setSubmitted(true)
        })
        .catch((err) => {
          setError(err.toString())
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [endpointUrl]
  )

  return {
    submitted,
    loading,
    error,
    sendEmail,
  }
}

export { useEmail }
