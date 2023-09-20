import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Collection from '@/components/collection'


const QuizeCollection = ({ collections }) => {
    const router = useRouter()
    const handleClick = (id) => {
        router.push(`/quiz/${id}`)
    }

    return (
        <div>
            <h1>Collection</h1>
            {
                collections.map(collection => {
                    return (
                        <div key={collection._id} onClick={() => handleClick(collection._id)}>
                            <Collection collection={collection} />
                        </div>)
                })
            }
        </div>
    )
} 

export default QuizeCollection


export async function getStaticProps() {
    const response = await fetch("http://localhost:5001/api/collections");
    const data = await response.json();

    return {
        props: {
            collections: data
        }
    }
}