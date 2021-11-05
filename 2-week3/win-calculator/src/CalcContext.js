import React, { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [mainText, setMainText] = useState("0");
  const [resetMainTextNextTime, setResetMainTextNextTime] = useState(true);

  const [lastResult, setLastResult] = useState();
  const [currentOperation, setCurrentOperation] = useState();
  const [lastOperation, setLastOperation] = useState();


  //if user click new operation update lastOperation
  const handleOperation = (operation) => {
    if (lastOperation) {
      handleEqual();
    }
    setLastOperation(operation);
    setCurrentOperation(operation);
    setMainText(operation);
  };

  //if user click equals update lastResult
  const handleEqual = () => {
    if (currentOperation === "+" || "-" || "x" || "/") {
      const result = calculate(lastResult, mainText, currentOperation);
      setLastResult(null);
      setMainText(result);
      setCurrentOperation(currentOperation);
      setResetMainTextNextTime(true);
    }
    if (currentOperation === "=") {
      setLastOperation(null);
      setCurrentOperation(null);
      setResetMainTextNextTime(true);
      setMainText(lastResult);
    }
  };
  // calculate result
  const calculate = (a, b, operation) => {
    switch (operation) {
      case "+":
        return parseFloat(a) + parseFloat(b);
      case "-":
        return parseFloat(a) - parseFloat(b);
      case "x":
        return parseFloat(a) * parseFloat(b);
      case "/":
        return parseFloat(a) / parseFloat(b);
      default:
        return b;
    }
  };

  // if user click number update mainText
  const handleKeyClick = (isNumber, label, operator) => {
    if (isNumber) {
      if (resetMainTextNextTime) {
        setMainText(label);
        setResetMainTextNextTime(false);
      } else {
        setMainText((mainText) => {
          return mainText + label;
        });
      }
    }
    // if it's operator then start to calculate
    if (operator) {
      setCurrentOperation(label);
      setResetMainTextNextTime(true);
      handleOperation(label);
      switch (label) {
        case "+":
          if (!lastResult) {
            setLastResult(Number(mainText));
          } else {
            setLastResult(Number(mainText) + lastResult);
          }

          break;
        case "-":
          if (!lastResult) {
            setLastResult(Number(mainText));
          } else {
            setLastResult(lastResult - Number(mainText));
          }
          break;
        case "x":
          if (!lastResult) {
            setLastResult(Number(mainText));
          } else {
            setLastResult(lastResult * Number(mainText));
          }
          break;
        case "/":
          if (!lastResult) {
            setLastResult(Number(mainText));
          } else {
            setLastResult(lastResult / Number(mainText));
          }
          break;
        case "=":
          handleEqual();
          setResetMainTextNextTime(true);
          break;
        case "C":
          setMainText("0");
          setResetMainTextNextTime(true);
          setLastResult();
          break;
        case "CE":
          setMainText("0");
          setResetMainTextNextTime(true);
          setLastResult();
          break;
        case ".":
          if (!mainText.includes(".")) {
            setMainText((mainText) => {
              return mainText + label;
            });
          }
          break;
        case "±":
          if (mainText.includes("-")) {
            setMainText(mainText.replace("-", ""));
          } else if (mainText.includes("0")) {
            setMainText(0);
          }
          else {
            setMainText("-" + mainText);
          }
          break;
        case "√":
          setMainText((Math.sqrt(Number(mainText))));
          break;
        case "x²":
          setMainText(Math.pow(Number(mainText), 2));
          break;
        case "1/x":
          setMainText((1 / Number(mainText)));
          break;
        case "⌫":
          if (mainText.length > 1) {
            setMainText(mainText.slice(0, mainText.length - 1));
          } else {
            setMainText("0");
          }
          break;
        case "%":
          setMainText(mainText / 100);
          break;
        default:
          break;
      }
    }
  };

  return (
    <CalcContext.Provider
      value={{
        mainText,
        setMainText,
        handleKeyClick,
        resetMainTextNextTime,
        setResetMainTextNextTime,
        lastResult,
        currentOperation,
        lastOperation,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};
