import React from 'react'

const footer = () => {
  let footerstyle = {
    position: "relative",
    width: "100%",
    top: "70vh"
  }
  return (
    <div className='bg-dark text-light py-3' style={footerstyle}>
      <p className="text-center">
      Copyright &copy; MyTodoslist.com
      </p>
    </div>
  )
}

export default footer
