import axios from 'axios';

const config = {
   headers: {
     Authorization: `Bearer ${localStorage.getItem("token")}`,
   },
 };

export const singupUser = async (name, email, password) => {
   try {
      const res = await axios.post("/sign-up", { name, email, password })
      return res.data
   } catch (error) {
      console.log(error)
   }
}

export const loginUser = async (email  , password) => {
   try {
      const res = await axios.post('/sign-in', { email, password })
      return res.data
   } catch (error) {
      return error?.response
   }
}

export const createNote = async (title , description) => {
   try {
      const res = await axios.post('/create', { title , description} , config)
      return res.data
   } catch (error) {
      console.log(error)
   }
}

export const getNote = async (userId) => {
   try {
      const res = await axios.post('/read', {userId} , config)
      return res.data
   } catch (error) {
      console.log(error)
   }
}

export const updateNote = async ( dataId, title, description) => {
   try {
      const res = await axios.post('/update', {  dataId, title, description} , config)
      return res.data
   } catch (error) {
      console.log(error)
   }
}

export const deleteNote = async (dataId) => {
   try {
      const res = await axios.post('/delete', {dataId} , config)
      return res.data
   } catch (error) {
      console.log(error)
   }
}

