/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import TableRow from './TableRow'

class Table extends Component {
  render() {
    if (!this.props.files) {
      return (
        <>
        </>
      )
    }

    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Filename</th>
              <th>Description</th>
              <th>Uploaded by</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.files.map((file) => (
              <TableRow key={file['_id']} file={file} />
            ))}
          </tbody>
        </table>
      </div>)
  }
}

export default Table
