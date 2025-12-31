import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>
    Tawk_LoadStart?: Date
  }
}

export default function TawkChat() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/661049471ec1082f04df4729/1hqnpsfkf'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      document.getElementById('tawk-widget')?.remove()
    }
  }, [])

  return null
}
