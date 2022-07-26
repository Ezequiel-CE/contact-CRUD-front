import { Form, Formik } from "formik";
import { MyInput } from "../shared/MyInputs";
import { useRouter } from "next/router";
import axios from "axios";
import ContactImg from "../shared/ContactImg";
import { formValidation } from "../../schemas/form-validation";

const ContactForm = () => {
  const router = useRouter();

  const submitContactHandler = async (values) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, values);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        mail: "",
        adress: "",
        description: "",
        imageUrl: "",
      }}
      validationSchema={formValidation}
      onSubmit={submitContactHandler}
    >
      {({ values }) => {
        return (
          <Form className="space-y-6">
            <ContactImg src={values.imageUrl} />
            <MyInput
              label="Image URL:"
              name="imageUrl"
              type="text"
              placeholder="contact image url"
            />
            <MyInput
              label="First name:"
              name="firstName"
              type="text"
              placeholder="First name"
            />
            <MyInput
              label="Last name:"
              name="lastName"
              type="text"
              placeholder="Last name"
            />
            <MyInput
              label="Phone number:"
              name="phoneNumber"
              type="text"
              placeholder="phone number"
            />
            <MyInput
              label="E-mail:"
              name="mail"
              type="text"
              placeholder="E-mail"
            />
            <MyInput
              label="Adress:"
              name="adress"
              type="text"
              placeholder="Adress"
            />
            <MyInput
              label="Description:"
              name="description"
              type="text"
              placeholder="Description"
            />
            <div className="flex justify-between ">
              <button
                className=" bg-blue-600 text-white  focus:ring-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                type="submit"
              >
                Yes, Im sure
              </button>
              <button
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
              >
                No, cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
