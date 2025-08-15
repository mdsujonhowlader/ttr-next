"use client";

export default function ContactPage() {
  return (
    <section className=" relative py-32 px-4 bg-transparent">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold">
          Contact With Us
        </h1>
        <p className=" max-w-2xl">
          We’re here to help and answer any question you might have. Fill out
          the form and we’ll be in touch as soon as possible.
        </p>
      </div>

      {/* Contact Form + Map */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full rounded-md border border-primary bg-background px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-md border border-primary bg-background px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">
              Your Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="mt-1 w-full rounded-md border border-primary bg-background px-4 py-3 outline-none resize-none"
            ></textarea>
          </div>
          <button className="px-6 py-3 bg-button text-background rounded-md hover:bg-button/90 transition">
            Send Message
          </button>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116818.17319103966!2d90.42195359999997!3d23.798396199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1751821993479!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-36 h-36 rounded-full absolute top-1/4 left-2/3 bg-gradient-to-tl from-background via-[#87DE58] to-background blur-3xl -z-40"></div>
        <div className="w-36 h-36 rounded-full absolute top-1/4 left-2/3 bg-gradient-to-tl from-background via-[#87DE58] to-background blur-3xl -z-40"></div>
      </div>
    </section>
  );
}
