let resultValue = ""
let cleanHistoric = false;

function onButtonClicked(buttonClicked) {
    const historic = document.getElementById("historic")
    const result = document.getElementById("result")

    if (cleanHistoric) {
        historic.value = "";
        cleanHistoric = false;
    }

    switch (buttonClicked) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            result.value = resultValue + buttonClicked
            resultValue = result.value
            console.log(resultValue)
            break;

        case "C":
            result.value = ""
            historic.value = ""
            resultValue = ""
            console.log(resultValue)
            break;

        case "+":
        case "-":
        case "x":
        case "÷":
            historic.value += resultValue + buttonClicked
            resultValue = ""
            console.log(resultValue)
            break;

        case "=":
            historic.value += resultValue
            result.value = eval(historic.value.replace('x', '*').replace('÷', '/'))
            historic.value += buttonClicked
            resultValue = ""
            cleanHistoric = true;
            break

        default:
            break;
    }
}
