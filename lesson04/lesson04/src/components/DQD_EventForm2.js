import React from 'react'

export default function LVH_EventForm2() {
    //định nghĩa các hàm xử lý sự kiện
    const eventHandleclick1=(content)=>{
        console.log('====================');
        console.log(content);
        console.log('====================');

    }
  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Funcion Components - Đinh Quốc Đạt</h2>
        <button onClick={eventHandleclick1("Đinh Quốc Đạt")}>Gọi khi Render</button>
        <button onClick={()=>eventHandleclick1("K22CNT3-ReactJs")}> Gọi khi Click</button>
    </div>
  )
}