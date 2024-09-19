/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Profile.css";

// Packages
const BASIC_PACKAGE = {
  name: "Basic",
  price: "GHS 150/Month",
  features: [
    "(Post with 24hours) for 30 Days",
    "Featured on Social Media",
    "Featured on Homepage",
    "Optional Shortlisting Service (GHS 300)",
  ],
};

const PREMIUM_PACKAGE = {
  name: "Premium",
  price: "GHS 289/Month",
  features: [
    "(Post with 24hours) for 60 Days",
    "Featured on Social Media",
    "Featured on Homepage",
    "Optional Shortlisting Service (GHS 300)",
  ],
};

const PLUS_PACKAGE = {
  name: "Plus",
  price: "GHS 400/Month",
  features: [
    "(Post with 24hours) for 120 Days",
    "Featured on Social Media",
    "Featured on Homepage",
    "Optional Shortlisting Service (GHS 750)",
  ],
};

const ADVANCED_PACKAGE = {
  name: "Advanced",
  price: "GHS 650/Month",
  features: [
    "(Post with 24hours) for 120 Days",
    "Featured on Social Media",
    "Featured on Homepage",
    "Optional Shortlisting Service (GHS 700 and GHS 200 Per Extra)",
  ],
};

const GRADES = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];

const PackageCard = ({ item }) => {
  return (
    <div className="package-card">
      <h3>{item.name}</h3>
      <h2>{item.price}</h2>
      <ul>
        {item.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Buy now</button>
    </div>
  );
};

const InfoCard = ({ label, value }) => {
  return (
    <div className="inst-info-item">
      <p>
        <strong>{label}</strong>
      </p>
      <p>{value}</p>
    </div>
  );
};

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    year: "",
    city: "",
  });

  return (
    <div className="inst-profile">
      <h2>Profile Page</h2>

      {/* Profile Info */}
      <div className="inst-info">
        {/* Name, Phone number, address, abbreviation */}
        <div className="inst-info-row">
          <InfoCard label="Institution Name" value="University of Ghana" />
          <InfoCard label="Phone Number" value="+233 241236547895" />
          <InfoCard label="Address" value="Legon, Accra-Ghana" />
          <InfoCard label="Abbreviation" value="UG" />
        </div>

        {/* Region, Institution Summary, City, Country */}
        <div className="inst-info-row">
          <InfoCard label="Region" value="Greater Accra" />
          <InfoCard
            label="Institution Summary"
            value="University of Ghana is the premier and the best university in Ghana"
          />
          <InfoCard label="City" value="Legon" />
          <InfoCard label="Country" value="Ghana" />
        </div>

        {/* Campus, Date of Establishment, Accreditation */}
        <div className="inst-info-row">
          <InfoCard label="Campus" value="City Campus" />
          <InfoCard
            label="Date of Establishment"
            value="23rd September, 1960"
          />
          <InfoCard label="Accreditation" value="AB47JFY48FM95KK" />
          <InfoCard label="" value="" />
        </div>
      </div>

      {/* Packages */}
      <div className="inst-package">
        <h2>Select Package</h2>
        <div className="packages">
          {/* <div className="package-card">
            <p>Basic package</p>
            <h2>GHS 50/Month</h2>
            <ul>
              <li>5 Users</li>
              <li>5GB Storage</li>
              <li>Basic Support</li>
            </ul>
            <button>Buy now</button>
          </div> */}
          {/* Basic */}
          <PackageCard item={BASIC_PACKAGE} />
          {/* Premium */}
          <PackageCard item={PREMIUM_PACKAGE} />
          {/* Plus */}
          <PackageCard item={PLUS_PACKAGE} />
          {/* Advanced */}
          <PackageCard item={ADVANCED_PACKAGE} />
        </div>
      </div>

      {/* Update Program/ Season */}
      <div className="inst-update-program">
        <h2>Update Program Category/ Season Available</h2>
        <form className="form-container">
          {/* Start & End date, Application Fee */}
          <div className="input-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="year"
                // value={formData.year}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="date"
                // value={formData.year}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Application Fee</label>
              <input
                type="number"
                name="year"
                // value={formData.year}
                // onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* file upload slots available */}
          <div className="input-row">
            <div className="form-group">
              <label>Upload file</label>
              <input
                type="input"
                name="year"
                // value={formData.year}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Slots Available</label>
              <input
                type="number"
                name="number"
                // value={formData.year}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-group"></div>
          </div>

          {/* Core Subjects */}
          <h3>
            Core Subjects (<i>Minimum grade for core subjects</i>)
          </h3>
          <div className="input-row">
            {/* Core Mathematics */}
            <div className="form-group">
              <label>Core Mathematics:</label>
              <select
                id="region"
                // value={selectedRegion}
                name="region"
                // onChange={(e) => setSelectedRegion(e.target.value)}
                required
              >
                <>
                  <option value="" disabled>
                    -- Select Region --
                  </option>
                  {GRADES.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </>
              </select>
            </div>

            {/* Integrated Science */}
            <div className="form-group">
              <label>Integrated Science</label>
              <select
                id="region"
                // value={selectedRegion}
                name="region"
                // onChange={(e) => setSelectedRegion(e.target.value)}
                required
              >
                <>
                  <option value="" disabled>
                    -- Select Region --
                  </option>
                  {GRADES.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </>
              </select>
            </div>

            {/* English */}
            <div className="form-group">
              <label>English</label>
              <select
                id="region"
                // value={selectedRegion}
                name="region"
                // onChange={(e) => setSelectedRegion(e.target.value)}
                required
              >
                <>
                  <option value="" disabled>
                    -- Select Region --
                  </option>
                  {GRADES.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </>
              </select>
            </div>

            {/* Social Studies */}
            <div className="form-group">
              <label>Social Studies:</label>
              <select
                id="region"
                // value={selectedRegion}
                name="region"
                // onChange={(e) => setSelectedRegion(e.target.value)}
                required
              >
                <>
                  <option value="" disabled>
                    -- Select Region --
                  </option>
                  {GRADES.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </>
              </select>
            </div>
          </div>

          <h3>
            Elective Subjects (<i>Minimum grade for all possible electives</i>)
          </h3>
          <div className="input-row">
            {/* Core Mathematics */}
            <div className="form-group">
              <label>Minimum grade</label>
              <select
                id="region"
                // value={selectedRegion}
                name="region"
                // onChange={(e) => setSelectedRegion(e.target.value)}
                required
              >
                <>
                  <option value="" disabled>
                    -- Select Region --
                  </option>
                  {GRADES.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </>
              </select>
            </div>

            <div className="form-group"></div>
            <div className="form-group"></div>
            <div className="form-group"></div>
          </div>

          <button className="submit-btn">Save and Continue</button>
        </form>
      </div>

      {/* Save and Continue button */}
    </div>
  );
};

export default ProfilePage;
