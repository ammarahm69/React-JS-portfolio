import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_ydfd6xz";
    const templateID = "template_ygx05oa";
    const userID = "Y769jMAaVELZ9UYUn";

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Ammar Ahmed",
      message: data.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again");
      }
    );
  };

  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Contact
      </h3>
      <div className="space-y-12 flex flex-col mt-32 px-4 sm:px-8">
        <h4 className="text-2xl sm:text-3xl font-semibold text-center">
          I have got just what you need <br />
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 justify-center">
            <FaPhoneAlt
              color="#F7AB0A"
              className="animate-pulse h-6 w-6 sm:h-7 sm:w-7"
            />
            <p className="text-base sm:text-lg">0312-2043539</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <FaEnvelope
              color="#F7AB0A"
              className="animate-pulse h-6 w-6 sm:h-7 sm:w-7"
            />
            <p className="text-base sm:text-lg">ammar69aa59@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <FaLocationDot
              color="#F7AB0A"
              className="animate-pulse h-6 w-6 sm:h-7 sm:w-7"
            />
            <p className="text-base sm:text-lg">
              Gulistan-E-Johar Karachi, Pakistan
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full sm:w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register("name", { required: true })}
              type="text"
              className="contactInput w-full sm:w-auto"
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Required</span>
            )}
            <input
              {...register("email", { required: true })}
              type="email"
              className="contactInput w-full sm:w-auto"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
          <input
            {...register("subject", { required: true })}
            type="text"
            className="contactInput"
            placeholder="Subject"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">Required</span>
          )}

          <textarea
            {...register("message", { required: true })}
            className="contactInput"
            placeholder="Message"
          />
          {errors.message && <span className="text-red-500">Required</span>}

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
