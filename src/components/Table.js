import React from 'react'

function Table() {
  return (
    <>
      <table class="table border-bottom border-secondary border-opacity-25">
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
            <th>Label 3</th>
            <th>Label 4</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td>Content 1</td>
            <td>Content 2</td>
            <td>Content 3</td>
            <td></td>
          </tr>
          <tr>
            <td>Content 1</td>
            <td>Content 2</td>
            <td>Content 3</td>
            <td>Content 4</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table