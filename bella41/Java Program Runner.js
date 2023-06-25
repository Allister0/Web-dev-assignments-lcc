function runCode(input) {
    var code = input.value;

    // Create a new iframe to run the code in a sandboxed environment
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    var iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write("<html><body></body></html>");
    iframeDoc.close();

    // Define the runJava function in the iframe
    var runJavaFunction = function () {
        var output = "";
        var originalConsole = console;
        console = {
            log: function (message) {
                output += message + "\n";
            }
        };
        try {
            eval(code);
        } catch (error) {
            output = error.message;
        }
        console = originalConsole;
        return output;
    };
    iframe.contentWindow.runJava = runJavaFunction;

    // Set up the Java code to be run
    var script = iframeDoc.createElement("script");
    script.textContent = code;
    iframeDoc.body.appendChild(script);

    // Get the Java code and output it to the code-output box
    codeOutput.innerHTML = "<pre>" + code + "</pre>";

    // Run the Java code and get the output
    try {
        var javaOutput = iframe.contentWindow.runJava();
        output.innerHTML = "<pre>" + javaOutput + "</pre>";
    } catch (error) {
        output.innerHTML = error.message;
    }

    // Remove the iframe from the DOM
    document.body.removeChild(iframe);
}
