import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddPost from "../AddPost/AddPost";
import Header from "../Header/Header";
import Post from "../Post/Post";
import styles from "./PostList.module.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddPost = (post) => {
    setPosts([...posts, post]);
  };

  const handleDeletePost = (id) => {
    return setPosts((posts) => posts.filter((post) => post.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleChange = (id, title, content) => {
    setPosts((posts) => {
      return posts.map((post) => {
        if (post.id === id) {
          return { ...post, title, content };
        }
        return { ...post };
      });
    });
  };

  const searched = posts.filter((post) =>
    post.title.toLowerCase().includes(search)
  );

  return (
    <div className={styles.container}>
      <Header search={search} handleSearch={handleSearch} />
      <section className={styles.posts}>
        <ol className={styles.posts__list}>
          {searched.map((post) => (
            <Post
              key={post.id}
              post={post}
              handleDeletePost={handleDeletePost}
              handleChange={handleChange}
            />
          ))}
        </ol>
        <Button
          className={styles.posts__addBtn}
          variant='contained'
          onClick={handleOpen}
        >
          작성하기
        </Button>
        {open && (
          <AddPost
            open={open}
            onAdd={handleAddPost}
            handleClose={handleClose}
          />
        )}
      </section>
    </div>
  );
}
