import { Colors } from "../styles";

export const Chip = ({ label, item, values, setValues }) => {
  const handleOnClick = () => {
    if (values?.includes(item)) {
      setValues((data) => {
        const updateMovies = data?.filter((ele) => ele !== item);
        return updateMovies;
      });
    } else {
      setValues((data) => [...data, item]);
    }
  };
  return (
    <span
      style={{
        backgroundColor: Colors.secondary,
        color: "white",
        padding: "10px 16px",
        borderRadius: "2rem",
      }}
    >
      {label}{" "}
      <span
        style={{ color: "black", cursor: "pointer" }}
        onClick={handleOnClick}
      >
        X
      </span>
    </span>
  );
};
