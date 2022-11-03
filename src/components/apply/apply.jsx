import React from "react";
import { useEffect } from "react";
import "./apply.css";
import background from "../apply/part_ners.jpg";
const Application = () => {
  const initialValues = {
    fullname: "",
    DOB: "",
    phone: "",
    mailid: "",
    idproof: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    uploads: "",
    preferredarea: "",
    vehicle: "",
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [Errors, setErrors] = React.useState({});
  const [Submitting, setSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Name required";
    } else if (values.fullname.length < 3) {
      errors.fullname = "Name must have more than 3 characters";
    }
    if (!values.DOB) {
      errors.DOB = "birth date required";
    }
    if (!values.phone) {
      errors.phone = "Number required";
    } else if (values.phone.length < 10) {
      errors.numbers = "need 10 characters";
    } else if (values.phone.length > 10) {
      errors.phone = "more than 10 characters used";
    }
    if (!values.mailid) {
      errors.mailid = "Name required";
    } else if (!regex.test(values.mailid)) {
      errors.mailid = "Invalid email format";
    }
    if (!values.idproof) {
      errors.idproof = "Idproof required";
    } else if (values.idproof.length < 12) {
      errors.idproof = "need 12 numbers";
    } else if (values.idproof.length > 12) {
      errors.idproof = "more than 12 numbers used";
    }
    if (!values.address) {
      errors.address = "enter address";
    }
    if (!values.city) {
      errors.city = "city name required";
    }
    if (!values.pincode) {
      errors.pincode = "pincode required";
    } else if (values.pincode.length < 6) {
      errors.pincode = "needs 6 numbers";
    } else if (values.pincode.length > 6) {
      errors.pincode = "needs only 6 characters";
    }
    if (!values.state) {
      errors.state = "select state";
    }
    if (!values.uploads) {
      errors.uploads = "upload photo";
    }
    if (!values.preferredarea) {
      errors.preferredarea = "Enter area name";
    }
    if (!values.vehicle) {
      errors.vehicle = "Required";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submitting) {
      console.log(formValues);
    }
  }, [Errors]);
  return (
    <div
      className="container" id="go"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <center>
          <h1>ApplicationForm</h1>
        </center>
        <div className="inputs">
          <div>
            <label>FullName</label>
          </div>
          <div>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your name"
              value={formValues.fullname}
              onChange={handleChange}
            />
          </div>
          {Errors.fullname}
        </div>
        <div className="inputs">
          <div>
            <label>Date Of Birth</label>
          </div>
          <div>
            <input
              type="date"
              name="DOB"
              id="dob"
              value={formValues.DOB}
              onChange={handleChange}
            />
          </div>
          {Errors.DOB}
        </div>
        <div className="inputs">
          <div>
            {" "}
            <label>MobileNumber</label>
          </div>
          <div>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          {Errors.phone}
        </div>
        <div className="inputs">
          <div>
            {" "}
            <label>EmailID</label>
          </div>
          <div>
            <input
              type="email"
              id="mail"
              name="mailid"
              placeholder="Enter Mailid"
              value={formValues.mailid}
              onChange={handleChange}
            />
          </div>
          {Errors.mailid}
        </div>
        <div className="inputs">
          <div>
            <label>AadharNumber</label>
          </div>
          <div>
            <input
              type="number"
              id="proof"
              name="idproof"
              placeholder="Enter your aadharnumber"
              value={formValues.idproof}
              onChange={handleChange}
            />
          </div>
          {Errors.idproof}
        </div>
        <div className="inputs">
          <div>
            <label>Address</label>
          </div>
          <div>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your permanent address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          {Errors.address}
        </div>
        <div className="inputs">
          <div>
            <label>City</label>
          </div>
          <div>
            <select name="city" value={formValues.city} onChange={handleChange}>
              <option value="">-- Please Select --</option>
              <option value="1">Chennai</option>
              <option value="2">Trichy</option>
              <option value="3">Coimbatore</option>
              <option value="4">Tirunelveli</option>
              <option value="5">Tuticorin</option>
            </select>
          </div>
          {Errors.city}
        </div>
        <div className="inputs">
          <div>
            <label>Pincode</label>
          </div>
          <div>
            <input
              type="number"
              id="pin"
              name="pincode"
              placeholder="Enter city pincode"
              value={formValues.pincode}
              onChange={handleChange}
            />
          </div>
          {Errors.pincode}
        </div>
        <div className="inputs">
          <div>
            <label>State</label>
          </div>
          <div>
            <select
              name="state"
              value={formValues.state}
              onChange={handleChange}
            >
              <option value="">-- Please Select --</option>
              <option value="1">TamilNadu</option>
              <option value="2">AndhraPradesh</option>
              <option value="3">Kerala</option>
              <option value="4">Karnataka</option>
            </select>
          </div>
          {Errors.state}
        </div>
        <div className="inputs">
          <div>
            <label>UploadPhoto</label>
          </div>
          <div>
            <input
              type="file"
              id="photo"
              name="uploads"
              value={formValues.uploads}
              onChange={handleChange}
            />
          </div>
          {Errors.uploads}
        </div>
        <div className="inputs">
          <div>
            <label>Area Preferred</label>
          </div>
          <div>
            <input
              type="text"
              id="area"
              name="preferredarea"
              value={formValues.preferredarea}
              onChange={handleChange}
            />
          </div>
          {Errors.preferredarea}
        </div>
        <div className="inputs">
          <div>
            <label>Do you have vehicle</label>
          </div>
          <div>
            <select
              name="vehicle"
              value={formValues.vehicle}
              onChange={handleChange}
            >
              <option value="">-- Please Select --</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          {Errors.vehicle}
        </div>
        <center>
          <button type="submit">Submit</button>
        </center>
      </form>
      {Object.keys(Errors).length === 0 && Submitting && (
        <span className="success-msg">Applied successfully</span>
      )}
    </div>
  );
};

export default Application;
