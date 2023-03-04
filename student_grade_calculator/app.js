const btn = document.getElementsByClassName("btn");
const newRow = document.getElementsByClassName("new-row");
const totalMarkEle = document.getElementsByClassName("total-marks");
const obtainMarkEle = document.getElementsByClassName("total-obtain-marks");
const percentageEle = document.getElementsByClassName("percentage");
const gradeEle = document.getElementsByClassName("grade");

function updateResult() {
  let totalMarks = 0;
  let obtainMarks = 0;
  // gat all table-row means obtain marks and total marks input
  document.querySelectorAll(".table-row").forEach((tableRowElement) => {
    let obtainMark =
      tableRowElement.getElementsByClassName("obtain-mark")[0].value;
    let totalMark =
      tableRowElement.getElementsByClassName("total-mark")[0].value;
    totalMarks += parseFloat(totalMark);
    obtainMarks += parseFloat(obtainMark);
  });
  // update marks and Percentage
  totalMarkEle[0].textContent = totalMarks;
  obtainMarkEle[0].textContent = obtainMarks;
  let precentage = calculatePercentage(totalMarks, obtainMarks);
  percentageEle[0].textContent = precentage;
  gradeEle[0].textContent = calculateGrade(precentage);
}


// Calculate Percentage
function calculatePercentage(totalMarks, obtainMarks) {
  const percentage = (obtainMarks / totalMarks) * 100;
  return percentage;
}

// Calculate Grade
function calculateGrade(percentage) {
  if (percentage >= 70 && percentage <= 100) {
    return "A";
  } else if (percentage >= 40) {
    return "B";
  } else {
    return "C";
  }
}

// add event for click result button
btn[0].addEventListener("click", updateResult);

