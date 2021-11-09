import styles from "./index.module.css";

export default function SendMessageContainer() {
  return (
    <div className={styles.send_message__container}>
      <div className={styles.send_message}>
        <input
          className={styles.send_message__input}
          type="text"
          placeholder="Message"
        />
        <button
          className={styles.send_message__button}
        >
          Send
        </button>
      </div>
    </div>
  )

}
