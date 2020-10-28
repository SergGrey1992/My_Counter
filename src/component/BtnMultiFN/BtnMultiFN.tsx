import React from "react";


export type ButtonPropsType = {
    title: string
    onClick: () => void
}

export function ButtonMultiFN(props: ButtonPropsType) {

    return (
        <div>
            <button onClick={props.onClick}  >{props.title}</button>
        </div>
    )
}