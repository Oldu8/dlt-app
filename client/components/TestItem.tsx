/* eslint-disable @next/next/no-img-element */
import { ITest } from "@/types/test";
import { Delete } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import React from "react";
import styles from "../styles/TestItem.module.scss";

export interface TestItemProps {
  test: ITest;
}

export const TestItem: React.FC<TestItemProps> = ({ test }) => {
  return (
    <Card className={styles.test}>
      <p className={styles.testP}>
        <strong> MongoDB id:</strong> {test._id}
      </p>
      <p className={styles.testP}>
        <strong>TestID:</strong> {test.testID}
      </p>
      <p className={styles.testP}>
        <strong>Category:</strong> {test.categoryName}
      </p>
      {test.img ? (
        <img className={styles.img} src={test.img} alt="picture for test" />
      ) : null}
      <p className={styles.testP}>
        <strong>Questions:</strong> {test.question}
      </p>
      <p className={styles.testP}>
        <strong>Correct answer:</strong> {test.correct_answer}
      </p>
      <ul>
        <strong>Inccorect answers:</strong>
        {test.inccorect_answers}
      </ul>
      {/* <IconButton>
        <Delete />
      </IconButton> */}
    </Card>
  );
};
