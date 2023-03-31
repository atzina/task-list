import React, {useEffect} from 'react';
import ListForm from './ListForm';
import { db } from "../firebase";
import { addDoc, collection, query, onSnapshot  } from 'firebase/firestore';

const List = () => {
    // listObject son los datos que quiero guardar, los datos del objeto "lista"
    const addList = async (listObject) => {
        await addDoc(collection(db,"lists"),{
            listObject
        });
        console.log('nueva tarea agregada');
    };

    const onGetList = (callback) => {
    const queryList = query(collection(db, "lists"));
    onSnapshot(queryList, callback);
    };

    const getList = async () => {
        onGetList((querySnapshot) => {
          
          querySnapshot.forEach((doc) => {
              console.log(doc.data());
            // console.log(doc.id);
          
        
         
          });
         
        });
      };

      useEffect(() => {
        getList();
      }, []);

    return <div>
        <ListForm addList={addList}/>
        <h1>List</h1>
    </div> 
   
}

export default List;