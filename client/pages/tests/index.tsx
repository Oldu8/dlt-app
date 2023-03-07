import { TestList } from "@/components/TestList";
import MainLayout from "@/layouts/MainLayout";
import { ITest } from "@/types/test";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function Index() {
  const router = useRouter();
  const tests: ITest[] = [
    {
      _id: "64020560960ec1942bbf0566",
      testID: 1123,
      question: "asdaaaaaa?",
      img: "https://res.cloudinary.com/depqxsflw/image/upload/v1665444572/Image%20for%20tests/ds_t1_q1_hepvxn.png",
      categoryName: "drivingtest",
      inccorect_answers: [],
      correct_answer: "Daaaaa",
    },
    {
      _id: "64020560960ec1942bbf0566",
      testID: 1123,
      question: "wanna bear?",
      categoryName: "drivingtest",
      inccorect_answers: [],
      correct_answer: "Daaaaa",
    },
  ];
  return (
    <MainLayout>
      <h1 className="titlePage">List of all tests</h1>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: "80%" }}>
          <Box p={4}>
            <Grid container justifyContent={"space-between"}>
              <h2>All test questions:</h2>
              <Button
                onClick={() => router.push("/tests/create")}
                variant="contained"
              >
                Create test
              </Button>
            </Grid>
          </Box>
          <TestList tests={tests} />
        </Card>
      </Grid>
    </MainLayout>
  );
}

export default Index;
