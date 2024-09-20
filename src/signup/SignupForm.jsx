import { useState } from "react";
import "./Signup.css";
import SelectField from "../components/selectfield/SelectField";
import TextInput from "../components/input/TextInput";

const COUNTRY_LIST = [
  "Ghana",
  "Nigeria",
  "Togo",
  "Kenya",
  "South Africa",
  "Senegal",
];

const CITY_LIST = [
  "Accra",
  "Lagos",
  "Abuja",
  "Kumasi",
  "Cape Coast",
  "Koforidua",
  "Takoradi",
  "Tamale",
];

const REGION_LIST = [
  "Greater Accra",
  "Ashanti",
  "Central",
  "Volta",
  "Northern",
  "Bono",
  "Ahafo",
  "North East",
];

const PROGRAMS_LIST = [
  "Biological Science",
  "Physics",
  "Chemistry",
  "Business Administration",
  "Computer Science",
  "Software Engineering",
  "Medicine",
];

const CATEGORY_LIST = ["Public", "Private", "Hybrid"];

function SignupForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [formData, setFormData] = useState({
    region: "",
    country: "",
    name: "",
    abbreviation: "",
    email: "",
    summary: "",
    year: "",
    city: "",
    programs: [],
    pics: [],
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Country:", selectedCountry);
    console.log("Form submitted:", formData);
    setFormData({
      region: "",
      country: "",
      name: "",
      abbreviation: "",
      email: "",
      summary: "",
      year: "",
      city: "",
      programs: [],
      pics: [],
      category: "",
    });
  };

  return (
    <div className="app">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Institution</h2>

        {/* Region and Country fields */}
        <div className="input-row">
          <div className="form-group">
            <SelectField
              label="Region"
              id="region"
              name="region"
              value={selectedRegion}
              options={REGION_LIST}
              onChange={(e) => setSelectedRegion(e.target.value)}
            />
          </div>

          <div className="form-group">
            <SelectField
              label="Country"
              id="country"
              name="country"
              value={selectedCountry}
              options={COUNTRY_LIST}
              onChange={(e) => setSelectedCountry(e.target.value)}
            />
          </div>
        </div>

        {/* Name and Abbreviation fields */}
        <div className="input-row">
          <div className="form-group">
            <TextInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <TextInput
              label="Abbreviation"
              type="text"
              name="abbreviation"
              value={formData.abbreviation}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email and Programs fields */}
        <div className="input-row">
          <div className="form-group">
            <TextInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <SelectField
              label="Programs"
              id="programs"
              name="programs"
              value={selectedPrograms}
              options={PROGRAMS_LIST}
              onChange={(e) => setSelectedPrograms(e.target.value)}
            />
          </div>
        </div>

        {/* Summary and Pictures fields */}
        <div className="input-row">
          <div className="form-group">
            <label>Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* TODO: Should be an array of pictures */}
          <div className="form-group">
            <TextInput
              label="Pics"
              type="text"
              name="pics"
              value={formData.pics}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Year and City fields */}
        <div className="input-row">
          <div className="form-group">
            <TextInput
              label="Year"
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <SelectField
              label="City"
              id="city"
              name="city"
              value={selectedCity}
              options={CITY_LIST}
              onChange={(e) => setSelectedCity(e.target.value)}
            />
          </div>
        </div>

        {/*  Category */}
        {/* TODO: should be a radio button */}
        <div className="input-row">
          <div className="form-group">
            <SelectField
              label="Category"
              id="category"
              name="category"
              value={formData.category}
              options={CATEGORY_LIST}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit button */}
        <button className="submit-btn" type="submit">
          Save & Continue
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
