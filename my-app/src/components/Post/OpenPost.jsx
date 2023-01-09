import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import styles from "./OpenPost.module.css";

export default function OpenPost({ title, content, open, handleClosePost }) {
  return (
    <Dialog open={open} onClose={handleClosePost}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className={styles.DialogContent}>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClosePost}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
