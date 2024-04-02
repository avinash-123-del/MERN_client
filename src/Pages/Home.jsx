import React from 'react'
import { Table } from 'react-bootstrap'
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  return (
    <div className='container mt-5' >
      <h3 className='text-center' style={{ color: "#0096FE" }}>Welcome Avinash Chandraker</h3>

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
            <td className='d-flex gap-1'>
              <button className='edit'><CiEdit size={12} /></button>
              <button className='del'><FaTrash size={12} /></button>
            </td>
          </tr>

        </tbody>
      </Table>
    </div>
  )
}

export default Home