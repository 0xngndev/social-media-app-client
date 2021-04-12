import ReactLoading from "react-loading";

const Spinner = ({ type, color, height, width }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ReactLoading
        type={type}
        color={"#8946FF"}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Spinner;
