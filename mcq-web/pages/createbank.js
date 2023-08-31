import React from 'react'
import Link from 'next/link'

const Createbank = () => {
  return (
    <div>
        <Link href="/">
            <h1>MCQ Bank</h1>
        </Link>
        
        <h1>Create Bank</h1>
        <Link href='/quiz'>
            Colloection
        </Link>
    </div>

    
  )
}

export default Createbank