import React from "react";

const testimonials = [
  {
    name: "Niklasch1611",
    title: "Germany",
    quote: "I had no idea there were such amazing waterfalls so close to Ubud.  We had a blast.  Such a find!.",
    image: "/user3.jpg",
  },
  {
    name: "Johann_bal",
    title: "Germany",
    quote: "This tour transported us to a new world. Highly recommended!",
    image: "/user1.jpg",
  },
  {
    name: "Ruuno",
    title: "Germany",
    quote: "Best tour agency and guides I've ever met to explore waterfall in bali.",
    image: "/user2.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 font-title">Testimonials</h1>
        <h2 className="text-3xl font-bold mb-10">What Our Guests Are Saying</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card shadow-xl">
              <div className="card-body items-center text-center">
                <div className="avatar mb-4">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
                <p className="mt-3 italic">“{testimonial.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
