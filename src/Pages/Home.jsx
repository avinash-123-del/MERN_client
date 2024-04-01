import React from 'react'
import { Table } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='container mt-5' >
      <h3 className='text-center' style={{color: "#0096FE" }}>Welcome Avinash Chandraker</h3>

      <Table size="sm" className='tbl'>
      <thead >
        <tr className='px-3'>
          <th>S.No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default Home