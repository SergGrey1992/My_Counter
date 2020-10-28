import React from "react";
import s from './Button.module.css'

export type ButtonPropsType = {
    title: string
    display: number
    newSetDisplay: (display: number) => void
}

export function ButtonInc (props: ButtonPropsType) {
    const newNumber = () => { props.newSetDisplay(props.display) }

    return (
        <div  >
            <button
                className={props.display === 5 ? s.styleButtonError : s.styleButton}
                onClick={ () => { newNumber() } }
                disabled={props.display === 5} >{ props.title }</button>
        </div>
    )
}