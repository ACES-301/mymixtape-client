import React from "react";
// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
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
              <MenuItem className="menuItem" value={'Alternative'}>Alternative</MenuItem>
              <MenuItem className="menuItem" value={'Classical'}>Classical</MenuItem>
              <MenuItem className="menuItem" value={'Dance'}>Dance</MenuItem>
              <MenuItem className="menuItem" value={'Indie'}>Indie</MenuItem>
              <MenuItem className="menuItem" value={'Pop'}>Pop</MenuItem>
              <MenuItem className="menuItem" value={'Rap'}>Rap</MenuItem>
              <MenuItem className="menuItem" value={'Rock'}>Rock</MenuItem>
            </Select>

          </FormControl>
            <Button id="contentButton" variant="contained" size='large' style={{backgroundColor: 'gray', height: '55px' }}
              onClick={() => {
                alert('clicked');
              }}
            >
              SEARCH
            </Button>
        </Box>
      </Container>
    );
  }
}

export default InputForm;
