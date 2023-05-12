import React, {useState} from 'react'

const TextEditor = () => {

    // setting user state 
    const [text, setText] = useState("");

    // handling events
    const handleChange = (event) => {
        setText(event.target.value)
    }

    const toUp = () => {
        let upText = text.toUpperCase();
        setText(upText);
    }

    const clrTxt = () => {
        let clr = "";
        setText(clr);
    }

    const toLow = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const capsTxt = () => {
        let caps = text.split(" ");
        let i = 0;

        for (i = 0; i < caps.length; i++) {
            caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1).toLowerCase();
        }

        const capsText = caps.join(" ");
        setText(capsText);
    }

    const altTxt = () => {
        let altr = text.split('');
        let i = 0;

        for (i = 0; i < altr.length; i += 2) {
            altr[i] = altr[i].toUpperCase();
        }

        const altrText = altr.join('');

        setText(altrText);
    }

    const copyTxt = async () => {
        await navigator.clipboard.writeText(text);
    }

    const removeExtSpace = () => {
        // This will check if there are one or more than one extra space
        let ext = text.split(/[  ]+/); //using .split("  ") didnt do the work. it just checked for one extra space and removed it
        setText(ext.join(" "));
    }

    const wordCount = () => {
        if (text === "") {
            return 0;
        }
        else {
            return text.trim().split(" ").length;
        }
    }

    return (
        <div className="container">
            <div className="title">
                <h2>Enter Your Text Here</h2>
            </div>
            <div className="textarea">
                <textarea type="text" name="text" id="text" rows="10" value={text} onChange={handleChange} placeholder='Text Here' />
            </div>
            <div className="utility-btns">
                <button className="sm-btn" onClick={toUp}>To Uppercase</button>
                <button className="sm-btn" onClick={toLow}>To Lowercase</button>
                <button className="sm-btn" onClick={capsTxt}>Capitalized Text</button>
                <button className="sm-btn" onClick={altTxt}>AlTeRnAtE Text</button>
                <button className="sm-btn" onClick={copyTxt}>Copy Text</button>
                <button className="sm-btn" onClick={removeExtSpace}>Manage spaces</button>
                <button className="sm-btn dngr" onClick={clrTxt}>Clear Text</button>
            </div>
            <div className="summary">
                <h2>Text Summary</h2>
                <p>{text.trim().length} Characters(Spaces are counted as a character)</p>
                <p>{wordCount()} Words</p>
            </div>
        </div>
    )
}

export default TextEditor
