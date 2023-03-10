/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/layouts/MainLayout";
import { ITest } from "@/types/test";
import { Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/TestPage.module.scss";

export interface testProps {
  test: ITest;
}

function TestPage({ test }: testProps) {
  const router = useRouter();
  console.log(test);

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
            {test.incorrect_answers.map((test) => {
              return (
                <li className={styles.testP} key={test}>
                  <strong>Inccorect answers: </strong>
                  {test}
                </li>
              );
            })}
          </ul>
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </div>
    </MainLayout>
  );
}

export default TestPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const res = await fetch(`http://localhost:5000/tests/${id}`);
  const test = await res.json();
  return {
    props: { test },
  };
};
