import React, {MouseEventHandler, useState} from 'react';
import classes from "./genetator.module.scss"
import QRCode from "react-qr-code";

const Generator = () => {
    const [inputLink, setInputLink] = useState("")
    const [newLink, setNewLink] = useState("")

    const changeLink = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputLink(e.target.value)
    }

    const generateQr = () => {
        setNewLink(inputLink)
        setInputLink("")
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.generator}>
                {newLink && <QRCode value={newLink} size={200} /> }
                <input onChange={changeLink} value={inputLink} placeholder="Enter your link..." type="text"/>
                {inputLink !== newLink && inputLink !== "" ? <button className={classes.buttonActive} onClick={generateQr}>Generate</button> : <button className={classes.button}>Generate</button> }
            </div>
        </div>
    );
};

export default Generator;