import React from "react";
import { Form, Field } from "react-final-form";
import MyTextInput from "./components/MyTextInput";
import NumberInput from "./components/NumberInput";
import SelectInput from "./components/SelectInput";
import TimeInput from "./components/TimeInput";
import { Button, Grid } from "@material-ui/core";
import SoupInput from "./components/SoupInput";
import FloatingInput from "./components/FloatingInput";
import axios from "axios";

interface Values {
  name: string;
  preparation_time: Date;
  type: "pizza" | "soup" | "sandwich";
  soup?: {
    spiciness_scale: number;
  };
  pizza?: {
    no_of_slices: number;
    diameter: number;
  };
  sandwich?: {
    slices_of_bread: number;
  };
}

const onSubmit = async (values: Values) => {
  const sendForm = async (data: Object) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const resp = await axios.post(
        "https://frosty-wood-6558.getsandbox.com:443/dishes",
        data,
        {
          headers: headers,
        }
      );
      alert(resp.data);
    } catch (err) {
      console.log(err, data);
    }
  };
  if (values.type === "pizza") {
    const specific = values.pizza;
    delete values.pizza;
    const data = { ...values, ...specific };
    sendForm(data);
  }
  if (values.type === "soup") {
    const specific = values.soup;
    delete values.soup;
    const data = { ...values, ...specific };
    sendForm(data);
  }
  if (values.type === "sandwich") {
    const specific = values.sandwich;
    delete values.sandwich;
    const data = { ...values, ...specific };
    sendForm(data);
  }
};

export const MyForm: React.FC = () => {
  return (
    <div>
      <h1>Order</h1>
      <h2>Place your order</h2>
      <p>Submit the form to create your dish</p>

      <Form
        onSubmit={onSubmit}
        initialValues={{ name: "", preparation_time: "00:00:00" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => {
          switch (values.type) {
            case "pizza":
              delete values.sandwich;
              delete values.soup;
              break;
            case "sandwich":
              delete values.soup;
              delete values.pizza;
              break;
            case "soup":
              delete values.pizza;
              delete values.sandwich;
              break;
            default:
              break;
          }

          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} sm={6}>
                  <label> Dish name</label>
                </Grid>
                <Field<string>
                  name="name"
                  component={MyTextInput}
                  placeholder="Dish Name"
                  validate={(val) => (val ? undefined : "Required")}
                />
              </Grid>

              <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} sm={6}>
                  <label className="form-label">Preparation time</label>
                </Grid>
                <Field<Date>
                  name="preparation_time"
                  component={TimeInput}
                  placeholder="Preparation Time"
                  validate={(val) => (val ? undefined : "Required")}
                />
              </Grid>
              <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} sm={6}>
                  <label className="form-label">Dish type</label>
                </Grid>
                <Field<string>
                  name="type"
                  component={SelectInput}
                  validate={(val) => (val ? undefined : "Required")}
                ></Field>
              </Grid>
              {values.type === "pizza" && (
                <div>
                  <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6}>
                      <label className="form-label"># of slices</label>
                    </Grid>
                    <Field<number>
                      name="pizza.no_of_slices"
                      component={NumberInput}
                      placeholder="# of slices"
                      validate={(val) => (val ? undefined : "Required")}
                    />
                  </Grid>
                  <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6}>
                      <label className="form-label">Diameter</label>
                    </Grid>
                    <Field<number>
                      name="pizza.diameter"
                      component={FloatingInput}
                      placeholder="diameter"
                      validate={(val) => (val ? undefined : "Required")}
                    />
                  </Grid>
                </div>
              )}
              {values.type === "soup" && (
                <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <label className="form-label">Spiciness scale</label>
                  </Grid>
                  <Field<number>
                    name="soup.spicyness_scale"
                    component={SoupInput}
                    placeholder="spicyness scale"
                    validate={(val) => (val ? undefined : "Required")}
                  />
                </Grid>
              )}
              {values.type === "sandwich" && (
                <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <label className="form-label">
                      Number of slices of bread
                    </label>
                  </Grid>
                  <Field<number>
                    name="sandwich.slices_of_bread"
                    component={NumberInput}
                    placeholder="Slices of bread"
                    validate={(val) => (val ? undefined : "Required")}
                  />
                </Grid>
              )}

              <div style={{ padding: "10px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting || pristine}
                  style={{ marginRight: "10px" }}
                >
                  Submit
                </Button>
              </div>
              {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
            </form>
          );
        }}
      />
    </div>
  );
};
