import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import All_Dresses from '../components/All_Dresses'

export default function Dress() {
    const {id} = useParams()
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