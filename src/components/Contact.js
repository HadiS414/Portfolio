import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "V3qGvHiNoD9BuAP6L";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (    
        <div id="contact" className="contact">
            <div className="text-center">
                <h1> Contact Me </h1>
                <p> Please fill in the blanks to send a message and I'll contact you as soon as I can.</p>
                <span className="success-message"> {successMessage} </span>
            </div>
            <div className="contianer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                {...register("name", 
                                {
                                    required: true,
                                    maxLength: 20,
                                })}
                                />
                                <div className="line"></div>
                            </div>
                             <span className="error-message">
                                {errors.name && "Please enter your name"}
                            </span> 
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                {...register("phone", 
                                {
                                    required: true,
                                })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && "Please add your phone number"}
                            </span> 
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                {...register("email", 
                                {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-@]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    }
                                })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && "Invalid Email"}
                            </span> 
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                {...register("subject", 
                                {
                                    required: true,
                                })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && "Please add a subject"}
                            </span> 
                        </div>
                        <div className="col">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Message"
                                name="description"
                                {...register("description", 
                                {
                                    required: true,
                                })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && "Please write a message..."}
                            </span> 
                            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact