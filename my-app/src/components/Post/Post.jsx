import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Post.module.css";
import OpenPost from "./OpenPost";
import Edit from "../Edit/Edit";

export default function Post({ post, handleDeletePost, handleChange }) {
  const { title, content, id } = post;
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleOpenPost = () => setIsOpen(true);
  const handleClosePost = () => setIsOpen(false);
  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) handleDeletePost(id);
  };
  const deletePost = () => {
    onRemove();
  };

  const handleOpenEdit = () => setEdit(true);
  const handleCloseEdit = () => setEdit(false);

  return (
    <>
      <li className={styles.post}>
        <button className={styles.postTitle} onClick={handleOpenPost}>
          {title}
        </button>
        <div>
          <EditIcon className={styles.editIcon} onClick={handleOpenEdit} />
          <DeleteIcon className={styles.deleteIcon} onClick={deletePost} />
        </div>
      </li>
      {isOpen && (
        <OpenPost
          title={title}
          content={content}
          open={isOpen}
          handleClosePost={handleClosePost}
        />
      )}
      {isEdit && (
        <Edit
          open={isEdit}
          title={title}
          content={content}
          handleCloseEdit={handleCloseEdit}
          handleChange={handleChange}
          id={id}
        />
      )}
    </>
  );
}
