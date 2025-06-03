import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import img1 from '../public/1000022994.jpg'; // 
import React from 'react';
import img2 from '../public/1000023000.jpg'; // 
import img3 from '../public/1000023040.jpg'; // 
import logo from '../public/logoc.png'; // Logo image

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <img src={logo} alt="Chawech Events" className="h-16 md:h-20" />
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src= {img2}
              alt="Wedding Decoration"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
            />
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
               Votre mariage de rêve vous attend
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Créons ensemble la célébration parfaite pour votre grand jour. Des designs élégants, une exécution impeccable et des moments inoubliables.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Nos créations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[img2, img3, img1].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl"
              >
                <img src={img} alt="Wedding Event" className="w-full h-[300px] object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Connectez Nous</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://facebook.com/afrah.chawech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary"
            >
              <FaFacebook size={24} />
              <span>Facebook</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://instagram.com/chawech.events"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary"
            >
              <FaInstagram size={24} />
              <span>Instagram</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:+21622922137"
              className="flex items-center gap-2 text-primary hover:text-secondary"
            >
              <FaPhone size={24} />
              <span>Appelez-nous</span>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-primary"
            >
              <FaMapMarkerAlt size={24} />
              <span>Route beni khedech Medenine</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 py-6">
        <div className="container mx-auto px-4 text-center text-primary">
          <p>© 2025 Infinity . All rights reserved.</p>

        </div>
      </footer>
    </div>
  );
}

export default App;