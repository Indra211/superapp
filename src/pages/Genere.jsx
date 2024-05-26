import { useState } from "react";
import { MovieBox, Title, Chip } from "../components";
import { Colors, FontFamily } from "../styles";
import { MoviesCategory } from "../utils/const";
import { StoreData } from "../utils/storages";
import { useNavigate } from "react-router-dom";

export const Genere = () => {
  const navigate = useNavigate();
  const movies_data = JSON.parse(JSON.stringify(MoviesCategory));
  const [selecetdMovies, setSelectedMovies] = useState([]);
  const [error, setError] = useState(false);
  const handleNavigate = () => {
    if (selecetdMovies.length < 3) {
      return setError(true);
    }
    StoreData("movies", selecetdMovies);
    return navigate("/info");
  };
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div
        style={{
          width: "40vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            padding: "4rem",
          }}
        >
          <Title />
          <p
            style={{
              color: "#FFF",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: FontFamily.roboto,
            }}
          >
            Choose your entertainment category
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {selecetdMovies.map((item) => (
              <Chip
                label={item}
                item={item}
                key={item}
                values={selecetdMovies}
                setValues={setSelectedMovies}
              />
            ))}
            {error && (
              <p style={{ color: "red" }}>⚠ Minimum 3 category required</p>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "60vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "172px 172px 172px",
            gridTemplateRows: "152px 152px 152px",
            gap: "1rem",
            justifyContent: "center",
            padding: "4rem",
          }}
        >
          {movies_data.map((item) => (
            <MovieBox
              item={item}
              key={item.id}
              values={selecetdMovies}
              setValues={setSelectedMovies}
            />
          ))}
        </div>
      </div>
      <button
        style={{
          right: "2rem",
          bottom: "2rem",
          backgroundColor: Colors.primary,
          position: "fixed",
          padding: "10px 16px",
          color: "white",
          fontFamily: FontFamily.dmsans,
          fontWeight: "bolder",
          border: "none",
          borderRadius: "2rem",
          cursor: "pointer",
        }}
        onClick={handleNavigate}
      >
        Next Page
      </button>
    </div>
  );
};
