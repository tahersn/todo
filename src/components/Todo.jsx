import React from 'react'

function Todo({todo}) {
  return (
    <div className='bg-gray-700 px-4 py-3 cursor-pointer rounded-md hover:bg-gray-700/80'>{todo.text}</div>
  )
}

export default Todo