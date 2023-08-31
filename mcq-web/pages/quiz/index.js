import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const quizeCollection = ({ quizId = 20 }) => {
    const router = useRouter()
    const handleClick = () =>{
        console.log('click the div');
        router.push('/quiz/5')

    }

    return (
        <div>
            <h1>Collection</h1>

            <Link href={`/quiz/${quizId}`}>
                Collection {quizId}
            </Link>

            <div onClick={handleClick}>
                <h1>Title COxxx</h1>
                <p>this is some description</p>
                <span>Questions: 24</span>
                <span>Author: Achintha</span>
            </div>
        </div>
    )
}

export default quizeCollection