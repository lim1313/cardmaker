import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard, updateCard, deleteCard, FileInput }) => {
  return (
    <section className={styles.editor}>
      <div className={styles.title}>Card Maker</div>
      {Object.keys(cards).map(key => {
        return (
          <CardEditForm
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        );
      })}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </section>
  );
};

export default Editor;
