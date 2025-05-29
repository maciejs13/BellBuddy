import { useState } from "react";

interface PropsAddStudentForm {
  sendName: (name: { firstName: string; lastName: string }) => void;
}

function AddStudentForm({ sendName }: PropsAddStudentForm) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <div id="formContainer">
        <h2>Dodaj ucznia do listy:</h2>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Imię"
        />
        <br />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nazwisko"
        />
        <br />
        <button
          onClick={() => {
            if (firstName.trim() == "" || lastName.trim() == "") {
              return;
            }
            sendName({ firstName, lastName });
            setFirstName("");
            setLastName("");
          }}
        >
          Dodaj ucznia
        </button>
      </div>
    </>
  );
}

export default AddStudentForm;
