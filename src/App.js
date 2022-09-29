// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import FetchSearch from './components/FetchSearch/FetchSearch';
import ResponseForm from './components/Form/ResponseForm';
import { MuiWork } from './components/MaterialUI/MuiWork';
import Resume from './components/Resume/Resume';
import TodoRedux from './components/TodoList/TodoRedux/TodoRedux';
import { Container } from 'react-bootstrap';
import TodoItems from './components/TodoList/TodoRedux/TodoItems';


function App() {
  
  const TodoList=()=>[{
    item:'todo1',
    done:false,
    id:23456787
  },
  {
    item:'todo2',
    done:false,
    id:3456788
  }
]

  
  const GetLocalData = () => {
    let data = localStorage.getItem('studentForm')
    if (data) {
      return JSON.parse(localStorage.getItem('studentForm'))
    } else {
      return []
    }
  }

  const [localData, setLocalData] = useState(GetLocalData())

  let getData=(studentForm)=>{
      console.log(studentForm);
  
  
     const  dataCopy=[...localData]
     dataCopy.push(studentForm)
     setLocalData(dataCopy)
  
  
   localStorage.setItem('studentForm', JSON.stringify(dataCopy))
  }

  return (
    <div className="App">
      {/* <Resume/> */}
      {/* <FetchSearch/> */}
      {/* <ResponseForm  getData={getData}/> */}
      
      {/* <MuiWork/> */}
       
      <div className='app_conainer'>

        <div className='app__todocontainer'>

          {
            TodoList.map(item=>{
              <TodoItems
              name={item.item}
              done={item.done}
              id={item.id}
              />
            })
          }
        </div>
      <TodoRedux/>
      </div>
    </div>
  );
  }

export default App;
