import React, {ChangeEvent} from 'react';
import style from "./StartValueInput.module.css"



type StartValueInputPropsType = {
    startValue: number
    setStartValue: (value: number) => void
    errorInput: boolean
}

export function StartValueInput(props: StartValueInputPropsType) {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)

    }

    return (
        <div className={style.inputWrapperStyle}>
            <h3>StartValue: </h3>
            <div>
                <input className={props.errorInput ? style.inputStyle : style.inputError} type="number" value={props.startValue} onChange={onChangeValue}/>
            </div>
        </div>
    )
}