import React from 'react'

const Button = ({url, text}) => {
  const handleClick = (e) => {
    window.open(url, "_blank");
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button