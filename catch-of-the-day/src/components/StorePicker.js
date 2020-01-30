import React from 'react'

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-picker">
        <h2>Please Enter a Store Name</h2>
        <hi></hi>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker