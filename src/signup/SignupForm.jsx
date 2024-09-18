import { useState } from "react";
import "./Signup.css";

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
            <label>Region:</label>
            <select
              id="region"
              value={selectedRegion}
              name="region"
              onChange={(e) => setSelectedRegion(e.target.value)}
              required
            >
              <>
                <option value="" disabled>
                  -- Select Region --
                </option>
                {REGION_LIST.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </>
            </select>
          </div>

          <div className="form-group">
            <label>Country:</label>
            <select
              id="country"
              value={selectedCountry}
              name="country"
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select Country --
              </option>
              {COUNTRY_LIST.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Name and Abbreviation fields */}
        <div className="input-row">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Abbreviation:</label>
            <input
              type="text"
              name="abbreviation"
              value={formData.abbreviation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email and Programs fields */}
        <div className="input-row">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* TODO: should be array of choices */}
          <div className="form-group">
            <label>Programs:</label>
            <select
              id="programs"
              value={selectedPrograms}
              name="programs"
              onChange={(e) => setSelectedPrograms(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select Program --
              </option>
              {PROGRAMS_LIST.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
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
            <label>Pics:</label>
            <input
              type="text"
              name="pics"
              value={formData.pics}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Year and City fields */}
        <div className="input-row">
          <div className="form-group">
            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>City:</label>
            <select
              id="city"
              value={selectedCity}
              name="city"
              onChange={(e) => setSelectedCity(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select City --
              </option>
              {CITY_LIST.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*  Category */}
        {/* TODO: should be a radio button */}
        <div className="input-row">
          <div className="form-group">
            <label>Category:</label>
            <select
              id="category"
              value={formData.category}
              name="category"
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                -- Select Category --
              </option>
              {CATEGORY_LIST.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit button */}
        <button className="submit-btn" type="submit">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
