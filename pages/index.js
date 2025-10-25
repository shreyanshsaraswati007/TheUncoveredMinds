import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <nav className="flex justify-between items-center px-8 py-4 bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="The Uncovered Minds" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-heading font-bold">The Uncovered Minds</h1>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Let's Chat</Link>
        </div>
      </nav>

      <section className="relative bg-[url('https://images.unsplash.com/photo-1498579150354-977475b7ea0b')] bg-cover bg-center h-[80vh] text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 px-6">
          <h2 className="text-5xl font-heading font-bold mb-4">Feeding Hope, Fueling Futures</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">A youth-led initiative by Shreyansh Saraswati, dedicated to eradicating hunger and empowering minds through compassion and technology.</p>
          <a href="/contact" className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-500">Join Us</a>
        </motion.div>
      </section>

      <section className="py-20 px-8 md:px-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold text-primary mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          <b>The Uncovered Minds</b> is a non-profit organization founded by <b>Shreyansh Saraswati</b>, working to create a hunger-free and educated India. Through innovative technology and community-driven action, we aim to empower individuals and bring sustainable change.
        </p>
      </section>

      <footer className="py-6 bg-primary text-center text-white text-sm">
        © 2025 The Uncovered Minds — Founded by Shreyansh Saraswati
      </footer>
    </div>
  );
}