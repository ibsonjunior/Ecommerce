import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.productName) {
        errors.productName = 'Obrigatório';
    }
    // else if (values.productName.length > 15) {
    //     errors.productName = 'Must be 15 characters or less';
    // }

    if (!values.categoryName) {
        errors.categoryName = 'Obrigatório';
    }
    // else if (values.categoryName.length > 20) {
    //     errors.categoryName = 'Must be 20 characters or less';
    // }

    if (!values.imageLink) {
        errors.imageLink = 'Obrigatório';
    }


    if (!values.productPrice) {
        errors.productPrice = 'Obrigatório e apenas NUMEROS';
    }

    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    //   }

    return errors;
};

const Form = () => {
    const formik = useFormik({
        initialValues: {
            productName: '',
            categoryName: '',
            imageLink: '',
            productPrice: ','
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
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

            <label htmlFor="categoryName">Category Name</label>
            <input
                id="categoryName"
                name="categoryName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.categoryName}
            />
            {formik.touched.categoryName && formik.errors.categoryName ? (
                <div>{formik.errors.categoryName}</div>
            ) : null}


            <label htmlFor="imageLink">Image Link</label>
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
                value={formik.values.price}
            />
            {formik.touched.productPrice && formik.errors.productPrice ? (
                <div>{formik.errors.productPrice}</div>
            ) : null}

            {/* <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null} */}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form