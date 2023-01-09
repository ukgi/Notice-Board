import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";

export default function Header({ search, handleSearch }) {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type='text'
        value={search}
        onChange={handleSearch}
        placeholder='제목으로 검색하세요'
      />
    </div>
  );
}
