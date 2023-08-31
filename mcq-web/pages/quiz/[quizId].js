import React from 'react'
import { useRouter } from 'next/router'

const Quiz = () => {
    const router = useRouter()
    const quizId = router.query.quizId
    return (
        <div>Quiz {quizId}</div>
    )
}

export default Quiz