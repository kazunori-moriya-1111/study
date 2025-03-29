const Example = () => {
  const clickHandler = (str) => {
    console.log(`${str}をクリックしました`);
  };
  return (
    <>
      <button onClick={() => clickHandler("左")}>クリックしてな</button>
      <button onClick={() => clickHandler("右")}>クリックしてな</button>
    </>
  );
};

export default Example;
