import React, {useState} from 'react';
import style from './App.module.css';
import {Display} from "./component/Display/Display";
import s from "./component/Display/Display.module.css";
import {MaxValueInput} from "./component/Inputs/Max_value_input/MaxValueInput";
import {StartValueInput} from "./component/Inputs/Start_value_input/StartValueInput";
import {ButtonMultiFN} from "./component/BtnMultiFN/BtnMultiFN";


function App() {
    const [display, setDisplay] = useState<number>(0);

    const [maxValue, setMaxValue] = useState(Number(localStorage.getItem("maxValue")))
    const [startValue, setStartValue] = useState(Number(localStorage.getItem("startValue")))

    const [error, setError] = useState(true)

    const [valueSet, setValueSet] = useState<string>("Please Set button")
    const [errorInput, setErrorInput] = useState(true)

    const [disabledSet, setDisableSet] = useState<boolean>(false)
    const [disabledInc, setDisableInc] = useState<boolean>(false)
    const [disabledReset, setDisableReset] = useState<boolean>(false)




    const errorInputChecked = () => {
        errorValue()
    }

    const errorValue = () => {
        if (startValue === maxValue) {
            setError(true)
            setErrorInput(false)
            setValueSet("startValue = maxValue")
        } else if (startValue > maxValue) {
            setError(true)
            setErrorInput(false)
            setValueSet("startValue > maxValue")
        } else if (startValue < 0) {
            setError(true)
            setErrorInput(false)
            setValueSet("startValue < 0")
        } else if (maxValue < 0) {
            setError(true)
            setErrorInput(false)
            setValueSet("maxValue < 0")
        } else if (startValue < maxValue) {
            setError(false)
            setErrorInput(true)
            setValueDisplay()
        }

    }

    let resetDisplay = () => {
        setDisplay(0)
    }

    const setValueDisplay = () => {
        setDisplay(startValue)
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }

    const incFN = () => {
        if (display < maxValue) {
            setDisplay(display + 1)
        } else if (display === maxValue) {
            setDisplay(display)
        }

    }
    const disabledButtonSet = () => {
        setDisableSet(!disabledSet)
    }
    const disabledButtonReset = () => {
        setDisableReset(!disabledReset)
    }
    const disabledButtonInc = () => {
        if (display === display) {
            setDisableInc(!disabledInc)
        }
    }

    return (
        <div className={style.app}>

            <div className={style.wrapperSetBlock}>

                <div className={style.wrapperInput}>

                    <MaxValueInput maxValue={maxValue}
                                   startValue={startValue}
                                   setMaxValue={setMaxValue}
                                   errorInput={errorInput}
                    />

                    <StartValueInput startValue={startValue}
                                     maxValue={maxValue}
                                     setStartValue={setStartValue}
                                     errorInput={errorInput}
                    />

                </div>
                <div className={style.btnSet}>

                    <ButtonMultiFN title={"Set"} onClick={errorInputChecked} />

                </div>
            </div>


            <div className={style.wrapperDisplayBlock}>

                <div>

                    <Display
                        startValue={startValue}
                        valueSet={valueSet}
                        error={error}
                        maxValue={maxValue}
                        display={display}
                        resetDisplay={resetDisplay}

                    />

                </div>


                <div className={s.wrapperBut}>

                    <ButtonMultiFN title={"Inc"} onClick={incFN} />
                    <ButtonMultiFN title={"Reset"} onClick={setValueDisplay} />

                </div>

            </div>

        </div>
    );
}


export default App;
