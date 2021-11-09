import styles from "./index.module.css";
import { EnterNameContainer } from "../EnterName";
import { useEffect, useState } from "react";
import { HeaderProps } from "./types";

export default function Header({
  currentAuthor,
  handleCurrentAuthor,
}: HeaderProps) {
  const [editName, setEditName] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] =  useState<boolean>(false);

  const handleEditName = () => {
    setEditName(!editName)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
        setIsScrolling(window.scrollY > 10);
    });

    return () => window.removeEventListener("scroll", () => {
      setIsScrolling(false);
    })
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolling ? styles.header_scrolling : ''}`}
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
