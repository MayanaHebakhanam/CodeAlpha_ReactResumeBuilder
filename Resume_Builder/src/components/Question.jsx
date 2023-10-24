import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: "block",
    marginTop: "16px",
  },
  button: {
    background: "pink",
    color:"purple",
    "&:hover":{
      background:"palevioletred",
    },
  },
  textfield:{
    fontWeight:"bold",
    fontStyle:"italic",
  },
}));

function Question() {
  const styleClass = useStyles();
  const value = useContext(AppContext);

  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;
  return (
    <div>
      <form noValidate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          className={styleClass.textfield}
          color="secondary"
          id="text-field"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={questionAnswer.answer ? questionAnswer.answer : ""}
          onChange={handleChangeInput}
        />
        <div className={styleClass.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="default"
            className={styleClass.button}
            endIcon={<ArrowRight />}
          >
          Next
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Question;