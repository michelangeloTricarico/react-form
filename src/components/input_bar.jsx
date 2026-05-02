export default function Input_bar({new_obj, set_new_obj,add_element}){
    return(
        <div className="container d-flex gap-3 mt-3">
        <input 
            type="text" 
            onChange={e =>set_new_obj(e.target.value)} 
            value={new_obj} 
            className="form-control"
            placeholder="Write new article title" />
          <button onClick={add_element} type="button" className="btn btn-dark" > + <br /> Add</button>
      </div>
    );
}