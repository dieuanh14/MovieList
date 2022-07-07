import React, { useState, useEffect } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import styles from "../css/App.css";
import { motion } from "framer-motion";
export default function ContactComponent() {
  const initialValues = { name: "", email: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  };
  useEffect( () => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  },
    [formError]);
  const validate = (value) => {
    const errors = {};
    const character=/[a-zA-Z]/;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (!value.name) {
      errors.name = " *Name is required !!!";
    }else if(!character.test(value.name)){
      errors.name = " *Name must be character only !!!";
    }
    // else(!value.name.length < 2){
    //   errors.name = " *Name must be more than 2 characters !!!";
    // }
    if (!value.email) {
      errors.email= "*Email is required !!!";
    }else if(!regex.test(value.email)){
      errors.email= "*Not a valid email !!!";

    }
    return errors;
  };
  return (
    <div className="container">
     <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
      <h1>Get in touch</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            value={formValue.name}
            name="name"
            id="name"
            type="text"
            placeholder="John"
            shadow={true}
            onChange={handleChange}
          />
        </div>
        <p style={{color:"red"}}>{formError.name}</p>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            value={formValue.email}
            name="email"
            id="email"
            type="email"
            placeholder="name@gmail.com"
            shadow={true}
            onChange={handleChange}
          />
        </div>
        <p style={{color:"red"}}> {formError.email} </p>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a message..."
            rows={4}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
      </motion.div>
    </div>
  );
}
