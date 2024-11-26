import React from "react";
import ContactForm from "../../components/one-time-use/contact-form/ContactForm";

const Contact: React.FC = () => {
  return (
    <main
      className=" mx-auto w-full md:max-w-full lg:max-w-5xl pt-12 pb-20
    xl:max-w-[79.5rem]
     2xl:max-w-12xl px-4 flex justify-center"
    >
      <section className="pt-10 rounded-md pb-10 md:w-3/4 lg:1/2 xl:1/2 max-w-1/2 w-full">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
