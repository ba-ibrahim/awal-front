import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const [step, setStep] = useState(1); // Controls the current form step
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [fields, setFields] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const navigate = useNavigate();
  
  // Fetch field names from the backend
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/field/getFields`);
        setFields(response.data.fields || []);
      } catch (error) {
        console.error("Error fetching fields:", error);
        setErrorMessage("Could not load fields. Please try again.");
      }
    };

    fetchFields();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message
    try {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("year", year);
      formData.append("field_name", fieldName);
      if (profileImage) formData.append("profile_image", profileImage);

      await axios.post(`${apiUrl}/api/v1/auth/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("User registered successfully!")
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      // Set a descriptive error message
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "An error occurred while registering.");
      } else {
        setErrorMessage("An error occurred while registering the user. Please try again.");
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Year</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your year"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Field Name</label>
              <select
                value={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select your field
                </option>
                {fields.map((field, index) => (
                  <option key={index} value={field.field_name}>
                    {field.field_name} - {field.sub_field_name}
                  </option>
                ))}
              </select>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Upload Profile Image (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {profileImage && (
              <div className="mb-4">
                <p className="text-gray-600 mb-2">Selected Image:</p>
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-md object-cover"
                />
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          {step === 4 ? "Review & Submit" : "Register"}
        </h2>

        {errorMessage && (
          <p className="text-red-600 text-center mb-4">{errorMessage}</p> // Display error message
        )}

        <form onSubmit={handleRegister}>
          {renderStep()}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            )}
            {step === 4 && !profileImage && (
              <button
                type="button"
                onClick={handleRegister}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Skip
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
