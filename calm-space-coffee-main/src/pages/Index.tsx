import Navbar from "@/components/cafe/Navbar";
import heroImage from "@/assets/hero-cafe.jpg";
import spaceImage from "@/assets/space-experience.jpg";

const features = [
  { title: "Quiet Zones", text: "Dedicated areas designed for deep, undistracted work." },
  { title: "High-Speed WiFi", text: "Reliable, fast connection for everything you create." },
  { title: "Premium Coffee", text: "Single-origin beans, slow-brewed with intention." },
];

const menu = [
  { name: "Espresso", note: "Bold. Concentrated.", price: "3.50" },
  { name: "Cappuccino", note: "Velvet foam. Soft warmth.", price: "4.80" },
  { name: "Cold Brew", note: "Smooth. Twelve hours steeped.", price: "5.20" },
  { name: "Latte", note: "Quiet milk. Slow pour.", price: "5.00" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Warm cafe interior with people working"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/55" />
        </div>
        <div className="relative container-editorial py-32 fade-in">
          <p className="text-xs uppercase tracking-editorial text-accent mb-8">
            Co-working · Cafe · Sanctuary
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground max-w-4xl">
            Work Calm.<br />Sip Slow.
          </h1>
          <p className="mt-8 text-base md:text-lg text-foreground/80 max-w-md leading-relaxed">
            A space where coffee meets focus and comfort.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block border border-foreground px-10 py-4 text-xs uppercase tracking-editorial text-foreground hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Book a Seat
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-pad">
        <div className="container-editorial">
          <div className="max-w-xl mb-20">
            <p className="text-xs uppercase tracking-editorial text-accent mb-6">
              The Essentials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Everything you need.<br />Nothing you don't.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {features.map((f, i) => (
              <div key={f.title} className="border-t border-foreground/20 pt-8">
                <p className="font-serif text-accent text-sm mb-6">0{i + 1}</p>
                <h3 className="font-serif text-2xl mb-4">{f.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPACE / EXPERIENCE */}
      <section id="workspace" className="section-pad">
        <div className="container-editorial grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="overflow-hidden">
            <img
              src={spaceImage}
              alt="A person working calmly with coffee"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-editorial text-accent mb-6">
              The Space
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              A room that breathes with you.
            </h2>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Designed around the rhythm of focused work — soft light, warm wood,
              and the quiet hum of a well-pulled espresso. Stay an hour, stay a day.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              You'll find a seat that feels like it was waiting for you.
            </p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-dark text-dark-foreground section-pad">
        <div className="container-editorial">
          <div className="max-w-xl mb-20">
            <p className="text-xs uppercase tracking-editorial text-accent mb-6">
              The Menu
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Brewed slowly.<br />Served quietly.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {menu.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline justify-between gap-6 border-b border-dark-foreground/15 pb-6"
              >
                <div>
                  <h3 className="font-serif text-2xl mb-2">{item.name}</h3>
                  <p className="text-sm text-dark-foreground/60">{item.note}</p>
                </div>
                <p className="font-serif text-xl text-accent">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-pad">
        <div className="container-editorial text-center">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-3xl mx-auto">
            Find Your Focus Here.
          </h2>
          <p className="mt-8 text-base text-foreground/70 max-w-md mx-auto">
            Open daily, 7am – 9pm. Walk in, settle down, stay a while.
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="inline-block border border-foreground px-10 py-4 text-xs uppercase tracking-editorial hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-dark-foreground">
        <div className="container-editorial py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-serif text-xl tracking-editorial">COFFEE</p>
            <p className="text-xs text-dark-foreground/50 mt-2">
              24 Linden Street · Open daily 7—9
            </p>
          </div>
          <ul className="flex gap-8 text-xs uppercase tracking-editorial text-dark-foreground/70">
            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#workspace" className="hover:text-accent transition-colors">Workspace</a></li>
            <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="border-t border-dark-foreground/10">
          <div className="container-editorial py-6 text-xs text-dark-foreground/40 text-center">
            © {new Date().getFullYear()} Coffee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
