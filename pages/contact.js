export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-8 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-primary mb-10">Let's Chat</h2>
      <form action="https://formspree.io/f/movpabjo" method="POST" className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded-lg" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" required />
        <input type="tel" name="phone" placeholder="Your Phone Number" className="w-full border p-3 rounded-lg" />
        <input type="text" name="subject" placeholder="Subject" className="w-full border p-3 rounded-lg" />
        <textarea name="message" placeholder="Your Message" rows="5" className="w-full border p-3 rounded-lg" required></textarea>
        <button type="submit" className="bg-accent text-white font-semibold px-6 py-3 rounded-full w-full hover:bg-orange-500">Send Message</button>
      </form>
      <div className="text-center mt-6 text-gray-600">
        <p>Email: <a href="mailto:theuncoveredminds@gmail.com" className="text-accent">theuncoveredminds@gmail.com</a></p>
        <p>Phone: +91 9308507967</p>
      </div>
    </div>
  );
}