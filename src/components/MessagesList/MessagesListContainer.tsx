import { useCallback, useEffect, useState } from "react";
import { HandlingMessageProps } from "../types";
import styles from "./index.module.css";
import MessageItem from "./MessageItem";
import { MessageProps } from "./types";

export default function MessagesListContainer({
  currentAuthor,
  handleMessageSent,
  isMessageSent,
}: HandlingMessageProps) {
  const [allMessages, setAllMessages] = useState<MessageProps[]>()

  const getMessages = useCallback( async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}?token=${process.env.REACT_APP_TOKEN}`)

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const result = await response.json()
      setAllMessages(result);
      handleMessageSent()

    } catch (e) {
      console.error(e)
    }

  }, [handleMessageSent])

  useEffect(() => {
    getMessages()
  }, [getMessages])

  useEffect(() => {
    if (isMessageSent) {
      getMessages()
    }
  }, [getMessages, isMessageSent])

  return (
    <div
      className={styles.messages_list__container}
    >
      {allMessages?.map(message => 
        <MessageItem 
          key={message._id}
          {...message}
          currentAuthor={currentAuthor}
        />
      )}
    </div>
  )
}
