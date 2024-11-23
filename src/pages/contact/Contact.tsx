import React from "react";
import ContactForm from "../../components/one-time-use/contact-form/ContactForm";
import FeedbackSection from "../../components/one-time-use/feedback/FeedbackSection";
import SendButton from "../../utils/buttons/SendButton";

const Contact: React.FC = () => {
  const handleAddReview = () => {};
  return (
    <main
      className=" mx-auto w-full md:max-w-full lg:max-w-5xl pb-16
    xl:max-w-[79.5rem]
     2xl:max-w-12xl px-4"
    >
      <section className="pt-40 grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-md">
        <ContactForm />
        <div>
          <FeedbackSection />
          <div className="flex justify-center mt-4">
            <SendButton
              buttonType="button"
              buttonText="Add Review"
              clickEventHandler={handleAddReview}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
