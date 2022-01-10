import React, {useEffect, useState} from 'react'
 import DressCard from '../components/DressCard'

export default function Dresses({user}) {
    const [dress, setDress] = useState([]) 
    useEffect(()=>{
        fetch ('/dresses')
        .then (r=> r.json())
        .then (data => setDress([...data]))
    }, [])
   
    return (
    <div>
        
        {dress.map(dresses => <DressCard dresses={dresses}/>)}
       
     </div>
    )

    
}