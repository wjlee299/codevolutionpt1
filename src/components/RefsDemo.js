import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.cbRef = null
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }
  
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }

  clickHandler = () => {
    if (this.cbRef) {
      alert(this.cbRef.value)
    }
  }

  render() {
    return (
      <>
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Show</button>
      </>
    )
  }
}

export default RefsDemo

// class RefsDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.inputRef = React.createRef()
//   }
  
//   componentDidMount() {
//     this.inputRef.current.focus()
//   }

//   clickHandler = () => {
//     alert(this.inputRef.current.value)
//   }

//   render() {
//     return (
//       <>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.clickHandler}>Show</button>
//       </>
//     )
//   }
// }

// export default RefsDemo