import React, {ChangeEvent} from 'react';
import style from "./MaxValueInput.module.css"

type MaxValueInputPropsType = {
    maxValue: number
    setMaxValue: (value: number) => void
    errorInput: boolean
    startValue: number
}

export function MaxValueInput(props: MaxValueInputPropsType) {


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.setMaxValue(value)

    }
    return (
        <div className={style.inputWrapperStyle}>
            <h3>MaxValue: </h3>
            <div>
                <input className={props.maxValue <= 0 ? style.inputError : style.inputStyle} type="number"
                       value={props.maxValue} onChange={onChangeValue}/>
            </div>
        </div>
    )
}