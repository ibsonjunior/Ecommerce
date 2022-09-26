import React from "react";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.productID) {
    errors.productID = "Obrigatório";
  }

  return errors;
};

const FormDelete = () => {
  const formik = useFormik({
    initialValues: {
      productID: "",
    },
    validate,
    onSubmit: (values) => {
      DeleteWine();
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="formAdm" onSubmit={formik.handleSubmit}>
      <label htmlFor="productID">Product ID</label>
      <input
        id="productID"
        name="productID"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productID}
      />
      {formik.touched.productID && formik.errors.productID ? (
        <div>{formik.errors.productID}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDelete;

function DeleteWine() {
  fetch(`http://52.53.186.98:9000/products/${productID.value}`, {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Headers": "*",
    },
  }).then((response) => {
    console.log(response);
  });
}