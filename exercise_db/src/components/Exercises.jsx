import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirtExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirtExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => {
          return <ExerciseCard key={idx} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
