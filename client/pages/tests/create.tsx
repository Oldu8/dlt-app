import MainLayout from "@/layouts/MainLayout";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/CreateTest.module.scss";

function Create() {
  const router = useRouter();

  const submitForm = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const res: { [key: string]: any } = {};

    for (const [key, value] of formData.entries()) {
      if (!!value) {
        res[key] = value;
      }
    }

    const jsonString = JSON.stringify(res);

    try {
      const res = await fetch("http://localhost:5000/tests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonString,
      });
      const data = await res.json().then((data) => router.push("/tests/"));
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>
      <h1 className="titlePage">Create test page</h1>
      <form className={styles.form} onSubmit={submitForm}>
        <TextField
          name="testID"
          style={{ marginTop: 10 }}
          label={"TestID: "}
        ></TextField>
        <TextField
          name="categoryName"
          style={{ marginTop: 10 }}
          label={"Category: "}
        ></TextField>
        <TextField
          name="testNumber"
          style={{ marginTop: 10 }}
          label={"Test number: "}
        ></TextField>
        <TextField
          name="question"
          style={{ marginTop: 10 }}
          label={"Questions: "}
        ></TextField>
        <TextField
          name="picture"
          style={{ marginTop: 10 }}
          label={"Picture URL: "}
        ></TextField>
        <TextField
          name="correct_answer"
          style={{ marginTop: 10 }}
          label={"Correct answers: "}
          multiline
          rows={2}
        ></TextField>
        <TextField
          name="incorrect_answers_1"
          style={{ marginTop: 10 }}
          label={"Inccorrect answer 1: "}
          multiline
          rows={2}
        ></TextField>
        <TextField
          name="incorrect_answers_2"
          style={{ marginTop: 10 }}
          label={"Inccorrect answer 2: "}
          multiline
          rows={2}
        ></TextField>
        <TextField
          name="incorrect_answers_3"
          style={{ marginTop: 10 }}
          label={"Inccorrect answer 3: "}
          multiline
          rows={2}
        ></TextField>
        <Button
          type="submit"
          style={{ marginTop: 30, padding: 5 }}
          variant={"contained"}
        >
          Create
        </Button>
      </form>
    </MainLayout>
  );
}

export default Create;
