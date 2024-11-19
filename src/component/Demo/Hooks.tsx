import {useRef} from "react";
import Button from "@mui/material/Button";
import {Input} from "@mui/material";


export default function MyComponent({ condition }) {
    // let ref;
    // if (condition) {
    //     ref = useRef();
    // }

    const inputRef = useRef(null)

    function handleClick(){
        inputRef.current.focus();
    }
    return (
        <>
            <input ref = {inputRef}/>
            <button onClick={handleClick}>
                点击获取焦点
            </button>
        </>
    )
}