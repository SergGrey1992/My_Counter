import React from "react";
import s from "./Display.module.css"


export type DisplayPropsType = {
    display: number
    resetDisplay: (display: number) => void
    maxValue: number
    error: boolean
    valueError: string
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={s.displayWrapper}>
            {props.error ? <div className={props.display > props.maxValue ? s.valueError : s.value}> {props.valueError} </div>
                :
                <h1 className={props.display === props.maxValue ? s.error : s.h1Block}>{props.display}</h1>
            }

        </div>

    )
}