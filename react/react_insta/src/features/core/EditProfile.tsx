import React, { useState }from 'react'
import Modal from "react-modal";
import styles from "./Core.module.css"

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';

import { File } from "../types"

import {
  editNickname,
  selectProfile,
  selectOpenProfile,
  resetOpenProfile,
  fetchCredStart,
  fetchCredEnd,
  fetchAsyncUpdateProf,
} from "../auth/authSlice";

import { Button, TextField, IconButton } from "@material-ui/core";
import { MdAddAPhoto } from "react-icons/md";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",

    width: 280,
    height: 220,
    padding: "50px",

    transform: "translate(-50%, -50%)",
  },
};

const EditProfile:React.FC = () => {
  return (
    <div>EditProfile</div>
  )
}

export default EditProfile