import React from 'react'

const Button = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={{ ...btnStyle, ...style }}>
      {children}
    </button>
  )
}

const btnStyle = {
  padding: '15px',
  fontSize: '14px',
  backgroundColor: '#fdda40',
  border: 'none',
  borderRadius: '5px',
  width: '150px',
}

export default Button
