import React from 'react'

export default function dqdEventComp() {

    const dqd_Func1 = ()=>{
        alert("Xin chào")
    }
    const dqd_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={dqd_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={dqd_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={()=>dqd_Func2('Quốc Đạt')}>Click Here Param</button>

        </div>
    )
}