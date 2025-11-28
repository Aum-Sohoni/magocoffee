import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Menu, X, Calendar, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-mago-coffee.jpg";
import magoCoffeeImage from "@/assets/magoCoffee3.png";
import magoCoffee2Image from "@/assets/magocoffee2.png";
import magoCoffee1Image from "@/assets/magoCoffee.png";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState<"en" | "lv">("en");

  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        menu: "Menu",
        events: "Events",
        gallery: "Gallery",
        contact: "Contact"
      },
      hero: {
        title: "MagoCoffee",
        tagline: "Savor Riga's Boldest Brews",
        bookTable: "Book a Table",
        viewMenu: "View Menu"
      },
      about: {
        title: "Our Story",
        text: "At MagoCoffee, we're passionate about bringing the finest coffee experience to Riga's historic Old Town. We source locally-roasted Latvian beans and pair them with authentic Baltic-inspired pastries. Our cozy space features amber lighting, wooden beams, and orange pendant lights, creating the perfect atmosphere to enjoy your coffee."
      },
      menu: {
        title: "Our Menu",
        drinks: "Drinks",
        food: "Food"
      },
      contact: {
        title: "Visit Us",
        hours: "Opening Hours",
        hoursText: "Monday - Saturday: 8:00 AM - 8:00 PM"
      }
    },
    lv: {
      nav: {
        home: "Sākums",
        about: "Par Mums",
        menu: "Ēdienkarte",
        events: "Pasākumi",
        gallery: "Galerija",
        contact: "Kontakti"
      },
      hero: {
        title: "MagoCoffee",
        tagline: "Baudiet Rīgas Spēcīgākās Kafijas",
        bookTable: "Rezervēt Galdu",
        viewMenu: "Skatīt Ēdienkarti"
      },
      about: {
        title: "Mūsu Stāsts",
        text: "MagoCoffee mēs esam aizrautīgi ar labākās kafijas pieredzes sniegšanu Rīgas vēsturiskajā Vecpilsētā. Mēs iegādājamies vietēji grauzdētas latviešu pupiņas un savienojam tās ar autentiskiem Baltijas iedvesmotiem konditorejas izstrādājumiem."
      },
      menu: {
        title: "Mūsu Ēdienkarte",
        drinks: "Dzērieni",
        food: "Ēdieni"
      },
      contact: {
        title: "Apmeklējiet Mūs",
        hours: "Darba Laiks",
        hoursText: "Pirmdiena - Sestdiena: 8:00 - 20:00"
      }
    }
  };

  const t = translations[language];

  const menuItems = {
    drinks: [
      { name: "Signature Espresso", name_lv: "Īpašais Espresso", price: "€2.50", description: "Rich, bold, perfectly extracted" },
      { name: "Flat White", name_lv: "Flat White", price: "€3.50", description: "Silky microfoam meets espresso" },
      { name: "Cold Brew", name_lv: "Aukstā Kafija", price: "€3.75", description: "Smooth, steeped for 24 hours" },
      { name: "Herbal Tea", name_lv: "Zāļu Tēja", price: "€2.00", description: "Selection of Baltic herbs" }
    ],
    food: [
      { name: "Rye Bread Croissant", name_lv: "Rupjmaizes Kruasāns", price: "€3.50", description: "Traditional Latvian twist" },
      { name: "Seasonal Tart", name_lv: "Sezonas Kūka", price: "€4.00", description: "Made with local berries" }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-mago-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-mago-black/95 backdrop-blur-sm border-b border-mago-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="font-montserrat text-2xl font-bold text-mago-orange">MagoCoffee</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`font-open-sans text-sm transition-colors hover:text-mago-orange ${
                    activeSection === key ? "text-mago-orange" : "text-mago-white"
                  }`}
                >
                  {value}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === "en" ? "lv" : "en")}
                className="px-3 py-1 text-sm font-open-sans border border-mago-orange text-mago-orange hover:bg-mago-orange hover:text-mago-white transition-all rounded"
              >
                {language === "en" ? "🇱🇻 LV" : "🇬🇧 EN"}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-mago-white hover:text-mago-orange transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-mago-black border-t border-mago-orange/20 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`block w-full text-left font-open-sans py-2 transition-colors ${
                    activeSection === key ? "text-mago-orange" : "text-mago-white hover:text-mago-orange"
                  }`}
                >
                  {value}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === "en" ? "lv" : "en")}
                className="w-full px-3 py-2 text-sm font-open-sans border border-mago-orange text-mago-orange hover:bg-mago-orange hover:text-mago-white transition-all rounded"
              >
                {language === "en" ? "🇱🇻 Latviešu" : "🇬🇧 English"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-mago-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-montserrat text-6xl md:text-7xl lg:text-8xl font-bold text-mago-orange mb-6 drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="font-open-sans text-xl md:text-2xl text-mago-white mb-8 max-w-2xl mx-auto">
            {t.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-mago-orange hover:bg-mago-orange/90 text-mago-white font-open-sans font-semibold text-lg px-8 py-6 border-2 border-mago-orange hover:scale-105 transition-transform"
            >
              {t.hero.bookTable}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("menu")}
              className="bg-transparent border-2 border-mago-white text-mago-white hover:bg-mago-white hover:text-mago-black font-open-sans font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              {t.hero.viewMenu}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-mago-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-mago-black mb-6">
              {t.about.title}
            </h2>
            <p className="font-open-sans text-lg text-mago-black/80 leading-relaxed max-w-3xl mx-auto">
              {t.about.text}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-8 bg-mago-orange text-mago-white border-0 hover:scale-105 transition-transform">
              <div className="text-5xl font-montserrat font-bold mb-4">2018</div>
              <p className="font-open-sans text-lg">
                {language === "en" ? "Year Established" : "Dibināšanas Gads"}
              </p>
            </Card>
            <Card className="p-8 bg-mago-black text-mago-white border-2 border-mago-orange hover:scale-105 transition-transform">
              <div className="text-5xl font-montserrat font-bold mb-4 text-mago-orange">100%</div>
              <p className="font-open-sans text-lg">
                {language === "en" ? "Organic Beans" : "Bioloģiski Pupiņi"}
              </p>
            </Card>
            <Card className="p-8 bg-mago-orange text-mago-white border-0 hover:scale-105 transition-transform">
              <div className="text-5xl font-montserrat font-bold mb-4">5★</div>
              <p className="font-open-sans text-lg">
                {language === "en" ? "Customer Rated" : "Klientu Vērtējums"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 bg-mago-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-mago-black mb-4">
              {t.menu.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Drinks */}
            <div>
              <h3 className="font-montserrat text-3xl font-bold text-mago-orange mb-6 border-b-2 border-mago-orange pb-2">
                {t.menu.drinks}
              </h3>
              <div className="space-y-4">
                {menuItems.drinks.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-mago-white border border-mago-black/10 hover:border-mago-orange hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-montserrat text-xl font-semibold text-mago-black">
                          {language === "en" ? item.name : item.name_lv}
                        </h4>
                        <p className="font-open-sans text-sm text-mago-black/70 mt-1">{item.description}</p>
                      </div>
                      <span className="font-montserrat text-lg font-bold text-mago-orange">{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Food */}
            <div>
              <h3 className="font-montserrat text-3xl font-bold text-mago-orange mb-6 border-b-2 border-mago-orange pb-2">
                {t.menu.food}
              </h3>
              <div className="space-y-4">
                {menuItems.food.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-mago-white border border-mago-black/10 hover:border-mago-orange hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-montserrat text-xl font-semibold text-mago-black">
                          {language === "en" ? item.name : item.name_lv}
                        </h4>
                        <p className="font-open-sans text-sm text-mago-black/70 mt-1">{item.description}</p>
                      </div>
                      <span className="font-montserrat text-lg font-bold text-mago-orange">{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 bg-mago-black text-mago-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-mago-orange mb-4">
              {language === "en" ? "Live Events" : "Pasākumi"}
            </h2>
            <p className="font-open-sans text-lg text-mago-white/80">
              {language === "en" ? "Join us for live jazz nights and coffee tastings" : "Pievienojieties mūsu džeza vakariem un kafijas degustācijām"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-mago-white/5 border-2 border-mago-orange hover:bg-mago-white/10 transition-all">
              <Calendar className="w-12 h-12 text-mago-orange mb-4" />
              <h3 className="font-montserrat text-2xl font-bold text-mago-orange mb-2">
                {language === "en" ? "Jazz Nights" : "Džeza Vakari"}
              </h3>
              <p className="font-open-sans text-mago-white/80">
                {language === "en" ? "Every Friday 7-9 PM" : "Katru piektdienu 19:00-21:00"}
              </p>
            </Card>

            <Card className="p-8 bg-mago-white/5 border-2 border-mago-orange hover:bg-mago-white/10 transition-all">
              <Calendar className="w-12 h-12 text-mago-orange mb-4" />
              <h3 className="font-montserrat text-2xl font-bold text-mago-orange mb-2">
                {language === "en" ? "Coffee Tastings" : "Kafijas Degustācijas"}
              </h3>
              <p className="font-open-sans text-mago-white/80">
                {language === "en" ? "First Saturday of each month" : "Katra mēneša pirmā sestdiena"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-mago-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-mago-black mb-4">
              {language === "en" ? "Gallery" : "Galerija"}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[magoCoffeeImage, magoCoffee2Image, magoCoffee1Image, magoCoffeeImage, magoCoffee2Image, magoCoffee1Image].map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg border-4 border-mago-black hover:border-mago-orange transition-all hover:scale-105 cursor-pointer"
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-mago-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-mago-black mb-4">
              {t.contact.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-mago-white border-2 border-mago-black">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-mago-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold text-mago-black mb-2">
                      {language === "en" ? "Location" : "Adrese"}
                    </h3>
                    <p className="font-open-sans text-mago-black/80">
                      Augusta Deglava iela 69B<br />
                      Vidzemes priekšpilsēta<br />
                      Rīga, LV-1082
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-mago-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold text-mago-black mb-2">
                      {t.contact.hours}
                    </h3>
                    <p className="font-open-sans text-mago-black/80">
                      {t.contact.hoursText}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-mago-orange text-mago-white border-0">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-mago-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold mb-2">
                      {language === "en" ? "Phone" : "Tālrunis"}
                    </h3>
                    <p className="font-open-sans">+371 25701889</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-mago-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold mb-2">Email</h3>
                    <p className="font-open-sans">mago@coffee.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full bg-mago-white text-mago-orange hover:bg-mago-white/90 font-montserrat font-semibold border-2 border-mago-white hover:scale-105 transition-transform"
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/?api=1&query=Augusta+Deglava+iela+69B,+Vidzemes+priekšpilsēta,+Rīga,+LV-1082",
                        "_blank"
                      )
                    }
                  >
                    {language === "en" ? "Get Directions" : "Maršruts"}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mago-black text-mago-white py-12 px-4 border-t-4 border-mago-orange">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-montserrat text-3xl font-bold mb-4 text-mago-orange">MagoCoffee</h3>
              <p className="font-open-sans text-mago-white/80">
                {language === "en" ? "Crafting exceptional coffee experiences since 2018" : "Veidojam izcilu kafijas pieredzi kopš 2018"}
              </p>
            </div>

            <div>
              <h4 className="font-montserrat text-lg font-bold mb-4 text-mago-orange">
                {language === "en" ? "Quick Links" : "Ātrās Saites"}
              </h4>
              <div className="space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block font-open-sans text-mago-white/80 hover:text-mago-orange transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-montserrat text-lg font-bold mb-4 text-mago-orange">
                {language === "en" ? "Follow Us" : "Sekojiet Mums"}
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-mago-orange rounded-full flex items-center justify-center hover:bg-mago-orange/80 transition-all hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-mago-orange rounded-full flex items-center justify-center hover:bg-mago-orange/80 transition-all hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-mago-white/20 pt-8 text-center">
            <p className="font-open-sans text-sm text-mago-white/60">
              © 2025 MagoCoffee 🇱🇻 | {language === "en" ? "All rights reserved" : "Visas tiesības aizsargātas"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
