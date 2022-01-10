import React, { useEffect, useState } from 'react'
import Dresses from '../containers/Dresses'

export default function Dress() {
  
    const [dress, setDress] = useState({})

    useEffect(() => {
        if(id){
            fetch(`/dresses/${id}`)
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(setDress)
                } else {
                    resp.json(({errors}) => alert(errors))
                }
            })
        }
    }, [id])


    return (
        <div>
           {!!dress.id && <All_Dresses dress={dress}/>}
        </div>
    )
}