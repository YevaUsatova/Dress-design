import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchDresses} from "../actions/dress"
import AllDresses from '../components/AllDresses'


export default function Dresses() {

     const dispatch = useDispatch()
     const {close} = useSelector(({dressReducer}) => dressReducer)

     useEffect(() => {
         fetchDresses(dispatch)   
     }, [dispatch])

    return (
        <div>
           <h1>Dresses</h1> 
           {close.map(dresses => <AllDresses dresses={dresses}/>)}
        </div>
    )
}