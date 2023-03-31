import React, { useState } from "react";
import styles from "../App.module.css";

const ListForm = (props) => {
  //define el estado
  const initialStateValues = {
    content: "",
  };
  const [values, setValues] = useState(initialStateValues);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // función para el submit del formulario
  const submit = (e) => {
    e.preventDefault();
    props.addList(values);
    setValues({ ...initialStateValues });
  };

  return (
    <form onSubmit={submit}>
      <div className={styles.title}>
        <h1>Lista de Tareas</h1>
        <textarea className={styles.textarea}
          onChange={inputChange}
          name="content"
          value={values.content}
        ></textarea>
      <button className={styles.btnAddList}>Agregar Lista</button>
      </div>
    </form>
  );
};

export default ListForm;
