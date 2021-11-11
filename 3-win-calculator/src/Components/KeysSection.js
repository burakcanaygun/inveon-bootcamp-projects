import KeyButton from "./KeyButton";

const styles = {
  container: {
    width: "100%",
    height: "65%",
    display: "flex",
    flexWrap: "wrap",
  },
};

const KeysSection = () => {
  return (
    <div style={styles.container}>
      <KeyButton label="%" operator/>
      <KeyButton label="CE" operator/>
      <KeyButton label="C" operator/>
      <KeyButton label="⌫" operator/>

      <KeyButton label="1/x" operator/>
      <KeyButton label="x²" operator/>
      <KeyButton label="√" operator/>
      <KeyButton label="/" operator />

      <KeyButton label="7" isNumber />
      <KeyButton label="8" isNumber />
      <KeyButton label="9" isNumber />
      <KeyButton label="x" operator />

      <KeyButton label="4" isNumber />
      <KeyButton label="5" isNumber />
      <KeyButton label="6" isNumber />
      <KeyButton label="-" operator />

      <KeyButton label="1" isNumber />
      <KeyButton label="2" isNumber />
      <KeyButton label="3" isNumber />
      <KeyButton label="+" operator />

      <KeyButton label="±" operator />
      <KeyButton label="0" isNumber />
      <KeyButton label="." isNumber />
      <KeyButton label="=" isBlue operator/>
    </div>
  );
};

export default KeysSection;
