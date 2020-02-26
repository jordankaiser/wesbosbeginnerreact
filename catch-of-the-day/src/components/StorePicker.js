import React from 'react'

class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = (event) => {
    event.preventDefault()
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return (
      <form action="" className="store-picker" onSubmit={this.goToStore}>
        <h2>Please Enter a Store Name</h2>
        <input
         type="text"
         ref={this.myInput}
         required
         placeholder="Store Name"
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker