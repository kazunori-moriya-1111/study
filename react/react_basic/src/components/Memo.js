import React, {useState, useMemo} from 'react'

const Memo = () =>{
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const AddCount1 = () => {
        setCount1(prevCount1 => prevCount1 + 1)
    }

    const AddCount2 = () => {
        setCount2(prevCount2 => prevCount2 + 1)
    }
    // 第二引数に指定した変数が変化した時だけ動作する。再レンダリングの場合はキャッシュの結果を返却する
    const isOdd = useMemo(() => {
        //擬似的に処理時間を長くする
        let i = 0
        while(i < 500000000)
        i ++

        return count1 %2 !== 0
    }, [count1])
    return(
        <div>
            <button onClick={AddCount1}>Count1: {count1}</button>
            <br/>
            <span>{isOdd ? 'Odd number' : 'Even number'}</span>
            <br/>
            <button onClick={AddCount2}>Count2: {count2}</button>
        </div>
    )
}

export default Memo