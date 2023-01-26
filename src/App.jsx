import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

const initialValues = {
  pokemonName: ""
};

const App = () => {
  const [sprite, setSprite] = useState(null);
  const handleSubmit = async ({ pokemonName }) => {
    try {
      const { data } = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      await axios.post(`${config.api.baseURL}`);

      setSprite(data?.sprites?.front_default);
    } catch (err) {
      setSprite(null);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-4 p-4">
          <Field
            name="pokemonName"
            className="border-2 px-3 py-1.5"
            placeholder="Enter Pokemon name"
          />
          <button
            type="submit"
            className="text-white font-bold bg-blue-600 active:bg-blue-700 px-3 py-1.5"
          >
            SUBMIT
          </button>
        </Form>
      </Formik>
      {sprite && <img src={sprite} alt="Pokemon" />}
    </>
  );
};

export default App;
