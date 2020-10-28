import React, {useState} from 'react';
import style from './App.module.css';
import {Display} from "./component/Display/Display";
import s from "./component/Display/Display.module.css";
import {MaxValueInput} from "./component/Inputs/Max_value_input/MaxValueInput";
import {StartValueInput} from "./component/Inputs/Start_value_input/StartValueInput";
import {ButtonMultiFN} from "./component/BtnMultiFN/BtnMultiFN";



function App() {
    const [display, setDisplay] = useState<number>(0 );

    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    const [error, setError] = useState(true)

    const checkedError = () => {
        startValue < maxValue
        return setError(!error)
    }

    let newSetDisplay = () => {
        if (display < 5) {
            setDisplay(display + 1)
        }
    }
    let resetDisplay = (display: number) => {
        setDisplay(0)
    }
    const setValueDisplay = () => {
        setDisplay(startValue)
    }
    const incFN =() => {
        if (display < maxValue) {
            setDisplay(display+1 )
        } else if (display === maxValue) {
            setDisplay(display)
        }
    }

    return (
        <div className={style.app}>
            <div className={style.wrapperSetBlock}>
                <div className={style.wrapperInput}>
                    <MaxValueInput maxValue={maxValue} setMaxValue={setMaxValue} />
                    <StartValueInput startValue={startValue} setStartValue={setStartValue} />
                </div>
                <div className={style.btnSet}>
                    <ButtonMultiFN title={"Set"} onClick={ setValueDisplay }/>
                </div>
            </div>
            <div className={style.wrapperDisplayBlock}>
                <div>
                    <Display
                        error={error}
                        maxValue={maxValue}
                        display={display}
                        resetDisplay={resetDisplay}
                        newSetDisplay={newSetDisplay}
                    />
                </div>
                <div className={s.wrapperBut}>
                    <ButtonMultiFN title={"Inc"} onClick={ incFN }/>
                    <ButtonMultiFN title={"Reset"} onClick={ setValueDisplay }/>
                </div>
            </div>

        </div>
    );
}


export default App;
