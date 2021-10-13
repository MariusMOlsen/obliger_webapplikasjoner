const Todo = ({ todo }) => {

    return (
        <>
            <h3>  {todo ? todo.title : null}</h3 >
            <p>{todo ? todo.content : null}</p>
        </>
    );
}

export default Todo;