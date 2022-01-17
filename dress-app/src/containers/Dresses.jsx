import React, {useEffect, useState} from 'react'
import DressCard from '../components/DressCard'


export default function Dresses() {
    const [dress, setDress] = useState([]) 
  
    useEffect(()=>{
        fetch (`/dresses`)
        .then (r=> r.json())
        .then (data => setDress([...data]))
    }, [])

  function handleUpdate(updatedLike) {
    setDress((dress) =>
      dress.map((dresses) => {
        return dresses.id === updatedLike.id ? updatedLike : dresses;
      })
    );
  }  
  function handleDelete(id){
    fetch(`/dresses/${id}`, {
        method: "DELETE",
    })
    let dressDelete = dress.filter(dresses => dresses.id !== id)
    setDress(dressDelete)  
  }
   
    return (
    <div>
    
      {dress.map(dresses => <DressCard key = {dresses.id} dresses={dresses} setDress={setDress} handleUpdate = {handleUpdate} handleDelete={handleDelete}/>)}
      
     </div>
    )

    
}