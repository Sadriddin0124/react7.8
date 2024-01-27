import React from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { deleteUsers, fetchUsers } from "../features/Users/UsersSlice";

const DeleteModal = ({ open, toggle, edit }) => {
  const dispatch = useDispatch();
  const removeUser = () => {
    dispatch(deleteUsers(edit.id));
    dispatch(fetchUsers());
    toggle()
    setTimeout(()=> {
        window.location.reload()
    }, 1000)
  };
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalBody>
        <h1>Are you sure you want to delete {edit.firstName}?</h1>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-info" onClick={toggle}>
          cancel
        </button>
        <button className="btn btn-danger" onClick={removeUser}>
          delete
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
