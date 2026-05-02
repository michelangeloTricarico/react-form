import { useState } from 'react'
import './App.css'


function App() {
  let objListIni = ["obj1", "obj2", "obj3"]
  let [objList,setObjList]= useState(objListIni)
  let [newObj,setNewObj] = useState("")

  function AddElement(){
    objList = [...objList,newObj]
    setObjList(objList)
    setNewObj("")
  }

  return (
    <>
    <form>
      <div className="container d-flex gap-3 mt-3">
        <input 
            type="text" 
            onChange={e =>setNewObj(e.target.value)} 
            value={newObj} 
            className="form-control"
            placeholder="Write a new object inside" />
          <button onClick={AddElement} type="button" className="btn btn-dark" > + <br /> Add</button>
      </div>
      <div className="container d-flex gap-3 mt-3">
        <ul className="list-group col-12">
          {
            objList.map((item, index) => <li className="list-group-item d-flex justify-content-between" key={index}>
              {item}
              <button type="button" className="btn btn-danger">< i className="bi bi-trash3-fill"></i></button>
              </li>)
          }
        </ul>
      </div>  
    </form>
    </>
  )
}

export default App
