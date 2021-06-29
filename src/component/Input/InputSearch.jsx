import { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { OnChange } from "react-final-form-listeners";

let InputSearch = (props) => {
  const [Word, changeWord] = useState("");
  const onSubmit = (values) => {
    console.log("onSubmit");
  };
  const changeClear = () => {
    props.clearSearch(false);
  };

  useEffect(() => {
    props.changeSearchWords(Word);
  }, [Word]);
  return (
    <Form onSubmit={onSubmit}>
      {(props) => {
        return (
          <form onSubmit={props.handleSubmit}>
            <Field
              className="inputField"
              name="search"
              component="input"
              placeholder="Enter country name"
            ></Field>
            <OnChange name="search">
              {(value, previous) => {
                changeWord(value);
                changeClear();
              }}
            </OnChange>

            <div type="submit" style={{ width: 0, height: 0 }}></div>
          </form>
        );
      }}
    </Form>
  );
};

export default InputSearch;
