const Create = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <form>
            <label onSubmit={handleSubmit}>
                Legg til ny grønnsak:
                <input name="vegetable"></input>
            </label>
            <button type="submit">Legg till</button>
        </form>
    )
}

export default Create
