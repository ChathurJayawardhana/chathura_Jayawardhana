import React, { useRef, useState } from 'react';
 import emailjs from '@emailjs/browser';

const ContactmeLayout = () => {
  const form = useRef();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtls1ij', 'template_61s9br9', form.current, '0EtHms-6Yi5rAQ7PL')
      .then((result) => {
        console.log(result.text);
        setShowSnackbar(true);

        // Auto-hide the snackbar after 3000 milliseconds (3 seconds)
        setTimeout(() => {
          setShowSnackbar(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
   
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          
         
        </div>

        <div className="flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>

            <input
              type="submit"
              value="send"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            />
          </form>
        </div>

        {showSnackbar && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md">
            <p className="text-sm">Submitted successfully!</p>
          </div>
        )}
      </div>
   
  );
};

export default ContactmeLayout;
