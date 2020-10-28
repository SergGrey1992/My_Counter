import React from "react";
import s from "../ButtonInc/Button.module.css";

export type ButtonPropsType = {
    title: string
    display: number
    resetDisplay: (display: number) => void
}

export function ButtonRes (props: ButtonPropsType) {
    const resetNumber = () => { props.resetDisplay(props.display) }

    return (
        <div >
            <button
                className={props.display > 0 ? s.styleButton : s.styleButtonError}
                onClick={resetNumber}
                disabled={props.display === 1}>{props.title}</button>
        </div>
    )
}