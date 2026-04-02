"use client"

import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleLogin = () => {
     
    document.cookie = "token=12345; path=/"
    router.push("/dashboard")
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}