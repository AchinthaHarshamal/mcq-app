import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
        <h1>MCQ bank</h1>
        <Link href='/createbank'>
            Create
        </Link>
        <div></div>
        <Link href='/quiz'>
            Colloection
        </Link>
    </div>
  )
}

export default Home