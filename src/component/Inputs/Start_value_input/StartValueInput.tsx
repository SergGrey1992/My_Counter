import React, {ChangeEvent} from 'react';
import style from "./StartValueInput.module.css"

type StartValueInputPropsType ={
    startValue: number
    setStartValue: (value: number) => void
}

export function StartValueInput(props: StartValueInputPropsType) {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
    }

return (
    <div className={style.inputStyle}>
        <h3>StartValue</h3>
        <input type="number" value={props.startValue} onChange={onChangeValue}/>
    </div>
)
}