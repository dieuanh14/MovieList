import React from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import styles from '../css/App.css';
export default function ContactComponent() {
  return (
    <div className="container">
      <h1>Get in touch</h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="John"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            required={true}
            shadow={true}
          />
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a message..."
            required={true}
            rows={4}
          />
        </div>
        
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
