import { useState } from 'react'

function App() {
  const [reply, setReply] = useState<string>('')

  async function callFunction() {
    const res = await fetch('/api/hello')
    const data = await res.json()
    setReply(data.message)
  }

  return (
    <main>
      <h1>Vite + React + TS</h1>
      <p>Deployed on Netlify.</p>
      <button onClick={callFunction}>Call /api/hello</button>
      {reply && <p>{reply}</p>}
    </main>
  )
}

export default App
