import { Colors, FontFamily } from "../styles";

export const Title = ({ style }) => {
  return (
    <h1
      style={{
        ...style,
        color: Colors.primary,
        fontFamily: FontFamily.singleday,
      }}
    >
      Super app
    </h1>
  );
};
