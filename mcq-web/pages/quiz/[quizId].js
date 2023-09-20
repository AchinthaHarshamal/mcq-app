import React from 'react'
import { useRouter } from 'next/router'
import MCQ from '@/components/mcq'

const Quiz = ({ collection }) => {
    const router = useRouter()
    const quizId = router.query.quizId;

    const { _id, title, author, mcqs } = collection


    return (
        <>
            <div>Quiz : {quizId} , {_id} , Author: {author}</div>
            <div>Title : {title} </div>
            <div key={quizId}>
                {
                    mcqs.map(mcq => {
                        return (
                            <MCQ mcq={mcq} />
                        )
                    })
                }
            </div>


        </>
    )
}

export default Quiz

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { quizId: '64f223ef161a91dc683e1de3' }
            },
            {
                params: { quizId: '64f22646161a91dc683e1dec' }
            },
            {
                params: { quizId: '64f22692161a91dc683e1dfa' }
            },
            {
                params: { quizId: '64f226fa6f935fcb534eed22' }
            },
            {
                params: { quizId: '65069bf58f64cf83e7e73ba8' }
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:5001/api/collections/${params.quizId}`);
    const data = await response.json();

    return {
        props: {
            collection: data
        }
    }
}