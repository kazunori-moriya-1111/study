import "./Child.css";

const Child = (props) => {
  // console.log(props);
  console.log(typeof props.fn);
  // const text = props.fn("air");
  return (
    <>
      <div className={`component ${props.color}`}>
        <span>子のpropsに渡すstateを更新</span>
        {/*<p>{props.num}</p>*/}
        <p>{props.fn("air")}</p>
        <p>{props.obj.a}</p>
      </div>
    </>
  );
};

export default Child;
