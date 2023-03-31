import React, {useState} from "react";

const ListForm = (props) => {

    //define el estado
    const initialStateValues ={
        content: '',
    }; 
    const [values, setValues] = useState(initialStateValues);

    const inputChange = (e) =>{
        const{name, value} = e.target;
        setValues({...values, [name]:value })
    };

    // función para el submit del formulario
    const submit = e => {
        e.preventDefault();
        props.addList(values);
        setValues({...initialStateValues})
    };

  return (
    <form onSubmit={submit}>
      <div>
        <textarea onChange={inputChange} name ="content" value={values.content}></textarea>
      </div>
      <button>Agregar Lista</button>
    </form>
  );
};

export default ListForm;
