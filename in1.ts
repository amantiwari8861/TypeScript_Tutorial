  interface DoubleValueFunc {

    (number1: number, number2: number): number;
  }

  let myDoubleFunction= (num1: number, num2: number) => {
    return (num1 + num2) * 2;
  }

  console.log(myDoubleFunction(10,50)); // Prints: 120
