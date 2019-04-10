import React, { Component } from "react"

export default class EditAnimalForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: props.animal.species,
      imageUrl: props.animal.imageUrl,
      quantity: props.animal.quantity
    }
  }

  // everything below is a paste from our CreateAnimalForm | we changed our handleClick method

  handleChange = event => {
    let { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let animal = this.state
    this.props.updateAnimal(animal)
  }

  render() {
    return (
      <div style={{ border: "1px solid black", margin: 20 }}>
        <input
          onChange={this.handleChange}
          name="species"
          type="text"
          value={this.state.value}
          placeholder="species" />
        <input
          onChange={this.handleChange}
          name="imageUrl" type="text"
          value={this.state.imageUrl}
          placeholder="image url" />
        <input
          onChange={this.handleChange}
          name="quantity"
          type="number"
          value={this.state.quantity}
          placeholder="quantity"
        />

        <button onClick={this.handleClick}>Create Animal</button>

      </div>
    )
  }
}