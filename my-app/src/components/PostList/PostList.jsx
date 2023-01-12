import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddPost from "../AddPost/AddPost";
import Header from "../Header/Header";
import Post from "../Post/Post";
import styles from "./PostList.module.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { PersonalVideoRounded } from "@mui/icons-material";

export default function PostList() {
  const [posts, setPosts] = useState(() => readPostsFromLocalStorage());
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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

  const handleDropChange = (result) => {
    if (!result.destination) return;
    console.log(result);
    const items = [...posts];
    const [reorderedPosts] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedPosts);
    setPosts(items);
  };

  return (
    <div className={styles.container}>
      <Header search={search} handleSearch={handleSearch} />
      <section className={styles.posts}>
        <DragDropContext onDragEnd={handleDropChange}>
          <Droppable droppableId='posts'>
            {(provided) => (
              <ul
                className={styles.posts__list}
                {...PersonalVideoRounded.droppableProps}
                ref={provided.innerRef}
              >
                {searched.map((post, index) => (
                  <Draggable
                    key={post.id.toString()}
                    draggableId={post.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Post
                        key={post.id}
                        post={post}
                        handleDeletePost={handleDeletePost}
                        handleChange={handleChange}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
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

function readPostsFromLocalStorage() {
  console.log("로컬 스토리지로부터 데이터를 가져옵니다");
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
}
