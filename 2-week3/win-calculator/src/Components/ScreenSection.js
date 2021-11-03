import { useContext, useEffect, useRef } from "react";
import { CalcContext } from "../CalcContext";

const styles = {
  screenSection: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-end",
    fontFamily: "arial",
  },
  mainText: {
    color: "#fff",
    fontSize: 40,
    width: "100%",
    textAlign: "end",
  },
  caption: {
    color: "#999",
    fontSize: 13,
    paddingRight: 10,
  },
  spanSelection: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "flex-end",
    justifyContent: "center",
    overflow: "scroll hidden",
    whiteSpace: "nowrap",
  }
};

const ScreenSection = () => {
  const { mainText, lastResult, currentOperation } = useContext(CalcContext);

  // scroll div to the right with useRef
  const scrollRef = useRef(null);

  const scrollToRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  };

  useEffect(() => {
    scrollToRight();
  }, [mainText]);

  const renderCaption = () => {
    if (lastResult && currentOperation)
      return (
        <span style={styles.caption}>
          {lastResult} {currentOperation}
        </span>
      );
  };

  return (
    <div style={styles.screenSection}>
      {renderCaption()}
      <div style={styles.spanSelection} ref={scrollRef}>
        <span style={styles.mainText}>{mainText}</span>
      </div>
    </div>
  );
};

export default ScreenSection;
