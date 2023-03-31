import React, { useEffect, useState } from "react";
import ListForm from "./ListForm";
import { db } from "../firebase";
import { addDoc, collection, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import styles from "../App.module.css";

const List = () => {
  const [lists, setLists] = useState([]);

  // listObject son los datos que quiero guardar, los datos del objeto "lista"
  const addList = async (listObject) => {
    await addDoc(collection(db, "lists"), {
      listObject,
    });
    console.log("nueva tarea agregada");
  };

  const deleteList = async (id) => {
    await deleteDoc(doc(db, "lists", id));
    console.log("lista eliminada");
  } 

  const onGetList = (callback) => {
    const queryList = query(collection(db, "lists"));
    onSnapshot(queryList, callback);
  };

  const getList = async () => {
    onGetList((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // console.log(doc.id);

        docs.push({ ...doc.data(), id: doc.id });
      });
      setLists(docs);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <ListForm addList={addList} />
      <div className={styles.divConteinerLists}>
        {lists.map((list) => (
          <div className={styles.divLists} key={list.id}>
            
            <p>{list.listObject.content}</p>
            
            <button onClick={() => deleteList(list.id)}>Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
