import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "Leerder Naam": "",
      "Jaar Groep": "",
      Oortreding: "",
      "Datum van Oortreding": "",
      Opvoerder: "",
      Sanksie: "",
      "Sanksie Datum": "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    // const Feb = "https://sheet.best/api/sheets/01bff1d8-f77c-4720-a2cd-f0e51fd14adf";
    const March = "https://sheet.best/api/sheets/2932ce9a-c562-4aa6-96e0-3206e1c436bb";
    // const April = "https://sheet.best/api/sheets/005a2872-8d4a-4310-9a2f-91bfc7c3a937";

    axios
      .post(
        `${March}`,
        this.state
      )
      .then((response) => {
        console.log(response);
      });
    e.target.reset();
  };

  render() {
    const {
      naam,
      groep,
      oortreding,
      datumVanOortreding,
      opvoerder,
      sanksie,
      sanksieDatum,
    } = this.state;

    return (
      <Container fluid className="container">
        <Header as="h2">WSOS Leerder Oortreding Register</Header>

        <Form
          className="form"
          onSubmit={this.submitHandler}
        >
          <Form.Field>
            <label>Naam van leerder</label>
            <input
              placeholder="Leerder se naam en van"
              type="text"
              name="Leerder Naam"
              value={naam}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Form.Field>
            <label>Jaar Groep</label>
            <input
              placeholder="Jaar groep"
              type="number"
              name="Jaar Groep"
              value={groep}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Form.Field>
            <label>Oortreding</label>
            <input
              placeholder="Oortreding"
              type="text"
              name="Oortreding"
              value={oortreding}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Form.Field>
            <label>Datum van Oortreding</label>
            <input
              type="date"
              name="Datum van Oortreding"
              value={datumVanOortreding}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Form.Field>
            <label>Opvoerder</label>
            <input
              placeholder="Opvoerder"
              type="text"
              name="Opvoerder"
              value={opvoerder}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Form.Field>
            <label>Sanksie</label>
            <input
              placeholder="Sanksie"
              type="text"
              name="Sanksie"
              value={sanksie}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Form.Field>
            <label>Sanksie Datum</label>
            <input
              type="date"
              name="Sanksie Datum"
              value={sanksieDatum}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default App;
