import NotFoundImg from "../assests/404.png";

export const NotFound = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        src={NotFoundImg}
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
        alt="notfound"
      />
    </div>
  );
};
