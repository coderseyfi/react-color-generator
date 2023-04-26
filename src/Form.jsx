import React from 'react'
import { useState } from 'react'
const Form = ({ addColor }) => {
  const [color, setColor] = useState('#459262')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className="container">
      <h3>color generator</h3>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          className="type-color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ background: color }}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#459262"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
