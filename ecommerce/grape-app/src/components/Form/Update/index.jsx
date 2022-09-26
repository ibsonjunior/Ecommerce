import React from "react";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.productId) {
    errors.productId = "Obrigatório";
  }

  if (!values.productName) {
    errors.productName = "Obrigatório";
  }

  if (!values.productDescription) {
    errors.productDescription = "Obrigatório";
  }

  if (!values.imageLink) {
    errors.imageLink = "Obrigatório";
  }

  if (!values.productPrice) {
    errors.productPrice = "Obrigatório e apenas NUMEROS";
  }

  if (!values.categoryId) {
    errors.categoryId = "Obrigatório e apenas NUMEROS";
  }

  return errors;
};

const FormUpdate = () => {
  const formik = useFormik({
    initialValues: {
      productId: "",
      productName: "",
      productDescription: "",
      imageLink: "",
      productPrice: "",
      categoryId: "",
    },
    validate,
    onSubmit: (values) => {
      UpdateWine();
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="formAdm" onSubmit={formik.handleSubmit}>
      <label htmlFor="productId">Product ID</label>
      <input
        id="productId"
        name="productId"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productId}
      />
      {formik.touched.productId && formik.errors.productId ? (
        <div>{formik.errors.productId}</div>
      ) : null}

      <label htmlFor="productName">Product Name</label>
      <input
        id="productName"
        name="productName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productName}
      />
      {formik.touched.productName && formik.errors.productName ? (
        <div>{formik.errors.productName}</div>
      ) : null}

      <label htmlFor="productDescription">Description</label>
      <input
        id="productDescription"
        name="productDescription"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productDescription}
      />
      {formik.touched.productDescription && formik.errors.productDescription ? (
        <div>{formik.errors.productDescription}</div>
      ) : null}

      <label htmlFor="imageLink">Link da Imagem</label>
      <input
        id="imageLink"
        name="imageLink"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.imageLink}
      />
      {formik.touched.imageLink && formik.errors.imageLink ? (
        <div>{formik.errors.imageLink}</div>
      ) : null}

      <label htmlFor="productPrice">Price</label>
      <input
        id="productPrice"
        name="productPrice"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productPrice}
      />
      {formik.touched.productPrice && formik.errors.productPrice ? (
        <div>{formik.errors.productPrice}</div>
      ) : null}

      <label htmlFor="categoryId">Category Id</label>
      <input
        id="categoryId"
        name="categoryId"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.categoryId}
      />
      {formik.touched.categoryId && formik.errors.categoryId ? (
        <div>{formik.errors.categoryId}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUpdate;

function UpdateWine() {
  fetch(`http://52.53.186.98:9000/products/${productId.value}`, {
    method: "PUT",
    headers: {
      "Accept": "*/* , application/json, text/plain",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      "title": `${productName.value}`,
      "description": `${productDescription.value}`,
      "image": `${imageLink.value}`,
      "price": `${productPrice.value}`,
      "categories": [
        {
          "id": `${categoryId.value}`,
        },
      ],
    }),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
}