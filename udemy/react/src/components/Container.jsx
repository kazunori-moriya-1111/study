const Container = (props) => {
  return (
    <>
      <div className="container">
        <p className="title">- Container -</p>
        <button className="button">{props.children}</button>
      </div>
    </>
  );
};
export default Container;
