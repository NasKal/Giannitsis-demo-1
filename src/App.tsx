import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Star, 
  Truck, 
  Package, 
  Heart, 
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      setHasScrolled(window.scrollY > 20);
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > sectionTop - window.innerHeight / 2 && 
            scrollY < sectionTop + sectionHeight - window.innerHeight / 2) {
          setActiveSection(section.id);
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-earth-100">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-display transition-colors duration-300 ${
                hasScrolled ? 'text-earth-500' : 'text-white'
              }`}
            >
              Γιαννίτσης
            </motion.span>
            
            <div className="hidden md:flex space-x-8">
              {['Σχετικά με εμάς', 'Προϊόντα', 'Αξιολογήσεις', 'Επικοινωνία'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(section)}
                  className={`text-base transition-all duration-300 capitalize ${
                    hasScrolled 
                      ? 'text-earth-500 hover:text-sage-500' 
                      : 'text-white hover:text-sage-200'
                  } ${activeSection === section ? 'border-b-2 border-sage-500' : ''}`}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                hasScrolled ? 'text-earth-500' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            {['about', 'products', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-4 text-base text-earth-500 capitalize hover:text-sage-500 transition-colors duration-300"
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      <section className="relative h-screen overflow-hidden pt-20 md:pt-0">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1569858241634-5aee6e47091a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative h-full flex items-center"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-5xl md:text-7xl font-display text-white mb-6 text-shadow leading-tight"
              >
                Δίνουμε Ζωή μέσα από την Ποιοτική Φροντίδα
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-xl text-white mb-8 max-w-xl leading-relaxed"
              >
                Ποιοτική διατροφή & κτηνιατρικές λύσεις για τα ζώα σας από το 1985
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="tel:+306978444094"
                  whileHover={{ scale: 1.05 }}
                  className="bg-sage-500 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 hover:bg-sage-600 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Καλέστε τώρα
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection('products')}
                  className="bg-white text-earth-500 px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 hover:bg-earth-100 shadow-lg hover:shadow-xl"
                >
                  Προϊόντα
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="scroll-section py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612225330653-4ea8f72a86e8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Farm animals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-sage-500 text-white p-8 rounded-full rotate-hover">
                <p className="text-2xl font-display">35+ Χρόνια</p>
                <p className="text-sm">Εμπειρίας</p>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-display text-earth-500"
              >
                Η Ιστορία μας
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-earth-400"
              >
                Από το 1985, δεν είμαστε απλώς προμηθευτές – είμαστε σύμμαχοι στην ευεξία των ζώων σας.
Η βαθιά μας γνώση στη διατροφή και την υγεία των ζώων μάς έχει καθιερώσει ως την αξιόπιστη επιλογή για κτηνοτρόφους και ιδιοκτήτες κατοικιδίων στη Βάρδα και πέρα από αυτή.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-earth-400"
              >
                Συνδυάζουμε την παραδοσιακή γνώση με τη σύγχρονη επιστήμη για να προσφέρουμε ζωοτροφές και κτηνιατρικές λύσεις κορυφαίας ποιότητας, εξασφαλίζοντας την ευημερία των ζώων σας υπό τη δική σας φροντίδα.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-section py-24 bg-earth-200 clip-diagonal">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display text-earth-500 text-center mb-16"
          >
            Προϊόντα
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Τροφές",
                items: ["Βοοηδεί", "Πρόβατα", "Πουλερικά", "Προσαρμοσμένα μείγματα"]
              },
              {
                icon: Heart,
                title: "Φροντίδα Κατοικιδίων",
                items: ["Σκυλοτροφές", "Γατοτροφές", "Συμπληρώματα", "Αξεσουάρ & Παιχνίδια"]
              },
              {
                icon: ShieldCheck,
                title: "Κτηνιατρική",
                items: ["Φάρμακα", "Εμβόλια", "Πρώτες Βοήθειες", "Υγεία"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-lg rotate-hover"
              >
                <category.icon className="w-12 h-12 text-sage-500 mb-6" />
                <h3 className="text-2xl font-display text-earth-500 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-earth-400 flex items-center">
                      <ChevronRight className="w-4 h-4 text-sage-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-section py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-sage-500 fill-current" />
              ))}
            </div>
            <h2 className="text-4xl font-display text-earth-500">Επιλογή εμπιστοσύνης για πολλούς</h2>
            <p className="text-xl text-earth-400">Πάνω από 500 ικανοποιημένοι πελάτες & συνεργάτες</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Η εξειδίκευση και τα ποιοτικά τους προϊόντα έχουν μεταμορφώσει την παραγωγικότητα της φάρμας μας.",
                author: "Γιώργος K.",
                role: "Κτηνοτρόφος"
              },
              {
                text: "Εξαιρετική εξυπηρέτηση και γνώση. Πάντα αξιόπιστοι για τις ανάγκες των κατοικιδίων μας.",
                author: "Μαρία Π.",
                role: "Ιδιοκτήτης Σκύλων"
              },
              {
                text: "Ο καλύτερος προμηθευτής ζωοτροφών στην περιοχή. Τον συνιστώ ανεπιφύλακτα.",
                author: "Ανδρέας Μ.",
                role: "Κτηνοτρόφος/Αγρότης"
              }
            ].map((review, index) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-earth-100 p-8 rounded-3xl rotate-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sage-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-earth-500 mb-4">
                  "{review.text}"
                </blockquote>
                <p className="font-semibold text-earth-500">{review.author}</p>
                <p className="text-earth-400">{review.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-section py-24 bg-earth-500 text-white clip-wave">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-display">Επισκευθείτε Μας</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Αγίου Νικολάου 42, Βάρδα 270 52
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <a href="tel:+306978444094" className="hover:text-sage-200 transition-colors">
                    +30 697 844 4094
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  Ανοιχτά έως τις 21:00
                </p>
              </div>
              <div className="h-[400px] rounded-3xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.0625566773697!2d21.365790894531454!3d38.030756566406524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e1c31609c932b%3A0xc05a827208f7767c!2sGiannitsis%20Nikolaos%20Animal%20Feed%20-%20Veterinary%20Medicines!5e0!3m2!1sen!2sgr!4v1742985409524!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <h2 className="text-4xl font-display mb-8">Επικοινωνήστε μαζί μας</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Ονοματεπώνυμο</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-white"
                    placeholder="Γράψτε το όνομά σας"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-white"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Μήνυμα</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-white"
                    placeholder="Γράψτε το μήνυμά σας"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="w-full bg-sage-500 text-white px-8 py-4 rounded-xl font-semibold"
                >
                  Αποστολή
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-earth-500 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-display mb-4">Γιαννίτσης Νικόλαος</h2>
            <p className="text-earth-200 mb-8">Ο αξιόπιστος συνεργάτης σας στη διατροφή και την υγεία των ζώων από το 1985</p>
            <p className="text-earth-200">&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
