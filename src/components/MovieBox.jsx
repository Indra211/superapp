import { Colors, FontFamily } from "../styles";

export const MovieBox = ({ item, values, setValues }) => {
  const handleOnClick = () => {
    if (values?.includes(item.category)) {
      setValues((data) => {
        const updateMovies = data?.filter((ele) => ele !== item.category);
        return updateMovies;
      });
    } else {
      setValues((data) => [...data, item.category]);
    }
  };
  return (
    <div
      key={item.id}
      style={{
        color: "white",
        backgroundColor: item.bg,
        padding: 8,
        width: 156,
        height: 136,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: FontFamily.dmsans,
        fontWeight: "normal",
        borderRadius: 8,
        cursor: "pointer",
        border: `2px solid ${
          values?.includes(item.category) ? Colors.primary : "black"
        }`,
      }}
      onClick={handleOnClick}
    >
      <h3>{item.category}</h3>
      <img src={item.pic} alt="pic" />
    </div>
  );
};
