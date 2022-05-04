import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    const detailListType = display === "list" ? styles.row : styles.column;

    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={`${styles.video} ${detailListType}`}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{snippet.title}</h3>
          <p className={styles.description}>
            {snippet.channelTitle} • Upload Date:{" "}
            {snippet.publishedAt.substr(0, 10)}
          </p>
        </div>
      </li>
    );
  }
);

export default VideoItem;
