import React, {useState} from 'react';
import style from './App.module.css';
import {Display} from "./component/Display/Display";
import s from "./component/Display/Display.module.css";
import {MaxValueInput} from "./component/Inputs/Max_value_input/MaxValueInput";
import {StartValueInput} from "./component/Inputs/Start_value_input/StartValueInput";
import {ButtonMultiFN} from "./component/BtnMultiFN/BtnMultiFN";


function App() {
    const [display, setDisplay] = useState<number>(0);

    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    const [error, setError] = useState(true)
    const [valueError, setValueError] = useState<string>("Error value not corrected")
    const [errorInput, setErrorInput] = useState(true)

    const errorInputChecked = () => {

        errorValue()
    }

    const errorValue = () => {
         if (startValue === maxValue) {
            setError(true)
            setErrorInput(false)
        } else if (startValue > maxValue) {
            setError(true)
            setErrorInput(false)
        }   else if (startValue < 0) {
            setError(true)
            setErrorInput(false)
        } else if (maxValue < 0) {
            setError(true)
            setErrorInput(false)
        } else if (startValue < maxValue) {
             setError(false)
             setErrorInput(true)
             setValueDisplay()
         }
    }

    let resetDisplay = (display: number) => {
        setDisplay(0)
    }

    const setValueDisplay = () => {
        setDisplay(startValue)
    }

    const incFN = () => {
        if (display < maxValue) {
            setDisplay(display + 1)
        } else if (display === maxValue) {
            setDisplay(display)
        }
    }

    return (
        <div className={style.app}>

            <div className={style.wrapperSetBlock}>

                <div className={style.wrapperInput}>

                    <MaxValueInput maxValue={maxValue} setMaxValue={setMaxValue} errorInput={errorInput}/>
                    <StartValueInput startValue={startValue} setStartValue={setStartValue} errorInput={errorInput}/>

                </div>
                <div className={style.btnSet}>

                    <ButtonMultiFN title={"Set"} onClick={errorInputChecked}/>

                </div>
            </div>


            <div className={style.wrapperDisplayBlock}>

                <div>

                    <Display
                        valueError={valueError}
                        error={error}
                        maxValue={maxValue}
                        display={display}
                        resetDisplay={resetDisplay}

                    />

                </div>


                <div className={s.wrapperBut}>

                    <ButtonMultiFN title={"Inc"} onClick={incFN}/>
                    <ButtonMultiFN title={"Reset"} onClick={setValueDisplay}/>

                </div>

            </div>

        </div>
    );
}


export default App;
