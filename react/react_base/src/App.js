const App = () =>  {
  const greeting = "Hi!, dom"
  const dom = <h1 className="">{greeting}</h1>
  return (
    <>
      {dom}
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("ssdd")}}/>
      <Cat />
      <Cat />
      <Cat />
    </>
  );
}

const Cat = () => {
  return <div>Meow</div>
}
export default App