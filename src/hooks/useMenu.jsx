import { useEffect, useState } from "react";

const useMenu = () =>{
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        fetch('http://localhost:5001/menu')
        .then(res => res.json())
        .then(data =>{
            setMenu(data)
            setLoading(true)
        })
    },[setMenu])
    return [menu, loading]
}

export default useMenu