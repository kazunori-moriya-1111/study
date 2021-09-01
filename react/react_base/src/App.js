import PropTypes from 'prop-types'

const App = () =>  {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname"}
  ]
  return (
    <>
      {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index}/>
          })
      }
    </>
  );
}
// コンポーネントを定義
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// コンポーネント引数のデフォルト値を設定
User.defaultProps = {
  age: 1
}

// Userコンポーネントに対して型を定義する isRequiredを付与するとpropsに定義されていないとwarningを発生させる
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App