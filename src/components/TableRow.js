/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'

class TableRow extends Component {
  render() {
    const { type, filename, description, uploader, date } = this.props.file

    return (
      <tr>
        <td>{type}</td>
        <td>{filename}</td>
        <td>{description}</td>
        <td>{uploader}</td>
        <td>{(new Date(date)).toLocaleDateString('en-UK')}</td>
      </tr>)
  }
}

export default TableRow
