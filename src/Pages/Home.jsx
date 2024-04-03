import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { createNote, deleteNote, getNote, updateNote } from '../components/ApiHelpers';
import { useNavigate } from 'react-router';
import { IoLogOutOutline } from "react-icons/io5";


const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [userId, setUserId] = useState(null);
  const nav = useNavigate();

  const handleLogout = () => {
    setTableData([]);
    localStorage.clear();
    nav("/auth");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getNote(userId).then((res) => setTableData(res));
    }
  }, [userId]);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (editItemId !== null) {
      const updatedData = tableData.map(item => {
        if (item._id === editItemId) {
          return { ...item, title: title, description: description };
        }
        return item;
      });
      setTableData(updatedData);
      updateNote(editItemId, title, description,)
      setEditItemId(null);
    } else {
      const newData = {
        _id: Date.now(),
        title: title,
        description: description
      };
      createNote(title, description).then((res) => {
        setTitle('');
        setDescription('');
        res && getNote(userId).then((res) => setTableData(res));
      })
    }
  };

  const handleEdit = (id, title, description) => {
    console.log(id, title, description);
    setEditItemId(id);
    setTitle(title);
    setDescription(description);
  };

  const handleDelete = (id) => {
    deleteNote(id)
    console.log("id", id)
    const newData = tableData.filter(item => item._id !== id);
    setTableData(newData);
  };

  const userName = localStorage.getItem("userName");

  return (
    <div className='container mt-5'>
      <h3 className='text-center' style={{ color: "#0096FE" }}>Welcome {userName} <small className='fs-6' style={{cursor : "pointer"}} onClick={handleLogout}>Logout <IoLogOutOutline />
      </small></h3>


      <Form onSubmit={(e) => handleCreate(e)} className='d-flex flex-column flex-lg-row align-items-center row mt-5 justify-content-center'>
        <Form.Group className="mb-3 col-sm-6 col-lg-3" controlId="exampleForm.ControlInput1">
          <Form.Control required type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 col-sm-6" controlId="exampleForm.ControlInput1">
          <Form.Control required type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className='note_btn mb-3' >
          {editItemId !== null ? 'Update' : 'Create'}
        </Button>
      </Form>

      {tableData?.length > 0 ?
        <Table size="sm" className='tbl'>
          <thead>
            <tr className='px-3'>
              <th>S.No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td className='d-flex gap-1'>
                  <button className='edit'><CiEdit size={12} onClick={() => handleEdit(item._id, item.title, item.description)} /></button>
                  <button className='del'><FaTrash size={12} onClick={() => handleDelete(item._id)} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        :
        <div className=' text-center opacity-75 bounce-top m-auto' style={{maxWidth : "400px"}}>
          <img className='w-100' src="/note.png" alt="" />
        </div>
      }
    </div>
  );
};

export default Home;
