import React from "react";
import ContactForm from "../../components/one-time-use/contact-form/ContactForm";
import FeedbackSection from "../../components/one-time-use/feedback/FeedbackSection";

const Contact: React.FC = () => {
  return (
    <main
      className=" mx-auto w-full md:max-w-full lg:max-w-5xl pb-16
    xl:max-w-[78rem]
     2xl:max-w-12xl px-4"
    >
      <section className="pt-40 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ContactForm />
        <FeedbackSection />
      </section>
    </main>
  );
};

export default Contact;
