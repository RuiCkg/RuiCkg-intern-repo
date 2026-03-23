# Form Handling Reflection

## How does Formik simplify form management?

Formik simplifies form management by handling form state, input changes, and submission logic in a single structure. It reduces the need for multiple useState hooks and manual event handling, making the code cleaner and easier to maintain.

## What are the benefits of using Formik's validation instead of writing validation logic manually?

Formik combined with Yup allows developers to define validation rules in a structured and reusable way. It avoids repetitive if/else statements and makes validation logic more readable, scalable, and easier to maintain.

## Implementation Evidence

### Code Snippet

```jsx
const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
  },
  validationSchema: Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  onSubmit: (values) => {
    console.log(values);
  },
});
```

### GitHub Reference
[EffectExample.js](https://github.com/RuiCkg/RuiCkg-intern-repo/blob/main/Milestone_5_React%20Fundamentals/react-practice-formik/src/FormExample.js)

![alt text](images/formik.png)