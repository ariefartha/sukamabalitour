import React, { useState, useRef } from "react";
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";

const BookingForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const basePrice = 450000;
  const totalPrice = basePrice * personCount;

  const handlePersonChange = (e) => {
    setPersonCount(parseInt(e.target.value));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_EMAILJS, import.meta.env.VITE_TEMPLATE_EMAILJS, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Booking sent successfully!');
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
      <title>Sukama Bali Tour - Booking</title>
      <meta name="description" content="Sukama Bali Tour booking form" />
      <link rel="canonical" href="/booking-form" />
    </Helmet>
    <section className="bg-base-200 py-10 px-4">
      <Toaster />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold font-title text-center mb-8">Book Your Tour</h2>

        <form ref={form} onSubmit={sendEmail} className="card bg-base-100 shadow-md p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered"
                required
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Phone (Including Country Code)</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+628xxxxxxxxxx"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Select Date</span>
              </label>
              <input
                type="date"
                name="tour_date"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Total Person</span>
            </label>
            <select
              className="select select-bordered"
              required
              value={personCount}
              name="total_person"
              onChange={handlePersonChange}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Time</span>
            </label>
            <select className="select select-bordered" name="time" required>
              <option>
                Morning Tour (start 8 am)
              </option>
              <option>Morning Tour (start 10 am)</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Round Trip Transportation (per group) From:
              </span>
            </label>
            <select className="select select-bordered" name="trip_from" required>
              <option >
                Ubud (free)
              </option>
              <option >Kuta/Seminyak/Canggu (300K)</option>
              <option >Nusa 2 (500K)</option>
              <option >Amed/Candidasa (700K)</option>
              <option >Other (We will contact you)</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Hotel Name or Place For Pickup</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="hotel_pickup"
              placeholder="Write hotel name..."
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Questions or Additional Notes</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Any specific requests or notes..."
              name="notes"
            ></textarea>
          </div>

          {/* Total Price Display */}
          <div className="text-lg font-semibold text-right">
            Total Price: IDR {totalPrice.toLocaleString("id-ID")}
          </div>
          <input type="hidden" name="total_payment" value={totalPrice} />
          <div className="form-control mt-2">
            <button type='submit' className="btn btn-primary w-full" disabled={loading}>
              {loading && <span className="loading loading-spinner"></span>}
              {loading ? 'Sending...' : 'Submit Booking'}
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default BookingForm;
