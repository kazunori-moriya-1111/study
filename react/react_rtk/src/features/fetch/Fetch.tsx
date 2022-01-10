import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncGet, selectUsers } from "./fetchSlice";

interface user { 
  "id": string,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

export const Fetch = () => {
  // UC true 80
  // 当たり 31970/1313967 1~31970
  // 転落 4110/1313967 31971 ~ 36080
  var random = 0
  var atari = 0
  var tenraku = 0
  const judge = () => {
    do {
      random = Math.floor( Math.random() * 1313967) + 1
    } while (random >= 36081)
    console.log("random:",random)
    var result = random <= 31970 ? true : false
    // console.log(result)
    return result
  }
  const probability = () => {
    const trailCount = 100000
    for (let i = 0; i < trailCount; i++){
      console.log(judge())
      judge() ? atari++ : tenraku++
    }
    console.log("atari:", atari,"tenraku:", tenraku)
    console.log("結果", atari/trailCount)
  }
  // UC true 80 end
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchAsyncGet())
  }, [dispatch])
  return (
    <>
      <Button onClick={probability}>ユニコーン</Button>
      <div>
        {users.map((user:user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
    </>
  )
}
