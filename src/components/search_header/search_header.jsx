import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";
import * as Unicons from "@iconscout/react-unicons";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onHomeClick = () => {
    window.location = "/";
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={onHomeClick}>
        {/* <img
          src="../public/images/myLogo.png"
          alt="logo"
          className={styles.logoIcon}
        /> */}
        <Unicons.UilYoutube className={styles.logoIcon} />
        <h1 className={styles.title}>YouTube</h1>
      </button>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder=" Search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <Unicons.UilSearch className={styles.buttonIcon} />
      </button>
    </header>
  );
});

export default SearchHeader;
