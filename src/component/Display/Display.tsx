import React from "react";
import s from "./Display.module.css"


export type DisplayPropsType = {
    display: number
    newSetDisplay: (display: number) => void
    resetDisplay: (display: number) => void
    maxValue: number
    error: boolean
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={s.displayWrapper}>
            {props.error ? <div> Error</div>
                :
                <h1 className={props.display === props.maxValue ? s.error : s.h1Block}>{props.display}</h1>
            }

        </div>

    )
}