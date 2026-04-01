import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Instagram, Clock, Sparkles, Scissors, Heart, ChevronRight, Award, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      category: "Klippningar",
      items: [
        { name: "Damklippning kort hår", time: "30 min", price: "550 kr" },
        { name: "Damklippning mellan långt", time: "35 min", price: "600 kr" },
        { name: "Damklippning långt hår", time: "40 min", price: "700 kr" },
        { name: "Herrklippning", time: "30 min", price: "400 kr" },
        { name: "Barnklippning 0-10 år", time: "25 min", price: "från 300 kr" },
      ],
    },
    {
      category: "Färgning",
      items: [
        { name: "Helfärgning", time: "120 min", price: "1 800 kr" },
        { name: "Helblondering", time: "120 min", price: "1 500 kr" },
        { name: "Balayage långt hår", time: "120 min", price: "2 500 kr" },
        { name: "Slingor långt hår + nyansering", time: "120 min", price: "2 500 kr" },
        { name: "Nyansering", time: "60 min", price: "800 kr" },
      ],
    },
    {
      category: "Behandlingar",
      items: [
        { name: "Keratinbehandling", time: "120 min", price: "3 000 kr" },
        { name: "Permanent långt hår", time: "120 min", price: "från 2 000 kr" },
        { name: "Rakpermanent långt hår", time: "120 min", price: "2 400 kr" },
        { name: "Permanent kort hår", time: "120 min", price: "från 1 700 kr" },
      ],
    },
    {
      category: "Styling",
      items: [
        { name: "Bruduppsättning", time: "120 min", price: "3 000 kr" },
        { name: "Tvätt & Fön långt hår", time: "40 min", price: "450 kr" },
        { name: "Styling", time: "25 min", price: "350 kr" },
        { name: "Curler", time: "60 min", price: "300 kr" },
      ],
    },
  ];

  const stylists = [
    {
      name: "Filiz Cömlek",
      specialty: "Färgning & Styling",
      reviews: 500,
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/professional-haircut-styling-Rwovqrix8SZNcEFFLy7bU8.webp",
    },
    {
      name: "Mackan",
      specialty: "Klippning & Styling",
      reviews: 232,
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/keratin-treatment-result-hUGtyUSCvNnxWnERGvhNjy.webp",
    },
  ];

  const gallery = [
    {
      title: "Elegant Blondering",
      category: "Färgning",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/blonde-highlights-before-after-Sn26YAmCm2EjAK3EFfakah.webp",
    },
    {
      title: "Klassisk Klippning",
      category: "Klippning",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/professional-haircut-styling-Rwovqrix8SZNcEFFLy7bU8.webp",
    },
    {
      title: "Keratinbehandling",
      category: "Behandling",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/keratin-treatment-result-hUGtyUSCvNnxWnERGvhNjy.webp",
    },
    {
      title: "Bruduppsättning",
      category: "Styling",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/hair-salon-hero-new-6WfvGSajhSqbNbEBGYymm6.webp",
    },
  ];

  const reviews = [
    {
      name: "Michelle R.",
      rating: 5,
      text: "Alltid lika nöjd när jag går till Filiz, min enda frisör jag kommer ha. Hon vet exakt vad jag vill ha utan att jag behöver förklara mig. Rekommenderar starkt!",
      stylist: "Filiz",
      date: "för 21 dagar sedan",
    },
    {
      name: "Linn M.",
      rating: 5,
      text: "Jag är otroligt nöjd med mitt besök! Filiz är professionell, kreativ och otroligt lyhörd! Kom därifrån med ett stort leende, strålande hår och en känsla av att ha blivit ompysslad på högsta nivå!",
      stylist: "Filiz",
      date: "för 22 dagar sedan",
    },
    {
      name: "Berfin E.",
      rating: 5,
      text: "Wow! Vilket magiskt jobb! Blev så nöjd av behandlingen😍",
      stylist: "Filiz",
      date: "för 22 dagar sedan",
    },
    {
      name: "Helena O.",
      rating: 5,
      text: "Du är en Pärla!",
      stylist: "Filiz",
      date: "för 12 dagar sedan",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Erfaren Personal",
      description: "Över 10 års erfarenhet inom frisörbranschen",
    },
    {
      icon: Sparkles,
      title: "Premium Produkter",
      description: "Vi använder endast högkvalitativa hårvårdsprodukter",
    },
    {
      icon: Users,
      title: "Personlig Konsultation",
      description: "Varje kund får en skräddarsydd behandling",
    },
    {
      icon: Zap,
      title: "Snabb Service",
      description: "Effektiv tidsplanering utan att offra kvalitet",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="text-2xl font-semibold text-foreground">
            <span className="font-serif italic">Salong HairByM</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-accent transition">
              HEM
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-accent transition">
              GALLERI
            </a>
            <a href="#stylists" className="text-sm font-medium hover:text-accent transition">
              PERSONAL
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition">
              TJÄNSTER
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-accent transition">
              RECENSIONER
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition">
              KONTAKT
            </a>
          </div>
          <a href="https://www.bokadirekt.se/places/salong-hairbym-23487" target="_blank" rel="noopener noreferrer">
            <Button className="btn-luxury-primary">BOKA TID</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/hero-salon-3N327QvWKTmvaDdnhebAeQ.webp')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container py-32 flex flex-col items-center justify-center text-center text-white">
          <p className="text-sm font-medium tracking-widest mb-4 opacity-90 animate-pulse">FRISÖRSALONG I JÄRFÄLLA</p>
          <h1 className="display-xl mb-6 animate-fade-in">Salong HairByM</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 opacity-95">
            Din lokala herr- och damfrisörsalong med lång erfarenhet och passion för ditt hår
          </p>
          <div className="flex gap-6">
            <a href="https://www.bokadirekt.se/places/salong-hairbym-23487" target="_blank" rel="noopener noreferrer">
              <Button className="btn-luxury-primary">BOKA DIN TID</Button>
            </a>
            <a href="#gallery">
              <Button className="btn-luxury-secondary">SE GALLERI</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-lg hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="heading-lg mb-2">{benefit.title}</h3>
                  <p className="body-sm text-foreground/70">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest mb-4">VÅRT ARBETE</p>
            <h2 className="display-md mb-4">Bildgalleri</h2>
            <div className="divider-gold mx-auto w-24 mb-8"></div>
            <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
              Se exempel på vår professionella arbete från nöjda kunder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex flex-col justify-end p-6 text-white">
                  <p className="text-sm font-medium text-accent mb-1">{item.category}</p>
                  <h3 className="heading-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists Section */}
      <section id="stylists" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest mb-4">MÖTE VÅRA FRISÖRER</p>
            <h2 className="display-md mb-4">Erfaren Personal</h2>
            <div className="divider-gold mx-auto w-24"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {stylists.map((stylist, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6 h-80 shadow-lg">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="heading-xl mb-2">{stylist.name}</h3>
                      <p className="text-sm opacity-90">{stylist.specialty}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(stylist.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/60">({stylist.reviews} recensioner)</p>
                </div>
                <a href="https://www.bokadirekt.se/places/salong-hairbym-23487" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-luxury-secondary">Boka tid med {stylist.name.split(" ")[0]}</Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest mb-4">VAD VI ERBJUDER</p>
            <h2 className="display-md mb-4">Tjänster & Priser</h2>
            <div className="divider-gold mx-auto w-24 mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((category, idx) => (
              <div key={idx} className="border border-border rounded-lg p-8 hover:shadow-lg transition bg-white">
                <h3 className="heading-lg mb-6 flex items-center gap-2">
                  <Scissors className="w-5 h-5 text-accent" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-start pb-3 border-b border-border/50 last:border-0 hover:bg-accent/5 p-2 rounded transition">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-foreground/60">{item.time}</p>
                      </div>
                      <p className="font-semibold text-accent text-lg">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.bokadirekt.se/places/salong-hairbym-23487" target="_blank" rel="noopener noreferrer">
              <Button className="btn-luxury-primary">BOKA TID NU</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest mb-4">VAD VÅRA KUNDER SÄGER</p>
            <h2 className="display-md mb-4">Recensioner</h2>
            <div className="divider-gold mx-auto w-24 mb-8"></div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground">4.8 av 5</p>
              <p className="text-foreground/60">(732 betyg)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="body-base text-foreground/80 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-accent">till {review.stylist}</p>
                </div>
                <p className="text-xs text-foreground/50 mt-2">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.bokadirekt.se/places/salong-hairbym-23487" target="_blank" rel="noopener noreferrer">
              <Button className="btn-luxury-secondary">Se alla recensioner på Bokadirekt</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">ÖPPETTIDER</p>
              <h2 className="heading-xl mb-8">När vi har öppet</h2>
              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="space-y-4">
                  {[
                    { day: "Måndag", time: "10:00 – 18:00" },
                    { day: "Tisdag", time: "10:00 – 18:00" },
                    { day: "Onsdag", time: "10:00 – 18:00" },
                    { day: "Torsdag", time: "10:00 – 18:00" },
                    { day: "Fredag", time: "10:00 – 18:00" },
                    { day: "Lördag", time: "10:00 – 14:00" },
                    { day: "Söndag", time: "Stängt", closed: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                      <p className="font-medium text-foreground">{item.day}</p>
                      <p className={item.closed ? "text-foreground/50" : "font-semibold text-accent"}>{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-accent font-medium tracking-widest mb-4">HITTA OSS</p>
              <h2 className="heading-xl mb-8">Kontakt & Plats</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ring oss</p>
                    <a href="tel:087616171" className="text-accent hover:underline">
                      087616171
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Besök oss</p>
                    <p className="text-foreground/70">Barkarbyvägen 77A, 177 47 Järfälla</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Följ oss</p>
                    <a href="https://instagram.com/hairbym" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      @hairbym
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-xl mb-4">Hitta oss på kartan</h2>
            <p className="body-lg text-foreground/70">Nära Barkaby station i Järfälla</p>
          </div>

          <div className="bg-border rounded-lg overflow-hidden h-96 shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.8849999999998!2d17.9246!3d59.5078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7e5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sBarkarbyv%C3%A4gen%2077A%2C%20177%2047%20J%C3%A4rf%C3%A4lla!5e0!3m2!1ssv!2sse!4v1712079600"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/hair-coloring-treatment-Kj9QDhDXeTn4srpiAXFEDB.webp')",
          }}
        ></div>
        <div className="relative container text-center">
          <h2 className="display-lg mb-6">Redo för en förändring?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-12 opacity-90">
            Boka din tid idag och låt oss skapa din drömfrisyr. Vi ser fram emot att välkomna dig!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="https://www.bokadirekt.se/places/salong-hairbym-23487" target="_blank" rel="noopener noreferrer">
              <Button className="btn-luxury-primary bg-accent text-foreground hover:opacity-90">BOKA TID</Button>
            </a>
            <a href="tel:087616171">
              <Button className="btn-luxury-secondary border-white text-white hover:bg-white hover:text-foreground">
                RING OSS
              </Button>
            </a>
            <a href="https://wa.me/46876161710" target="_blank" rel="noopener noreferrer">
              <Button className="btn-luxury-secondary border-white text-white hover:bg-white hover:text-foreground">
                WHATSAPP
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="heading-lg mb-4">Salong HairByM</h4>
              <p className="body-sm text-white/70">Din lokala frisörsalong i Järfälla med passion för ditt hår. 4.8 stjärnor från 732 nöjda kunder.</p>
            </div>
            <div>
              <h4 className="heading-lg mb-4">Snabblänkar</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="body-sm text-white/70 hover:text-white transition">
                    Hem
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="body-sm text-white/70 hover:text-white transition">
                    Galleri
                  </a>
                </li>
                <li>
                  <a href="#stylists" className="body-sm text-white/70 hover:text-white transition">
                    Personal
                  </a>
                </li>
                <li>
                  <a href="#services" className="body-sm text-white/70 hover:text-white transition">
                    Tjänster
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="heading-lg mb-4">Kontakt</h4>
              <p className="body-sm text-white/70 mb-2">
                <a href="tel:087616171" className="hover:text-white transition">
                  087616171
                </a>
              </p>
              <p className="body-sm text-white/70">tvillingarna_c@hotmail.com</p>
            </div>
            <div>
              <h4 className="heading-lg mb-4">Följ oss</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/hairbym" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="body-sm text-white/50">© 2026 Salong HairByM. Alla rättigheter förbehållna. | Designad för att konvertera kunder</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
