import React, { useContext, useRef } from "react";
import AppContext from "../AppContext";
import { makeStyles } from "@material-ui/core/styles";
import html2pdf from 'html2pdf.js';

const useStyles = makeStyles(() => ({
  buttonBuildNew: {
    cursor: "pointer",
    minWidth: "30px",
    textAlign: "center",
    border: "none",
    padding: "3px",
    color:'purple',
    backgroundColor:'pink',
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 19%)",
    "&:hover": {
      background: "palevioletred",
    },
   
  },
  buttonDownload: {
    cursor: "pointer",
    minWidth: "30px",
    textAlign: "center",
    border: "none",
    padding: "3px",
    backgroundColor:'pink',
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 19%)",
    "&:hover": {
      background: "palevioletred",
    },
    
  },
  resume: {
    padding:'10px',
    margin:"2px",
    marginTop:"10px",
    marginBottom:"10px",
    boxShadow:"0 2px 1px 0 rgb(0 0 0 / 10%)",
  }
 
}));

let refreshPage = () => {
  window.location.reload();
};

function Resume() {
  const value = useContext(AppContext);
  const classes =useStyles();
  const componentRef=useRef();

  const generatePdf= ()=>{
    const pdfStyle={
      margin:"5px",
      filename:"resume.pdf",
      
      
     }
       const element=componentRef.current;
       html2pdf()
       .from(element)
       .set({
        margin:1,
        filename:"resume.pdf",
        html2canvas:{scale:2},
        jsPDF: {unit:'in',orientation:'landscape',background:'white'},
       })
       .save();
  }

  let { answers } = value.state;
  return (
    <div>
      
      <div ref={componentRef} className={classes.resume}>
        
      {answers.map((answer)=>{ return(
         <div>
             {answer.resumeFieldId === "name" || answer.resumeFieldId === "email" ||
            answer.resumeFieldId === "address" || answer.resumeFieldId === "phoneNumber" ? (
          <div
            style={{
              textAlign: "right",
            }}
          >
            <label>{answer.answer}</label>
          </div>
        ) : (
          <div>
            <h4>{answer.resumeField}</h4>
            <p>{answer.answer}</p>
          </div>
        )}
      </div>
    );
  })}
      </div>

       <div style={{display:'flex',justifyContent:'space-around'}}>
         <button onClick={refreshPage} className={classes.buttonBuildNew}>
          Build New
          </button>
         <button onClick={generatePdf} className={classes.buttonDownload}>Download Resume</button>
       </div>
     </div>
  );
}

export default Resume;