const Row = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <div className="row">
        <div className="col-8">{props.children[0]}</div>
        <div className="col-4">{props.children[1]}</div>
      </div>
    </>
  );
};

export default Row;
