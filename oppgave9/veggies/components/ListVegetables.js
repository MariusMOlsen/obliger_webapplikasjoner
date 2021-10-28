import { useEffect, useState } from "react"
import axios from 'axios';

const ListVegetables = () => {

    const [vegetables, setVegetables] = useState(["1", "2", "3"])

    const getVegetables = async () => {
        try {
            const response = await axios.get("/api/vegetables");
            const data = response.data.data
            setVegetables(data)

            // Jeg skjønner ikke hvorfor disse 2 testene ikke logger det samme i konsollen.
            console.log(data)
            console.log(vegetables)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVegetables()
    }, [])


    return (
        <>
            {vegetables.map((item) => <div>{item.name}</div>)}
        </>
    )
}

export default ListVegetables