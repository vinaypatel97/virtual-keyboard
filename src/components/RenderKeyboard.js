import React, { useState, useEffect } from 'react';
import { shuffle } from '../utils/helper';
import {
    NUMS,
    ALPHA,
    DELETE,
    CAPS_LOCK,
    ENTER,
    SPACE,
    SHIFT,
    TAB,
    SUB_KEYS
} from '../utils/constant';

const RenderKeyboard = () => {

    const [inputVal, setInputVal] = useState("");
    const [alphabet, setAlphabet] = useState(ALPHA);
    const [caps, setCaps] = useState(false);
    const [shiftKeyFlag, setShiftKeyFlag] = useState(false);

    const clickHandler = (e) => {
        if (e.target.tagName === 'BUTTON') {
            const keyText = e.target.innerText;

            switch (keyText) {
                case DELETE:
                    setInputVal(inputVal => inputVal.substring(0, inputVal.length - 1));
                    break;
                case CAPS_LOCK:
                    setCaps(val => !val);
                    break;
                case ENTER:
                    setInputVal(inputVal => inputVal + "\n");
                    break;
                case SPACE:
                    setInputVal(inputVal => inputVal + " ");
                    break;
                case SHIFT:
                    setShiftKeyFlag(val => !val);
                    break;
                case TAB:
                    setInputVal(inputVal => inputVal + "    ");
                    break;
                default:
                    if (ALPHA.includes(keyText.toLowerCase())) setAlphabet(arr => shuffle(arr));
                    let nextChar = keyText;
                    let shiftFlag;
                    setShiftKeyFlag(val => {
                        shiftFlag = val;
                        if (val) return !val;
                        return val;
                    });
                    if (shiftFlag) {
                        if (ALPHA.includes(keyText.toLowerCase())) {
                            nextChar = nextChar.toUpperCase();
                        } else {
                            nextChar = nextChar.split(" ")[1];
                        }
                    }
                    if (!shiftFlag) {
                        nextChar = nextChar.split(" ")[0];
                    }
                    setInputVal(inputVal => `${inputVal}${nextChar}`);
                    break;
            }
        }
    }

    useEffect(() => {
        const keyboard = document.getElementById('keyboardKeys');
        // attach click event on keyboard container
        keyboard.addEventListener('click', clickHandler);
        return () => {
            // remove event listner on unmount
            keyboard.removeEventListener('click', () => {
                console.log('events removed ');
            });
        }
    }, []);

    const RenderElement = ({ value }) => {
        switch (value) {
            case DELETE:
                return (
                    <button type="button" className="keyboardKey keyboardKey--wide">{value}</button>
                )
            case CAPS_LOCK:
                return (
                    <button type="button" className={`keyboardKey keyboardKey--wide ${caps ? "active" : ""}`}>{value}</button>
                )
            case SHIFT:
                return (
                    <button type="button" className={`keyboardKey keyboardKey--wide ${shiftKeyFlag ? "active" : ""}`}>{value}</button>
                )
            case ENTER:
                return (
                    <button type="button" className="keyboardKey keyboardKey--wide">{value}</button>
                )
            case SPACE:
                return (
                    <button type="button" className="keyboardKey keyboardKey--extra-wide">{value}</button>
                )
            case TAB:
                return (
                    <button type="button" className="keyboardKey keyboardKey--wide">{value}</button>
                )
            default:
                return (
                    <button type="button" className="keyboardKey">{caps ? value.toUpperCase() : value}</button>
                )
        }
    }

    function renderKeys(alphabet) {
        const keyLayout = [...NUMS, DELETE, TAB, ...alphabet, ...SUB_KEYS, SHIFT, CAPS_LOCK, SPACE, ENTER]
        return (
            keyLayout.map((key, index) => {
                // insertLineBreak - line break after these below mentined keys
                const insertLineBreak = [DELETE, alphabet[9], alphabet[18], alphabet[25], SHIFT, ENTER].indexOf(key) !== -1;
                return (
                    <span key={`${key}_${index}`}>
                        <RenderElement value={key} />
                        { insertLineBreak && <br />}
                    </span>
                )
            })
        )
    }

    return (
        <div>
            <div className="dFlex">
                <textarea defaultValue={inputVal} className="inputBox" id="input" disabled />
            </div>
            <div className="keyboard">
                <div className="keyboardKeys" id="keyboardKeys">
                    {renderKeys(alphabet)}
                </div>
            </div>
        </div>
    )
}

export default RenderKeyboard;