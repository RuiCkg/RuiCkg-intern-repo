import { useFormik } from "formik";
import * as Yup from "yup";

function FormExample() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div>
      <h2>Formik Form</h2>

      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <p>{formik.errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormExample;