import React, { Component } from 'react';

class DqdEventCompClass extends Component {

    Dqd_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    Dqd_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.Dqd_Func1}>Click</button>
                <button onClick={()=>this.Dqd_Func2("Đinh Quốc Đạt")}>Click Param</button>
            </div>
        );
    }
}

export default DqdEventCompClass;