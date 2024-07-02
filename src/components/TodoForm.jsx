import React, { useState, useEffect } from 'react'

const TodoForm = ({ addTodo, editTodo, editingTodo }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title)
    } else {
      setTitle('')
    }
  }, [editingTodo])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (editingTodo) {
      editTodo(editingTodo.id, title)
    } else {
      addTodo(title)
    }
    setTitle('') // Reset title
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={handleChangeTitle}
          value={title}
        />
        <button style={styles.button}>{editingTodo ? 'Update Todo' : 'Add Todo'}</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm
