import React from "react";
import s from "./Button.module.css"

export type ButtonPropsType = {
    title: string
    onClick: () => void

}

export function ButtonMultiFN(props: ButtonPropsType) {

    return (
        <div>
            <button className={s.styleButton}
                    onClick={props.onClick}
            >
                {props.title}
            </button>
        </div>
    )
}