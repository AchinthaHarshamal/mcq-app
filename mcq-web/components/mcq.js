import React from 'react'

const MCQ = ({ mcq }) => {

    const {qId, question , selections , answers} = mcq ;
    return (
        <>
            <div>
                <div> {qId} </div>
                <h2>{question}</h2>
                {
                    selections.map(selection =>{
                        return (
                            <div>
                                {selection}
                            </div>
                        )
                    })
                }
                <hr/>
                <span>Answers: </span>
                {
                    answers.map(answer =>{
                        return (
                            <div>
                                {answer}
                            </div>
                        )
                    })
                }

                <hr />


            </div>
        </>
    )
}

export default MCQ