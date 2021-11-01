import { useEffect, useState } from "react"
import axios from 'axios';

const ListVegetables = () => {

    const [vegetables, setVegetables] = useState(["1", "1"])
    const [specificVegetable, setSecificVegetable] = useState(null)
    const [error, setError] = useState(null)

    const getVegetables = async () => {
        try {
            const response = await axios.get("/api/vegetables");
            const data = response.data.data
            setVegetables(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const vegetable = e.target.vegetable.value
            const response = await axios.get('/api/vegetables', { params: { name: vegetable } })
            const data = response.data.name.name
            setSecificVegetable(data)
            setError(null)
        } catch (error) {
            setError("Noe gikk galt, sjekk om du har hentet en eksisterende grønnsak")
        }

    }

    useEffect(() => {
        getVegetables()
    }, [])


    return (
        <>
            {vegetables ? vegetables.map((item) => <div>{item.name}</div>) : null}

            <div className="requestVegetable">
                <form onSubmit={handleSubmit}>
                    <label >
                        Hent spesifikk grønnsak:
                        <input name="vegetable"></input>
                    </label>
                    <button type="submit">hent</button>
                </form>
                {specificVegetable ? <p>{specificVegetable} </p> : null}
                {error ? <p>{error}</p> : null}
            </div>
        </>
    )
}

export default ListVegetables