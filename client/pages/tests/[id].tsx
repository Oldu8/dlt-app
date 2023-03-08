/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/layouts/MainLayout";
import { ITest } from "@/types/test";
import { Delete } from "@mui/icons-material";
import { Button, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/TestPage.module.scss";

const TestPage = () => {
  const test: ITest = {
    _id: "64020560960ec1942bbf0566",
    testID: 1123,
    question: "asdaaaaaa?",
    img: "https://res.cloudinary.com/depqxsflw/image/upload/v1665444572/Image%20for%20tests/ds_t1_q1_hepvxn.png",
    categoryName: "drivingtest",
    inccorect_answers: [],
    correct_answer: "Daaaaa",
  };
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        onClick={() => router.push("/tests")}
        style={{ fontSize: 32 }}
      >
        Back to list
      </Button>
      <div className={styles.test}>
        <div className={styles.testBlock}>
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
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </div>
    </MainLayout>
  );
};

export default TestPage;
