import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import { destinationsContext } from "../../context/DistinationsContextProvider";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const {destinationsArr} = useContext(destinationsContext)
  const [searchInput, setSearchInput] = useState("");
  const countries = [...destinationsArr];
  // const countries = [
  //   { name: "Belgium", continent: "Europe" },
  //   { name: "India", continent: "Asia" },
  //   { name: "Bolivia", continent: "South America" },
  //   { name: "Ghana", continent: "Africa" },
  //   { name: "Japan", continent: "Asia" },
  //   { name: "Canada", continent: "North America" },
  //   { name: "New Zealand", continent: "Australasia" },
  //   { name: "Italy", continent: "Europe" },
  //   { name: "South Africa", continent: "Africa" },
  //   { name: "China", continent: "Asia" },
  //   { name: "Paraguay", continent: "South America" },
  //   { name: "Usa", continent: "North America" },
  //   { name: "France", continent: "Europe" },
  //   { name: "Botswana", continent: "Africa" },
  //   { name: "Spain", continent: "Europe" },
  //   { name: "Senegal", continent: "Africa" },
  //   { name: "Brazil", continent: "South America" },
  //   { name: "Denmark", continent: "Europe" },
  //   { name: "Mexico", continent: "South America" },
  //   { name: "Australia", continent: "Australasia" },
  //   { name: "Tanzania", continent: "Africa" },
  //   { name: "Bangladesh", continent: "Asia" },
  //   { name: "Portugal", continent: "Europe" },
  //   { name: "Pakistan", continent: "Asia" },
  // ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let filteredCountries=[]
 if(searchInput.length > 0){
    filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchInput.toLowerCase());
    });
 }

useEffect(()=>{
  console.log(filteredCountries);
},[])
  return (
    <div className="container d-flex justify-content-center  vh-10 py-3  ">
      <div>
      
          <TextField
            onChange={handleChange}
            value={searchInput}
            id="input-with-icon-textfield"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        <table className="table">
          <tbody>
            {filteredCountries.map((country, index) => (
              <tr key={index}>
               <Link to={`/destinations/${country.id}`} ><td>{country.name}</td></Link>
                {/* <td>{country.continent}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
