import React from "react";

export type ButtonPropsType = {
    title: string
    display: number
    newSetDisplay: (display: number) => void
    resetDisplay: (display: number) => void
}

export function ButtonInc (props: ButtonPropsType) {
    const newNumber = () => { props.newSetDisplay(props.display) }

    return (
        <div>
            <button onClick={ () => { newNumber() } } >{ props.title }</button>
        </div>
    )
}