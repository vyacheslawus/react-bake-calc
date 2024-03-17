import { useEffect, useState } from "react"
import "./Header.css"


export default function Header() {


  const [time, setTime] = useState(new Date())

  useEffect(() => {
    console.log('re')
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return function () {
      clearInterval(interval)
    }
  }, [])

  return (
    <header>
      <div>
        <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="" width="50" height="50" />
      </div>

      <h3>welcome welcome </h3>

      <span>the time is now: {time.toLocaleTimeString()}

      </span>

    </header>
  )

}