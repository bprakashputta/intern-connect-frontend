import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  search: yup
    .string("Enter your search query")
    .required("This field cannot be empty"),
});

const SearchInput = () => {
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      search: "",
    },

    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: "50%" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <input
          style={{ backgroundColor: "white", padding: "10px", flex: "1" }}
          fullWidth={true}
          id="search"
          name="search"
          placeholder="What are you looking for?"
          value={values.search}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.search && errors.search ? "error" : ""}
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            marginLeft: "10px",
          }}
          type="submit"
          disabled={isSubmitting}
        >
          Search
        </button>
      </div>
      <span style={{ color: "red" }}>{touched.search && errors.search}</span>
    </form>
  );
};

export default SearchInput;
