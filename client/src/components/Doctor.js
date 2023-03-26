import React from "react"; // Importing the React library.
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from the react-router-dom library.

function Doctor({ doctor }) { // Defining the Doctor component that takes a prop called "doctor".
const navigate = useNavigate(); // Initializing a navigate constant using the useNavigate hook.

// Returning a div element with the details of the doctor.
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <i>{doctor.specialization}</i>
      <hr />
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>Fee per Visit : </b>
        {doctor.feePerConsultation}
      </p>
      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
