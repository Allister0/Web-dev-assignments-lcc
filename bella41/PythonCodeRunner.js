function runCode() {
    // Get the code input element
    const codeInput = document.getElementById('code-input');

    // Get the code output element
    const codeOutput = document.getElementById('code-output');

    // Get the Python code from the input element
    const code = codeInput.value;

    // Clear the output element
    codeOutput.value = '';

    // Create a new Skulpt interpreter
    const interpreter = new Sk.builtin.internals.BuiltinFunc();


    // Set the builtins and __name__ variables in the interpreter
    Sk.misceval.callsimArray(interpreter.__name__ = Sk.builtin.str("__main__"));
    Sk.misceval.callsimArray(interpreter.builtins = Sk.builtin.__import__("builtins"));

    // Define a function to write to the output element
    function writeOutput(text) {
        codeOutput.value += text;
    }

    // Redirect the interpreter's standard output and error to the writeOutput function
    Sk.misceval.stdout = Sk.misceval.stderr = writeOutput;

    // Run the Python code in the interpreter
    Sk.misceval.asyncToPromise(() => Sk.importMainWithBody('<stdin>', false, code, true));

    // Render any LaTeX math expressions in the output element
    renderMathInElement(codeOutput);
}
