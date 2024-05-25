import { Colors } from "../styles";

export const TextInput = ({
  value,
  setValue,
  type,
  style,
  required = false,
  placeholder,
  name,
  errTxt,
}) => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target)}
        type={type || "text"}
        required={required}
        placeholder={placeholder}
        style={{
          backgroundColor: Colors.textBack,
          color: value ? "white" : Colors.txtColor,
          padding: "12px 18px",
          border: "none",
          width: "100%",
          ...style,
        }}
      />
      {errTxt && <p style={{ color: "red", fontSize: 14 }}>{errTxt}</p>}
    </div>
  );
};
