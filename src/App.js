import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [item , setItem] = useState("")
  const [list , setlist] = useState([{id:Date.now(),
    value:"Hello"}])

  function addItem(todovalue){
    console.log(list)
    if(todovalue!==""){
      const newitem={
        id:Date.now(),
        value:todovalue
        // isDone:
      };
      const newlist=[...list]
      newlist.push(newitem)
      setlist([...newlist])
      console.log(list)
    }
  }
//  function updateInput(input){
//    setitem(item=input)
//   }
  function deleteItem(id){
    const newlist=[...list];
    const updatedlist=newlist.filter((item=>item.id!==id))
    setlist(updatedlist)
  }
  return (
    <div className="App">
     <img src={logo} className="App-logo" width="100"height="100"/>
     <div className="container"></div>
     <input type="text" placeholder='Write a Todo' value={item} onChange={(e)=>setItem(e.target.value)}/>
     <button className="btn btn-info btn-sm" onClick={()=>addItem(item)}>Add </button>
     <div className="list">
       <ul className='list-group'>
         {
           list.map(x=>{
             return(
               <li key={x.id} className="list-group-item list-group-item-info">
                 {x.value}
         <button className="btn btn-danger btn-sm" onClick={e=>deleteItem(x.id)}>Delete </button>
               </li>
             )
           })
         }
         <li>
         
         </li>
       </ul>
     </div>
    </div>
  );
}

export default App;
