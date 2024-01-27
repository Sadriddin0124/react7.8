import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchUsers } from "./UsersSlice";
import UsersModal from "../../components/UsersModal";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import DeleteModal from "../../components/DeleteModal";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => state?.users?.data?.data);
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [edit, setEdit] = useState('')
  const toggle =()=> {
    setModal(false)
    setDeleteModal(false)
    setEdit('')
  }
  const editUser = (item) => {
    setEdit(item)
    setModal(true)
  }
  const deleteUser = (item) => {
    setEdit(item)
    setDeleteModal(true)
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <DeleteModal open={deleteModal} toggle={toggle} edit={edit}/>
      <UsersModal open={modal} toggle={toggle} edit={edit}/>
        <div className="col-4 offset-2">
          <button className="btn btn-success mb-3" onClick={()=>setModal(true)}>Add+</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-8 offset-2">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="btn btn-primary mx-3" onClick={()=>editUser(item)}><FaRegEdit/></button>
                      <button className="btn btn-danger" onClick={()=>deleteUser(item)}><MdOutlineDelete/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
