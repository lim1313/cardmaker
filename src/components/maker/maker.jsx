import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "haha",
      company: "san",
      theme: "dark",
      title: "software",
      email: "elli@gamil.com",
      message: "go for it",
      fileName: "img",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "haha2",
      company: "san",
      theme: "colorful",
      title: "software",
      email: "elli@gamil.com",
      message: "go for it",
      fileName: "img",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "haha3",
      company: "san",
      theme: "light",
      title: "software",
      email: "elli@gamil.com",
      message: "go for it",
      fileName: "img",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
