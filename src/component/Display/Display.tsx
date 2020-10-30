import React from "react";
import s from "./Display.module.css"


export type DisplayPropsType = {
    display: number
    maxValue: number
    startValue: number
    error: boolean
    valueSet: string
    resetDisplay: (display: number) => void
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={s.displayWrapper}>
            {props.error ? <div className={props.display > props.maxValue ? s.valueError : s.value}> {props.valueSet} </div>
                :
                <h1 className={props.display === props.maxValue ? s.error : s.h1Block}>{props.display}</h1>
            }

        </div>

    )
}