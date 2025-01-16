function performOperation(){
    //Get user input from inout fields
    let num1 = parseInt(document.getElementById('Input1').value);
    let num2 = parseInt(document.getElementById('Input2').value);
    //Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        //perform the operation
                let result = multiply (num1, num2);

                //Display the result
                displayResult(result);
             } else {
                displayResult('Please enter valid numbers');
            }
        }

        function multiply (a, b) {
            //Introduce a debugger statement to pause execution
            debugger;

            //Multiply the numbers
            return a * b;
        }

        function displayResults(result){
            //Display the result in the paragraph element
            const resultElement = document.getElementById('result');
            resultElement.textContent = `The result is: ${result}`;
        }