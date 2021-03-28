import SingleFablePage from "../../components/SingleFablePage";

const FablePage = ({ query }) => {
  const { id } = query;

  return (
    <>
      <SingleFablePage id={id} />
    </>
  );
};

export default FablePage;
