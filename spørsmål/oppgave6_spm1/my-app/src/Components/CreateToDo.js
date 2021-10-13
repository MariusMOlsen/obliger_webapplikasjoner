const CreateToDo = ({ add }) => {

    const handleAdd = (event) => {
        event.preventDefault();
        const title = event.target.title.value
        const content = event.target.content.value
        const list = { title: title, content: content }
        add(list)

    }
    return (
        <>
            <form onSubmit={handleAdd}>
                <label>
                    Title
                    <input id="title" name="title"></input>
                </label>
                <label>
                    Content
                    <textarea id="content" name="content"></textarea>
                </label>

                <button type="submit" >Add</button>
            </form>
        </>
    )


}

export default CreateToDo