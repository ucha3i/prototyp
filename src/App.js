/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import Table from './components/Table'
import Upload from './components/Upload'

const url = 'http://localhost:8080/files'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: null
    }
  }

  fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((files) => this.setState({ files }))
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <>
        <Table files={this.state.files} />
        <Upload />
      </>
    )
  }
}

export default App
