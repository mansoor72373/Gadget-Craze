import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // Import EmailJS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Use EmailJS to send form data
    emailjs
      .send(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "YOUR_USER_ID" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setSubmitting(false);
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
  Contact <span className="text-blue-600">Us</span>
</h1>

          <p className="text-lg text-gray-700 mt-4">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:flex lg:justify-evenly gap-8">
         
          <div className="bg-white shadow-lg lg:w-[400px] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-6">
              Feel free to reach out to us through email or WhatsApp for any inquiries.
            </p>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-900 text-2xl mr-3" />
              <p className="lg:text-lg sm:text-sm text-gray-700">Email: mansoor72373@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl mr-3" />
              <p className="lg:text-lg sm:text-sm text-gray-700">WhatsApp: +923489833750</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white lg:w-[400px] shadow-lg rounded-lg p-8">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Name Field */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email Field */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Message Field */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-900 text-white py-3 px-6 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
