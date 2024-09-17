import {
  Button,
  Card,
  Container,
  Grid2,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";

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
const SignupFormMUI = () => {
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
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <Container>
      <h1>Institution</h1>

      <Card sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          {/* Region and Country */}
          <Grid2 container spacing={2} mb={4}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="region"
                label="Region"
                value={formData.region}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="country"
                select
                label="Country"
                value={formData.country}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              >
                {COUNTRY_LIST.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
          </Grid2>

          {/* Name and Abbreviation */}
          <Grid2 container spacing={2} mb={4}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="name"
                label="Institution Name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="abbreviation"
                label="Abbreviation"
                value={formData.abbreviation}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>
          </Grid2>

          {/* Email and Programs */}
          <Grid2 container spacing={2} mb={4}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            {/* TODO: use multiple select here */}
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="programs"
                label="Programs"
                value={formData.programs}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>
          </Grid2>

          {/* Summary and pictures*/}
          <Grid2 container spacing={2} mb={4}>
            {/* TODO: use textArea */}
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="summary"
                label="Summary"
                value={formData.summary}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            {/* TODO: use input field */}
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="pictures"
                label="Pictures"
                value={formData.pictures}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>
          </Grid2>

          {/* Year & City*/}
          <Grid2 container spacing={2} mb={4}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="year"
                label="Year"
                type="number"
                value={formData.year}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                name="city"
                select
                label="City"
                value={formData.city}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              >
                {CITY_LIST.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
          </Grid2>

          {/* Category */}

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default SignupFormMUI;
