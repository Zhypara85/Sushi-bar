import React, { useState } from 'react';
import {
  Utensils,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Star,
  ChevronRight,
  Menu as MenuIcon,
  X,
  ShoppingBag,
  Award,
  Sparkles,
  Heart,
  Check
} from 'lucide-react';

const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'nigiri', label: 'Nigiri & Sashimi' },
  { id: 'rolls', label: 'Specialty Rolls' },
  { id: 'sets', label: 'Chef Omakase Sets' },
  { id: 'beverages', label: 'Sake & Drinks' },
];

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Dragon Roll',
    category: 'rolls',
    price: '$18.50',
    description: 'Eel, cucumber, topped with avocado, tobiko, and unagi glaze.',
    popular: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=800',
    tags: ['Best Seller', 'Eel & Avocado']
  },
  {
    id: 2,
    name: 'Bluefin Tuna Nigiri',
    category: 'nigiri',
    price: '$14.00',
    description: 'Sustainably sourced premium Hon-Maguro with freshly grated authentic wasabi.',
    popular: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=800',
    tags: ['Chef Special', 'Fresh Raw']
  },
  {
    id: 3,
    name: 'Salmon Supreme Roll',
    category: 'rolls',
    price: '$16.80',
    description: 'Spicy salmon, cucumber inside, topped with seared salmon, ponzu, and scallions.',
    popular: false,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
    tags: ['Spicy', 'Seared']
  },
  {
    id: 4,
    name: 'Omakase Luxury Platter',
    category: 'sets',
    price: '$85.00',
    description: '12 pieces of chef selected seasonal nigiri, 1 specialty roll, and miso soup.',
    popular: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
    tags: ['Signature Set', 'Deluxe']
  },
  {
    id: 5,
    name: 'Hamachi Yellowtail Sashimi',
    category: 'nigiri',
    price: '$16.00',
    description: 'Thinly sliced yellowtail sashimi served with jalapeño and yuzu citrus soy sauce.',
    popular: false,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    tags: ['Gluten-Free', 'Citrus']
  },
  {
    id: 6,
    name: 'Junmai Daiginjo Sake',
    category: 'beverages',
    price: '$32.00',
    description: 'Premium handcrafted artisan Japanese sake with smooth floral notes (300ml).',
    popular: false,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Artisanal', 'Chilled']
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredMenu = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <span className="text-3xl p-2 bg-rose-600/20 rounded-2xl group-hover:bg-rose-600/30 transition">🍣</span>
              <div>
                <span className="text-2xl font-black tracking-wider text-white">OISHII</span>
                <span className="text-xs uppercase tracking-widest text-rose-500 block font-semibold">Sushi Bar & Lounge</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-slate-300 hover:text-rose-400 font-medium transition">Menu</a>
              <a href="#about" className="text-slate-300 hover:text-rose-400 font-medium transition">About Us</a>
              <a href="#experience" className="text-slate-300 hover:text-rose-400 font-medium transition">Craft</a>
              <a href="#contact" className="text-slate-300 hover:text-rose-400 font-medium transition">Contact</a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="relative p-2.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <a
                href="#contact"
                className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-rose-600/25 transition transform hover:-translate-y-0.5"
              >
                Reserve Table
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="relative p-2 text-slate-300 bg-slate-800 rounded-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-lg font-medium"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-lg font-medium"
            >
              About Us
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-lg font-medium"
            >
              Craft
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-lg font-medium"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-rose-600 text-white py-3 rounded-xl font-semibold mt-4"
            >
              Reserve Table
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 bg-slate-950">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-rose-950/60 border border-rose-800/40 text-rose-300 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Authentic Japanese Cuisine & Lounge</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Artisanal Freshness in Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-400">Masterpiece</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-xl">
              Experience modern elegance and centuries-old Japanese traditions. Prepared daily with wild-caught seafood delivered directly from Tsukiji Market.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition shadow-lg shadow-rose-600/30"
              >
                <span>Explore Menu</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition"
              >
                Our Story
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold text-white">4.9 ★</div>
                <div className="text-xs text-slate-400">2k+ Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Fresh Seafood</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-slate-400">Master Chefs</div>
              </div>
            </div>
          </div>

          {/* Hero Image / Display */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-rose-950/40">
              <img
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200"
                alt="Delicious Sushi Selection"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-rose-400 text-xs uppercase font-bold tracking-wider">Chef's Special</span>
                    <h3 className="text-xl font-bold text-white">Imperial Dragon & Sashimi Combo</h3>
                  </div>
                  <span className="text-xl font-black text-amber-400">$38.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-rose-500 font-semibold uppercase tracking-wider text-sm mb-2">Our Culinary Creations</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white">Explore Our Sushi Menu</h3>
            <p className="text-slate-400 mt-4">Each dish is crafted with precision, featuring the finest seasonal ingredients and artisanal Japanese sauces.</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-400 flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                    {item.popular && (
                      <div className="absolute top-3 left-3 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-rose-400 transition">{item.name}</h4>
                      <span className="text-xl font-black text-rose-500">{item.price}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1000"
                  alt="Sushi Chef Master"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl hidden sm:block max-w-xs shadow-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="text-white font-bold">Michelin Standard</div>
                    <div className="text-xs text-slate-400">Master Chef Kenji Sato</div>
                  </div>
                </div>
                <p className="text-slate-400 text-xs">Over 25 years of authentic Japanese sushi craft experience.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-rose-500 font-semibold uppercase tracking-wider text-sm">The Oishii Philosophy</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">Mastery, Tradition, and Modern Innovation</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                At Oishii Sushi Bar, we believe every piece of sushi is a harmony of temperature, texture, and flavor. We source directly from sustainable fisheries across the globe and prepare our rice with proprietary aged red vinegar (akazu).
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-rose-950/60 border border-rose-800/50 rounded-xl text-rose-400 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Daily Direct Fish Imports</h4>
                    <p className="text-slate-400 text-sm">Finest grade Bluefin tuna, King Salmon, and Uni delivered daily.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-rose-950/60 border border-rose-800/50 rounded-xl text-rose-400 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Traditional Edomae Technique</h4>
                    <p className="text-slate-400 text-sm">Authentic aging methods to bring out maximum umami profile.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Reservation Section */}
      <section id="contact" className="py-24 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info & Location */}
            <div className="space-y-8">
              <div>
                <h2 className="text-rose-500 font-semibold uppercase tracking-wider text-sm mb-2">Visit & Connect</h2>
                <h3 className="text-3xl sm:text-4xl font-black text-white">Reserve Your Dining Experience</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  Join us for an unforgettable omakase dining experience or order fresh handcrafted rolls online.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-800 text-rose-400 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-slate-400 text-sm">742 Sakura Boulevard, Downtown District, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-800 text-rose-400 rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Opening Hours</h4>
                    <p className="text-slate-400 text-sm">Tue - Sun: 5:00 PM - 11:00 PM</p>
                    <p className="text-slate-400 text-sm">Monday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-800 text-rose-400 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Reservations</h4>
                    <p className="text-slate-400 text-sm">+1 (555) 890-SUSH (7874)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Table Reservation</h4>
              {formSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 p-6 rounded-2xl text-center space-y-2">
                  <Check className="w-10 h-10 mx-auto text-emerald-400" />
                  <h5 className="font-bold text-lg text-white">Reservation Request Received!</h5>
                  <p className="text-sm">We will confirm your reservation via SMS within 15 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Kenji Sato"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-1">Date</label>
                      <input
                        type="date"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-1">Guests</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition">
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1">Special Requests</label>
                    <textarea
                      rows="3"
                      placeholder="Dietary restrictions, anniversary..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-rose-600/20"
                  >
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🍣</span>
            <span className="text-xl font-bold text-white tracking-wider">OISHII SUSHI BAR</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Oishii Sushi Lounge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-rose-400 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rose-400 transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rose-400 transition"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* Quick Order Slideover / Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="bg-slate-900 w-full max-w-md h-full p-6 flex flex-col justify-between border-l border-slate-800">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-rose-500" />
                  <span>Your Sushi Order</span>
                </h3>
                <button onClick={() => setOrderModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {cartItems.length === 0 ? (
                  <p className="text-slate-400 text-center py-12">Your cart is empty. Select items from the menu!</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div>
                        <h4 className="text-white font-semibold">{item.name}</h4>
                        <span className="text-rose-400 text-sm font-bold">{item.price}</span>
                      </div>
                      <button
                        onClick={() => setCartItems(prev => prev.filter((_, i) => i !== index))}
                        className="text-slate-500 hover:text-rose-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <button
                disabled={cartItems.length === 0}
                onClick={() => {
                  alert('Thank you! Your sushi order has been placed.');
                  setCartItems([]);
                  setOrderModalOpen(false);
                }}
                className="w-full bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition"
              >
                Checkout Order ({cartItems.length} items)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
