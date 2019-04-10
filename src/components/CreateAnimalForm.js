import React, { Component } from "react"

class CreateAnimalForm extends Component {
  constructor() {
    super()

    this.state = {
      species: "",
      quantity: 0,
      imageUrl: ""
    }
  }

  handleChange = event => {
    let { value, name } = event.target
    this.setState({
      [name]: value
    })
  } // this one method is dynamic for all the inputs below | we assign the bracket so that .setState is looking for a variable name which we defined in each input element

  handleClick = () => {
    let newAnimal = this.state
    // console.log(111111, newAnimal)
    this.props.createAnimal(newAnimal)
  }

  render() {
    return (
      <div style={{ border: "1px solid black", margin: 20 }}>
        <input
          onChange={this.handleChange}
          name="species"
          type="text"
          placeholder="species" />
        <input
          onChange={this.handleChange}
          name="imageUrl" type="text"
          placeholder="image url" />
        <input
          onChange={this.handleChange}
          name="quantity"
          type="number"
          placeholder="quantity"
        />

        <button onClick={this.handleClick}>Create Animal</button>

      </div>
    )
  }

}

export default CreateAnimalForm