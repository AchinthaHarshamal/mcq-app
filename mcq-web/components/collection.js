import React from 'react'

const Collection = ({ collection }) => {

    return (
        < >
            <h3>{collection.title}</h3>
            <span>{collection.author}</span>
            <span>{collection.nQs}</span>
            <hr />
        </>)

}

export default Collection