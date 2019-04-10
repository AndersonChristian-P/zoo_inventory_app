import React, { Component } from "react"
import axios from "axios"

import Animal from "./Animal"

export default class Animals extends Component {
  constructor() {
    super()

    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    axios.get("/api/animals") // we only put the endpoint because we indicated a proxy in package.json
      .then(res => {
        this.setState({
          animals: res.data
        })
      })
      .catch(err => console.log("error get animals: ", err))
  }

  render() {
    return (
      this.state.animals.map(animal => {
        return <Animal key={animal.id} animal={animal} />
      })
    )
  }
}