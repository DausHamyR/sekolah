import React from 'react'
import { useParams } from 'react-router-dom'
import http from '../helpers/http.helper'

function Kategori() {
    const {name} = useParams()
    // console.log(name, "oke")

    React.useEffect(()=> {
        const getEventData = async() => {
            const {data} = await http().get(`/kategori/${name}`)
            console.log(data)
        }
        getEventData(name)
    }, [name])

    return (
        <div>Kategori {name}</div>
    )
}

export default Kategori