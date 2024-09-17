import { useState } from "react";
import "./Signup.css";

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

        <div className="container">
          {/* Left Column */}
          <div className="left-column">
            {/* Region Select field */}
            <div className="form-group">
              <label>Region:</label>
              <select
                id="region"
                value={selectedRegion}
                name="region"
                onChange={(e) => setSelectedRegion(e.target.value)}
                required
              >
                <option value="" disabled>
                  -- Select Region --
                </option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Central">Central</option>
                <option value="Volta">Volta</option>
                <option value="Northern">Northern</option>
                <option value="Bono">Bono</option>
                <option value="Ahafo">Ahafo</option>
                <option value="North East">North East</option>
              </select>
            </div>

            {/* Institution name */}
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

            {/* Email */}
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

            {/* Summary */}
            <div className="form-group">
              <label>Summary:</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Year Established */}
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

            {/* Category */}
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Country */}
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
                <option value="USA">USA</option>
                <option value="Ghana">Ghana</option>
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="Togo">Togo</option>
                <option value="Senegal">Senegal</option>
                <option value="Kenya">Kenya</option>
              </select>
            </div>

            {/* Abbreviation */}
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

            {/* Programs */}
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
                <option value="Biological Science">Biological Science</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Business Administration">
                  Business Administration
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Medicine">Medicine</option>
              </select>
            </div>

            {/* Pictures */}
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

            {/* City */}
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
                  -- Select Program --
                </option>
                <option value="Accra">Accra</option>
                <option value="Tema">Tema</option>
                <option value="Kumais">Kumais</option>
                <option value="Sunayani">Tema</option>
              </select>
            </div>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
