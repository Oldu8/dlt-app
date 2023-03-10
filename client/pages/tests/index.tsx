import { TestItem } from "@/components/TestItem";
import MainLayout from "@/layouts/MainLayout";
import { ITest } from "@/types/test";
import { Box, Button, Card, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export interface testsProps {
  tests: ITest[];
}

function Index({ tests }: testsProps) {
  const [testsData, setTestsData] = useState<ITest[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    console.log("tests");
    if (tests && tests.length > 0) {
      console.log("tests loaded");

      setIsLoading(false);
      setTestsData(tests);
    }
  }, [tests]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
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
          <Grid container direction="column">
            <Box p={2}>
              {testsData.map((test) => {
                return <TestItem key={test.testID} test={test} />;
              })}
            </Box>
          </Grid>
        </Card>
      </Grid>
    </MainLayout>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps<testsProps> = async () => {
  const res = await fetch(`http://localhost:5000/tests/all`);
  const tests = await res.json();

  return {
    props: { tests },
  };
};
