import { useState, ChangeEvent } from "react";
import styles from "./index.module.css";

export default function SendMessageContainer() {
  const [message, setMessage] = useState<string>('');
  const [author, setAuthor] = useState<string>('Pam');

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  console.log(message)

  const sendMessage = async () => {
    const data = {
      "author": author,
      "message": message,
    }

    try {
      const response = await fetch(process.env.REACT_APP_URL!, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'token': `${process.env.REACT_APP_TOKEN}`,
          'Content-Type': 'application/json'
        },
        
      });
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={styles.send_message__container}>
      <div className={styles.send_message}>
        <input
          className={styles.send_message__input}
          type="text"
          placeholder="Message"
          value={message}
          onChange={handleMessage}
        />
        <button
          className={styles.send_message__button}
          onClick={sendMessage}
          disabled={message ? false : true}
        >
          Send
        </button>
      </div>
    </div>
  )

}
