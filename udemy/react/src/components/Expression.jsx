const Expression = () => {
  const title = "Default title";
  const hello = (arg) => `${arg} Function`;
  return (
    <>
      <h1>Expression {title.toLocaleLowerCase()}</h1>
      <h2>{hello("air")}</h2>
    </>
  );
};

export default Expression;
