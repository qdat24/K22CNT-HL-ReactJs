import './App.css';
import DqdClassComp from './components/DqdClassComp';
import DqdFuncComp from './components/DqdFuncComp';
import DqdJsxExpression from './components/DqdJsExpression';

function App() {
  return (
    <div className="container border">
        <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
        <hr/>
        <DqdJsxExpression />

        <DqdFuncComp />
        <DqdFuncComp name="Quốc Đạt" age="21"></DqdFuncComp>

        <DqdClassComp ></DqdClassComp>
        <DqdClassComp fullName="Đinh Quốc Đạt" company="FitNTU" />
        <DqdClassComp fullName="Quốc Đạt" company="K22CNTx" />
    </div>
  );
}

export default App;