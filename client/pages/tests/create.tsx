import MainLayout from "@/layouts/MainLayout";
import { Grid, TextField } from "@mui/material";
import React from "react";

function Create() {
  return (
    <MainLayout>
      <h1 className="titlePage">Create test page</h1>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        style={{ padding: 20, marginLeft: "40%", maxWidth: "60%" }}
      >
        <TextField style={{ marginTop: 10 }} label={"TestID: "}></TextField>
        <TextField style={{ marginTop: 10 }} label={"Category: "}></TextField>
        <TextField
          style={{ marginTop: 10 }}
          label={"Test number: "}
        ></TextField>
        <TextField style={{ marginTop: 10 }} label={"Questions: "}></TextField>
        <TextField
          style={{ marginTop: 10 }}
          label={"Picture URL: "}
        ></TextField>
        <TextField
          style={{ marginTop: 10 }}
          label={"Correct answers: "}
          multiline
          rows={2}
        ></TextField>
        <TextField
          style={{ marginTop: 10 }}
          label={"Inccorrect answer 1: "}
          multiline
          rows={2}
        ></TextField>
        <TextField
          style={{ marginTop: 10 }}
          label={"Inccorrect answer 2: "}
          multiline
          rows={2}
        ></TextField>
        <TextField
          style={{ marginTop: 10 }}
          label={"Inccorrect answer 3: "}
          multiline
          rows={2}
        ></TextField>
      </Grid>
    </MainLayout>
  );
}

export default Create;
