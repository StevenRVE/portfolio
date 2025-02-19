"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(result.message || "An error occurred");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setStatus("Failed to send the message.");
    }
  };

  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-2/3 w-full px-4 max-w-3xl">
      <div className="px-2 mx-auto">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                placeholder="Your"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
              placeholder="example@emailadres.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
              placeholder="How can I help you?"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            Send message
          </button>
        </form>
        {status && (
          <div className="mt-4 p-3 text-center text-sm bg-green-500 rounded-lg">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
