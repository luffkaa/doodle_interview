import { useState, ChangeEvent, KeyboardEventHandler } from "react";
import { HandlingMessageProps } from "../types";
import styles from "./index.module.css";

export default function SendMessageContainer({
  currentAuthor,
  handleMessageSent,
}: HandlingMessageProps) {
  const [message, setMessage] = useState<string>('');

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const sendMessage = async () => {
    const data = {
      "author": currentAuthor,
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
      handleMessageSent()

    } catch (e) {
      console.error(e)
    }
  }

  const handlePressInput:KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === "Enter") {
      sendMessage()
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
          onKeyPress={handlePressInput}
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
