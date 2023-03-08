/* eslint-disable @next/next/no-img-element */
import { ITest } from "@/types/test";
import { Delete } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/TestItem.module.scss";

export interface TestItemProps {
  test: ITest;
}

export const TestItem: React.FC<TestItemProps> = ({ test }) => {
  const router = useRouter();
  return (
    <Card
      className={styles.test}
      onClick={() => router.push("/tests/" + test._id)}
    >
      <div>
        <p className={styles.testP}>
          <strong>TestID:</strong> {test.testID}
        </p>
        <p className={styles.testP}>
          <strong>Category:</strong> {test.categoryName}
        </p>
        <p className={styles.testP}>
          <strong>Questions:</strong> {test.question}
        </p>
      </div>
      <IconButton>
        <Delete />
      </IconButton>
    </Card>
  );
};
