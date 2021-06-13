import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <div className={styles.title}>Card Maker</div>
      {cards.map(card => {
        return <CardEditForm key={card.id} card={card} />;
      })}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
