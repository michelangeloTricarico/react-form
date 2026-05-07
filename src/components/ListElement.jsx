export default function List_element({obj_list, remove_element}){
    return(
        <div className="container d-flex gap-3 mt-3">
        <ul className="list-group col-12">
          {
            obj_list.map((item, index) => <li className="list-group-item d-flex justify-content-between" key={index}>
              {item}
              <button type="button" onClick={()=>remove_element(index)} className="btn btn-danger">< i className="bi bi-trash3-fill"></i></button>
              </li>)
          }
        </ul>
      </div>  
    );
}