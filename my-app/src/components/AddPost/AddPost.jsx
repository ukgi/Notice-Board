import React from "react";
import { useState } from "react";
import styles from "./AddPost.module.css";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AddPost({ open, onAdd, handleClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("제목을 입력하세요");
      return;
    }
    onAdd({ id: Date.now(), title, content });
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>게시판을 입력하세요</DialogTitle>
        <DialogContent>
          <div className={styles.form}>
            <input
              type='text'
              placeholder='제목을 입력하세요'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder='내용을 입력하세요'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleSubmit}>
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
