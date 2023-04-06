function calculator(op, num1, num2) {

      op = prompt(`Enter + if you want to add. 
      Enter - if you want to subtract. 
      Enter * if you want to multiply. 
      Enter / if you want to divide`)
      
      num1 = Number(prompt("Enter your first number."))
      num2 = Number(prompt("Enter your second number."))

    let result;
  
    if (op === "+") {
      result = num1 + num2;
    } else if (op === "-") {
      result = num1 - num2;
    } else if (op === "*") {
      result = num1 * num2;
    } else if (op === "/") {
      result = num1 / num2;
    } else {
      console.log(`${op} is not a valid operator type. Please try again.`)
      return
    }
    alert(`${num1} ${op} ${num2} equals ${result}`)
    console.log(`${num1} ${op} ${num2} equals ${result}`)
  }
  
  calculator()
  