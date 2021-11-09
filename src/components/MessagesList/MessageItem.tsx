import { GlobalProps } from "../types";
import styles from "./index.module.css";
import { MessageProps } from "./types";

export default function MessageItem({
  author,
  currentAuthor,
  message,
  timestamp,
}: MessageProps & GlobalProps) {

  const handleMessageDate = (timestamp: number) => {
    const d = new Date(timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();
    const hour = d.getHours();
    const min = d.getMinutes();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    
    return time
  }

  return (
    <div
      className={`${styles.message__container} ${currentAuthor === author ? styles.message__container_author : ''}`}
    >
      { currentAuthor !== author && 
        <p className={styles.message_author}>{author}</p>
      }
      <p className={styles.message_message}>{message}</p>
      <p className={styles.message_time}>{handleMessageDate(timestamp)}</p>
    </div>
  )
}
