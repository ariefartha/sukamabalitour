import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message.');
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Sukama Bali Tour - Contact</title>
        <meta name="description" content="Sukama Bali Tour Contact Form" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="relative">
        <Toaster />
        <section className="py-10 px-4 bg-base-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Kiri: Informasi Kontak */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-title">Feel Free to Reach Us Anytime</h2>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p>Jln. Gunung Agung, Br. Gitgit, Bakbakan, Gianyar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdEmail className="text-xl mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>sukamabalitour@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdPhone className="text-xl mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+6287772240721</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdAccessTime className="text-xl mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p>Mon – Sat: 08.00 – 17.00</p>
                </div>
              </div>
            </div>

            {/* Kanan: Form Kontak */}
            <form ref={form} onSubmit={sendEmail} className="card bg-base-100 shadow-xl p-6 space-y-4">
              <h2 className="text-3xl font-title font-bold text-center mb-6">Contact</h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="+6287772240721"
                  className="input input-bordered"
                  name="phone"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Write your message..."
                  rows="5"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-4">
                <button type='submit' className="btn btn-primary w-full" disabled={loading}>
                  {loading && <span className="loading loading-spinner"></span>}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
