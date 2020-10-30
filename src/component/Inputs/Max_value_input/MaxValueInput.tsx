import React, {ChangeEvent} from 'react';
import style from "./MaxValueInput.module.css"


type MaxValueInputPropsType = {
    maxValue: number
    setMaxValue: (value: number) => void
    errorInput: boolean
}

export function MaxValueInput(props: MaxValueInputPropsType) {


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        props.setMaxValue(value)

    }
    return (
        <div className={style.inputWrapperStyle}>
            <h3>MaxValue: </h3>
            <div>
                <input className={props.errorInput ? style.inputStyle : style.inputError} type="number"
                       value={props.maxValue} onChange={onChangeValue}/>
            </div>
        </div>
    )
}