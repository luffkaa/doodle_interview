import { ChangeEvent, useState } from "react";
import styles from "./index.module.css";
import { EnterNameProps } from "./types";

export default function EnterNameContainer ({
  handleCurrentAuthor,
  handleEditName,
}: EnterNameProps) {
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleNewName = () => {
    handleCurrentAuthor(name);
    handleEditName()
  }

  return (
    <div className={styles.edit_name__container}>
      <input
        type="text"
        placeholder="Message"
        value={name}
        onChange={handleNameChange}
      />
      <button
        onClick={handleNewName}
        disabled={name ? false : true}
      >
        Submit
      </button>
    </div>
  )
}
