import { ChangeEvent, useState } from "react";
import "./Composer.scss";

export function Composer() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        let inputValue = event.target.value;
        console.log(inputValue);
        setInput(inputValue);
        setOutput(generateOutput(inputValue));
    }

    function generateOutput(input: string): string {        
        return `output: ${input}`;
    }

    return <article className="Composer">
        <header>Composer</header>
        <main>
            <section className="input">
                <header>Input</header>
                <textarea onChange={handleChange}></textarea>
            </section>
            <section className="preview">
                <header>Render Preview</header>
                <div>{input} and {output}</div>
            </section>
            <section className="output">
                <header>Output</header>
                <input value={output}></input>
            </section>
        </main>

    </article>
}