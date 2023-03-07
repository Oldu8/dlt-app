import { ITest } from "@/types/test";
import { Box, Grid } from "@mui/material";
import React from "react";
import { TestItem } from "./TestItem";

export interface TestListProps {
  tests: ITest[];
}

export const TestList: React.FC<TestListProps> = ({ tests }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tests.map((test) => {
          return <TestItem key={test.testID} test={test} />;
        })}
      </Box>
    </Grid>
  );
};
