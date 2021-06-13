import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
