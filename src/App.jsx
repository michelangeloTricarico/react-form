import { useState } from 'react'
import articles from './data/starter_list'
import Input_bar from './components/input_bar'
import List_element from './components/list_element'
import './App.css'

function App() {
  let [objList,setObjList]= useState(articles)
  let [newObj,setNewObj] = useState("")

  function AddElement(){
    if (newObj !=""){
      objList = [...objList,newObj]
      setObjList(objList)
      setNewObj("")
    }
    
  }

  function RemoveElement(id){
    let newList = objList.filter((item,index)=> index !=id)
    setObjList(newList)
  }

  return (
    <>
      <Input_bar new_obj={newObj} set_new_obj={setNewObj} add_element={AddElement}/>
      <List_element obj_list={objList} remove_element={RemoveElement}/>
    </>
  )
}

export default App
