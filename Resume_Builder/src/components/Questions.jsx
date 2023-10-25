import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography, Box } from "@material-ui/core";
import Question from "./Question";
import AppContext from "../AppContext";
import Resume from "./Resume";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  },
  progressBar: {
    margin: "16px",
  },
  question: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
}));

function LinearProgressWithLabel(progressVal) {
  return (
    <Box display="block" alignItems="center">
      <Box width="100%" mr="2px">
        <LinearProgress variant="determinate" {...progressVal} />
      </Box>
      <Box minWidth="20px">
        <Typography variant="h5" color="secondary">
          {`${Math.round(progressVal.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function Questions() {
  const styleClass = useStyles();

  const [progress, setProgress] = React.useState(0);

  const value = useContext(AppContext);
  let { questionAnswer, questions, answers } = value.state;

  useEffect(() => {
    setProgress(
      (answers.length / questions.length) * 100 ? (answers.length / questions.length) * 100 : 0);
  }, [answers]);

  return (
    <div>

      {answers.length !== questions.length ? (
        <LinearProgressWithLabel
          value={progress} color="secondary"
          className={styleClass.progressBar}
        />
        ) : null}

      <div className={styleClass.root}>
        {questions.length === answers.length ? (<Resume />) : (
          <div className={styleClass.question}>
            <Question />
          </div>
        )}
      </div>

    </div>
  );
}
export default Questions;
