import styles from "./index.module.css";
import { EnterNameContainer } from "../EnterName";
import { useState } from "react";
import { HeaderProps } from "./types";

export default function Header({
  currentAuthor,
  handleCurrentAuthor,
}: HeaderProps) {
  const [editName, setEditName] = useState<boolean>(false);

  const handleEditName = () => {
    setEditName(!editName)
  }

  return (
    <header
      className={styles.header}
    >
      <div className={styles.header__name_container}>
        <h1
          className={styles.h1_title}
        >Current user: {currentAuthor}</h1>
        { !editName &&
          <button
            onClick={handleEditName}
          >
            Edit
          </button>
        }
      </div>
      { editName &&
        <EnterNameContainer handleCurrentAuthor={handleCurrentAuthor} handleEditName={handleEditName}/>
      }
    </header>
  )
}
