import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaWifi } from 'react-icons/fa';
import img1 from '../public/1000022994.jpg'; // 
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
               Organisateur de mariages et fêtes 
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
               الشاوش للأفراح 
              </h1>
              <p className="text-gray-900 text-lg mb-8 text-center">
              Transformons vos rêves en fêtes inoubliables. De la planification à la décoration, nous créons des moments magiques pour vos célébrations privées, mariages et événements spéciaux.        
            </p>
            <p className=" text-lg  text-primary font-bold leading-relaxed text-center">
          منظم حفلات وأعراس بشغف  حيث يلتقي الإبداع بالرقيّ وتُصنع أجمل الذكريات
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
      {/* Video Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Découvrez Nos Services
        </h2>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: '56.25%' }}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/services.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </section>


      


      {/* Contact Section */}
    <section className="py-16 bg-primary/5">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center text-primary mb-12">
      Connectez-Nous
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {/* Facebook */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="https://facebook.com/afrah.chawech"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-primary hover:text-secondary transition-colors duration-200"
      >
        <FaFacebook size={32} className="mb-2" />
        <span className="font-medium">Facebook</span>
      </motion.a>

      {/* Instagram */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="https://instagram.com/chawech.events"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-primary hover:text-secondary transition-colors duration-200"
      >
        <FaInstagram size={32} className="mb-2" />
        <span className="font-medium">Instagram</span>
      </motion.a>

      {/* Phone */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="tel:+21622922137"
        className="flex flex-col items-center text-primary hover:text-secondary transition-colors duration-200"
      >
        <FaPhone size={32} className="mb-2" />
        <span className="font-medium">Appelez-nous</span>
      </motion.a>

      {/* Location */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center text-primary cursor-default"
      >
        <FaMapMarkerAlt size={32} className="mb-2" />
        <span className="font-medium text-center px-2">Route Beni Khedech, Médenine</span>
      </motion.div>
    </div>
  </div>
 </section>

      {/* Footer */}
     <footer className="bg-primary/10 py-6">
  <div className="container mx-auto px-4 text-center text-primary flex justify-center items-center gap-2">
    <FaWifi className="text-primary w-4 h-4" />
    <p className="text-sm">
      2025 <a href="https://www.infinitytunisia.com/" className="underline hover:text-primary/70">Infinity NFC</a>. All rights reserved ©
    </p>
  </div>
</footer>


    </div>
  );
}

export default App;