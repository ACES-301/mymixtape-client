import React from "react";
// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

class InputForm extends React.Component {
//   onSubmit = (event) => {
//     event.preventDefault();
//     const newPlaylist = {
//       title: event.target.formTitle.value,
//       description: event.target.formDescription.value,
//       status: event.target.formStatus.checked,
//       src: event.target.formUrl.value,
//     };
//     console.log(`Here is our NEW Book: `, newPlaylist);
//     // we need to pass this newCat back up to App.js to be sent to the server
//     // then the server is going to use Mongoose to create a new cat in the database
//     this.props.handleCreateBook(newPlaylist);
//   };

//   handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

  render() {
    return (
      <Container>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="formKeyword"
              label="Enter a Keyword"
              variant="outlined"
            />
            <FormControl fullWidth>
            <InputLabel id="formGenre">Select a Genre</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="formGenre"
            // value={genre}
            label="Genre"
            // onChange={handleChange}
            >
            <MenuItem value={'Pop'}>Pop</MenuItem>
            <MenuItem value={'Rap'}>Rap</MenuItem>
            <MenuItem value={'Dance'}>Dance</MenuItem>
            </Select>
            </FormControl>
          </Box>
      </Container>
    );
  }
}

export default InputForm;
