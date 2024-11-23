import React, { useState } from "react";
import ContactForm from "../../components/one-time-use/contact-form/ContactForm";
import FeedbackSection from "../../components/one-time-use/feedback/FeedbackSection";
import SendButton from "../../utils/buttons/SendButton";
import PostFeedbackForm from "../../components/one-time-use/feedback/PostFeedbackForm";

const Contact: React.FC = () => {
  const [mountSendFeedback, setMountSendFeedback] = useState<boolean>(false);
  const handleAddReview = () => {
    setMountSendFeedback(true);
  };
  return (
    <main
      className=" mx-auto w-full md:max-w-full lg:max-w-5xl pb-20 pt-20 
    xl:max-w-[79.5rem]
     2xl:max-w-12xl px-4"
    >
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-md rounded-md pb-10 ">
        <section>
          <FeedbackSection />
          <div className="flex justify-center mt-4">
            <SendButton
              buttonType="button"
              buttonText="Add Review"
              clickEventHandler={handleAddReview}
            />
          </div>
        </section>
        <ContactForm />
      </section>
      <PostFeedbackForm
        mountUnmountState={mountSendFeedback}
        mountUnmountHandler={setMountSendFeedback}
      />
    </main>
  );
};

export default Contact;
