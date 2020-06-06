import React from 'react'

export const Upload = () => {
  return (
    <div className="form">
      <form id="uploadForm" action="http://localhost:8080/upload" method="post" encType="multipart/form-data">
        {' '}
        {' '}
        <input type="file" name="sampleFile" />
        {' '}
        {' '}
        <input type="submit" value="Upload!" />
        {' '}
        {' '}
        {' '}
      </form>
    </div>)
}
