import { Textarea } from "@chakra-ui/react";
import React, { Children, useEffect, useRef, useState } from "react";

interface Props {}

const textArea: React.FC<Props> = () => {
    const [value, setValue] = useState("");
    const [overflow, setOverflow] = useState("");
    const divRef = useRef<HTMLDivElement>(null);
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log(value);
    },[value])

    const handleInputChange = (e: React.InputEvent<HTMLInputElement>) => {
        setValue(divRef.current.innerText);
    }
    
    return (

        <div contentEditable="true" onInput={handleInputChange} ref={divRef}>
            <span>{text}<span>{overflow}</span></span>
        </div>

    )
};

export default textArea;