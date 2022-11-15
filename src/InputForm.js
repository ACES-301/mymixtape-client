import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

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
        <Form onSubmit={this.props.handleSearchPlaylist}>
          <Form.Group controlId='formKeyword'>
            <Form.Label>Discover New Music</Form.Label>
            <Form.Control
              type='text'
              placeholder="Keyword" 
              onChange={this.props.handleChangeKeyword}
              />
          </Form.Group>

          <Form.Group controlId='formGenre'>
            <Form.Select aria-label="Default select example"
            onChange={this.props.handleChangeGenre}
            >
              <option>Pick a Genre</option>
              <option value="alternative">Alternative</option>
              <option value="classical">Classical</option>
              <option value="dance">Dance</option>
              <option value="indie">Indie</option>
              <option value="pop">Pop</option>
              <option value="rap">Rap</option>
              <option value="rock">Rock</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" id="contentButton">Search!</Button>
        </Form>

        {/* <Box
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
            onChange={this.props.handleChangeKeyword}
          />
          <FormControl fullWidth>
            <InputLabel id="formGenre">Select a Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="formGenre"
              // value={genre}
              label="Genre"
              onChange={this.props.handleChangeGenre}
            >
              <MenuItem className="menuItem" value={'alternative'}>Alternative</MenuItem>
              <MenuItem className="menuItem" value={'classical'}>Classical</MenuItem>
              <MenuItem className="menuItem" value={'dance'}>Dance</MenuItem>
              <MenuItem className="menuItem" value={'indie'}>Indie</MenuItem>
              <MenuItem className="menuItem" value={'pop'}>Pop</MenuItem>
              <MenuItem className="menuItem" value={'rap'}>Rap</MenuItem>
              <MenuItem className="menuItem" value={'rock'}>Rock</MenuItem>
            </Select>

          </FormControl>
          <Button id="contentButton" type="submit" variant="contained" size='large'
            onClick={this.props.handleSearchPlaylist}
          >
            SEARCH
          </Button>
        </Box> */}

      </Container>
    );
  }
}

export default InputForm;
