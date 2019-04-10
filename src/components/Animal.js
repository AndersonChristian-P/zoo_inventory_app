// this is what we will display for each animal

import React, { Component } from "react"
import EditAnimalForm from "./EditAnimalForm"

export default class Animal extends Component {
  constructor() {
    super()

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    let { animal } = this.props
    return (
      this.state.edit ?
        <EditAnimalForm animal={animal} updateAnimal={this.props.updateAnimal} /> :
        <div style={{ border: "1px solid #eee", margin: 10 }}>
          <img src={animal.imageUrl} alt="" width="200" />
          <p>species: {animal.species}</p>
          <p>qty: {animal.quantity}</p>
          <button onClick={this.toggleEdit}>Edit</button>
        </div>
    )
  }
}

