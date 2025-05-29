import { useState } from "react";

interface PropsStudentItem {
  firstName: string;
  lastName: string;
}

function StudentItem({ firstName, lastName }: PropsStudentItem) {
  const [isPresent, setIsPresent] = useState(false);

  return (
    <>
      <div className="studentBox">
        <div className="nameSpace">
          <h2>
            {firstName} {lastName}
          </h2>
        </div>
        <div className="buttonSpace">
          <button
            onClick={() => setIsPresent(!isPresent)}
            style={{
              backgroundColor: isPresent
                ? "rgb(43, 158, 43)"
                : "rgb(196, 62, 62)",
              color: "white",
            }}
          >
            {isPresent ? "Obecny" : "Nieobecny"}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default StudentItem;
