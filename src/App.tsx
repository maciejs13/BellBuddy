import "./styles.css";
import { useState, useEffect } from "react";
import AddStudentForm from "./AddStudentForm";
import StudentItem from "./StudentItem";
import Clock from "./Clock";

function App() {
  const [students, setStudents] = useState<
    { firstName: string; lastName: string }[]
  >([]);

  const addStudent = (student: { firstName: string; lastName: string }) => {
    setStudents([...students, student]);
  };

  return (
    <>
      <Clock />
      <AddStudentForm sendName={addStudent} />
      <hr />
      {students.map((student, index) => (
        <StudentItem
          key={index}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </>
  );
}

export default App;
