import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Instagram, Clock, Sparkles, Scissors } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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

  const reviews = [
    {
      name: "Michelle R.",
      rating: 5,
      text: "Alltid lika nöjd när jag går till Filiz, min enda frisör jag kommer ha. Hon vet exakt vad jag vill ha utan att jag behöver förklara mig. Rekommenderar starkt!",
      stylist: "Filiz",
    },
    {
      name: "Linn M.",
      rating: 5,
      text: "Jag är otroligt nöjd med mitt besök! Filiz är professionell, kreativ och otroligt lyhörd! Kom därifrån med ett stort leende, strålande hår och en känsla av att ha blivit ompysslad på högsta nivå!",
      stylist: "Filiz",
    },
    {
      name: "Berfin E.",
      rating: 5,
      text: "Wow! Vilket magiskt jobb! Blev så nöjd av behandlingen😍",
      stylist: "Filiz",
    },
    {
      name: "Helena O.",
      rating: 5,
      text: "Du är en Pärla!",
      stylist: "Filiz",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="text-2xl font-semibold text-foreground">
            <span className="font-serif italic">Salong HairByM</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-accent transition">
              HEM
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition">
              TJÄNSTER
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition">
              OM OSS
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-accent transition">
              RECENSIONER
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition">
              KONTAKT
            </a>
          </div>
          <Button className="btn-luxury-primary">BOKA TID</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/hero-salon-3N327QvWKTmvaDdnhebAeQ.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container py-32 flex flex-col items-center justify-center text-center text-white">
          <p className="text-sm font-medium tracking-widest mb-4 opacity-90">FRISÖRSALONG I JÄRFÄLLA</p>
          <h1 className="display-xl mb-6">Salong HairByM</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 opacity-95">
            Din lokala herr- och damfrisörsalong med lång erfarenhet och passion för ditt hår
          </p>
          <div className="flex gap-6">
            <Button className="btn-luxury-primary">BOKA DIN TID</Button>
            <Button className="btn-luxury-secondary">VÅRA TJÄNSTER</Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium tracking-widest mb-4">VÄLKOMMEN</p>
          <h2 className="display-md mb-8">Till Salong HairByM</h2>
          <div className="divider-gold mb-8"></div>
          <p className="body-lg text-foreground/80 mb-6">
            På Jaktplan 7 i Järfälla, nära Barkaby station, hittar du din lokala herr- och damfrisörsalong. Här kan du vara säker på att bli bemött med ett leende och bli omhändertagen på bästa sätt.
          </p>
          <p className="body-lg text-foreground/80">
            Med lång erfarenhet och god kunskap inom allt inom hårvård kan du räkna med ett fantastiskt resultat – oavsett om du bokar klippning, färgning, slingor, permanent eller keratinbehandling.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest mb-4">VAD VI ERBJUDER</p>
            <h2 className="display-md mb-4">Våra Tjänster</h2>
            <div className="divider-gold mx-auto w-24 mb-8"></div>
            <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
              Vi erbjuder ett omfattande utbud av professionella hårvårdstjänster för alla åldrar och hårtyper.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((category, idx) => (
              <div key={idx} className="border border-border rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="heading-lg mb-6 flex items-center gap-2">
                  <Scissors className="w-5 h-5 text-accent" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-start pb-3 border-b border-border/50">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-foreground/60">{item.time}</p>
                      </div>
                      <p className="font-semibold text-accent">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-luxury-primary">BOKA TID NU</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503192590/4Tp7oachgSczukpetevpGb/hair-styling-hero-o5A2bYRhn5HiEFzyFRULTr.webp"
                alt="Professionell hårstyling"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-accent font-medium tracking-widest mb-4">VÅR HISTORIA</p>
              <h2 className="display-md mb-6">Om Salong HairByM</h2>
              <div className="divider-gold mb-6 w-24"></div>
              <p className="body-lg text-foreground/80 mb-6">
                Salong HairByM drivs med passion och dedikation för frisöryrket. Med lång erfarenhet och djup kunskap inom alla aspekter av hårvård erbjuder vi en personlig och professionell upplevelse för varje kund.
              </p>
              <p className="body-lg text-foreground/80 mb-8">
                Vi tror på att varje kund är unik och förtjänar en frisyr som speglar deras personlighet. Vår team av erfarna frisörer är dedikerade till att skapa resultatet du drömmer om, oavsett om det är en enkel klippning eller en komplett förändring.
              </p>
              <Button className="btn-luxury-primary">BOKA DIN TID</Button>
            </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-widest mb-4">ÖPPETTIDER</p>
            <h2 className="display-md mb-4">När vi har öppet</h2>
            <div className="divider-gold mx-auto w-24"></div>
          </div>

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
          <div className="flex gap-6 justify-center">
            <Button className="btn-luxury-primary bg-accent text-foreground hover:bg-opacity-90">BOKA TID</Button>
            <Button className="btn-luxury-secondary border-white text-white hover:bg-white hover:text-foreground">
              RING OSS
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-lg mb-2">Ring oss</h3>
              <p className="body-base text-foreground/70">087616171</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-lg mb-2">Besök oss</h3>
              <p className="body-base text-foreground/70">Jaktplan 7, Barkaby station, 175 63 Järfälla</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-lg mb-2">Följ oss</h3>
              <p className="body-base text-foreground/70">@hairbym</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-border rounded-lg overflow-hidden h-96 mb-8">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.8849999999998!2d17.8!3d59.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7e5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sJaktplan%207%2C%20Barkaby%20station%2C%20175%2063%20J%C3%A4rf%C3%A4lla!5e0!3m2!1ssv!2sse!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="heading-lg mb-4">Salong HairByM</h4>
              <p className="body-sm text-white/70">Din lokala frisörsalong i Järfälla med passion för ditt hår.</p>
            </div>
            <div>
              <h4 className="heading-lg mb-4">Snabblänkar</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="body-sm text-white/70 hover:text-white transition">
                    Hem
                  </a>
                </li>
                <li>
                  <a href="#services" className="body-sm text-white/70 hover:text-white transition">
                    Tjänster
                  </a>
                </li>
                <li>
                  <a href="#about" className="body-sm text-white/70 hover:text-white transition">
                    Om Oss
                  </a>
                </li>
                <li>
                  <a href="#contact" className="body-sm text-white/70 hover:text-white transition">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="heading-lg mb-4">Kontakt</h4>
              <p className="body-sm text-white/70 mb-2">087616171</p>
              <p className="body-sm text-white/70">tvillingarna_c@hotmail.com</p>
            </div>
            <div>
              <h4 className="heading-lg mb-4">Följ oss</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-accent transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="body-sm text-white/50">© 2026 Salong HairByM. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
