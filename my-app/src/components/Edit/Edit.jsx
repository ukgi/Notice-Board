import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import styles from "./Edit.module.css";

export default function Edit({
  open,
  title,
  content,
  handleCloseEdit,
  handleChange,
  id,
}) {
  const [changedTitle, setChangedTitle] = useState(`${title}`);
  const [changedContent, setChangedContent] = useState(`${content}`);

  const submitChanged = () => {
    handleChange(id, changedTitle, changedContent);
    handleCloseEdit();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleCloseEdit}>
        <DialogContent>
          <div className={styles.container}>
            <input
              type='text'
              value={changedTitle}
              onChange={(e) => setChangedTitle(e.target.value)}
            />
            <textarea
              value={changedContent}
              onChange={(e) => setChangedContent(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={submitChanged}>
            수정완료
          </Button>
          <Button className={styles.cancelBtn} onClick={handleCloseEdit}>
            취소하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
