import axios from 'axios';

const Create = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const vegetable = e.target.vegetable.value
        sendDataToApi(vegetable)
    }

    const sendDataToApi = (data) => {
        axios.post('/api/vegetables', {
            name: data
        })
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >
                Legg til ny grønnsak:
                <input name="vegetable"></input>
            </label>
            <button type="submit">Legg till</button>
        </form>
    )
}

export default Create
