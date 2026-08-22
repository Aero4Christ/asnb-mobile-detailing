/**
 * A’s n B design reminder: a structured mobile-service experience built from deep navy,
 * electric blue, metallic gold, high-gloss vehicle imagery, and a minimal pink accent.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  CarFront,
  Check,
  ChevronDown,
  Droplets,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const brandLogo = "/assets/BlueLogo.png";
const heroImage = "/assets/WebsiteBackground.jpg";
const interiorImage = "/assets/Image4.webp";
const setupImage = "/assets/Detail-Tool.jpg";
const sweepImage = "/assets/Image1.jpg";
const phoneText = "(940) 332-8817";
const phoneHref = "tel:+19403328817";
const email = "asandbmobile@gmail.com";

const startingPoints = [
  { name: "Interior Detail", price: "$60", note: "Deep clean · Fresh · Like new", icon: Sparkles },
  { name: "Interior + Exterior", price: "$120", note: "The complete refresh", icon: CarFront },
  { name: "Mobile Oil Change", price: "$75", note: "Convenient vehicle care", icon: Droplets },
];

const packages = [
  { tier: "Basic Wash", price: "$75", details: ["Exterior hand wash", "Wheels & tires cleaned", "Tire shine", "Windows cleaned"] },
  { tier: "Standard Detail", price: "$150", details: ["Everything in Basic", "Interior vacuum", "Dash, panels & console", "Door jambs & windows"] },
  { tier: "Premium Detail", price: "$250", details: ["Everything in Standard", "Deep interior clean", "Carpet & seat shampoo", "Leather conditioning"] },
];

const detailServices = ["Exterior wash", "Paint protection", "Interior cleaning", "Carpet & seat shampoo", "Wheel & tire detail", "Headlight restoration", "Clay bar treatment", "Ceramic sealant"];

const faqs = [
  ["Where do you come to?", "A’s n B is a mobile service. We can meet you at home, work, or another suitable customer location—just call or text to coordinate your appointment."],
  ["Do prices change by vehicle?", "The advertised prices are starting points. Vehicle size, current condition, and the selected service help determine the final appointment quote."],
  ["Do you offer interior and exterior work?", "Yes. A’s n B offers interior cleaning, exterior washing, wheel and tire detail, protection services, restoration work, and more."],
  ["Can I book a mobile oil change?", "Yes. Mobile oil changes are available with oil, a filter, fluid top-off, and a multi-point inspection. Call or text to confirm your vehicle needs."],
];

function BrandLogo({ className = "" }: { className?: string }) {
  return <img src={brandLogo} alt="A’s n B Mobile Detailing logo" className={className} />;
}

function GoldSpark({ className = "" }: { className?: string }) {
  return <Star aria-hidden="true" className={`fill-[#f7cf58] text-[#d99a17] ${className}`} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020b22] text-white">
      <div className="top-ribbon"><span>Professional Detailing. Premium Results.</span><span className="hidden sm:inline"> · </span><span className="hidden sm:inline">We Come to You!</span><Heart className="size-3 fill-[#e95591] text-[#e95591]" /></div>
      <header className="site-header">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 md:px-9 lg:px-14">
          <a href="#top" className="flex items-center gap-3" aria-label="A’s n B Mobile Detailing home"><BrandLogo className="size-14 rounded-full object-cover object-center shadow-[0_0_18px_rgba(8,117,237,0.28)]" /><div className="hidden min-[420px]:block"><p className="font-roman text-sm font-semibold uppercase tracking-[0.18em] text-[#f7cf58]">A’s n B</p><p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/65">Mobile Detailing</p></div></a>
          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.13em] text-white/75 lg:flex" aria-label="Primary navigation"><a className="nav-link" href="#services">Services</a><a className="nav-link" href="#packages">Packages</a><a className="nav-link" href="#faq">Questions</a></nav>
          <a href={phoneHref} className="hidden items-center gap-2 border border-[#d99a17]/80 bg-[#061c43]/70 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#f7cf58] transition hover:bg-[#d99a17] hover:text-[#031538] sm:flex"><Phone className="size-3.5" /> {phoneText}</a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center border border-[#d99a17]/60 text-[#f7cf58] lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#031538] px-5 py-6 lg:hidden"><nav className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.12em] text-white/85"><a onClick={closeMenu} href="#services">Services</a><a onClick={closeMenu} href="#packages">Packages</a><a onClick={closeMenu} href="#faq">Questions</a><a href={phoneHref} className="w-fit bg-[#d99a17] px-5 py-3 text-xs text-[#031538]">Call {phoneText}</a></nav></div>}
      </header>

      <section id="top" className="hero-bay relative isolate min-h-[775px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,34,0.99)_0%,rgba(3,21,56,0.94)_35%,rgba(2,11,34,0.37)_72%,rgba(2,11,34,0.72)_100%)]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_33%,rgba(8,117,237,0.25),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.46))]" />
        <div className="hero-arc absolute -left-[18%] top-6 h-[580px] w-[88%] rounded-[50%] border border-[#d99a17]/55 sm:-left-[8%] sm:w-[67%]" /><div className="hero-arc absolute -left-[16%] top-11 h-[544px] w-[85%] rounded-[50%] border border-[#0875ed]/70 sm:-left-[6%] sm:w-[64%]" />
        <GoldSpark className="absolute left-[15%] top-32 z-10 size-7 animate-pulse sm:left-[24%]" />
        <div className="relative mx-auto flex min-h-[775px] max-w-[1440px] flex-col justify-end px-5 pb-14 pt-20 md:px-9 lg:px-14 lg:pb-16">
          <div className="max-w-[720px]"><p className="eyebrow text-[#f7cf58]"><span className="mr-3 inline-block h-px w-9 bg-[#d99a17] align-middle" /> Mobile Detailing & Mobile Oil Changes</p><h1 className="mt-5 font-display text-[clamp(4.5rem,11vw,10.5rem)] leading-[0.77] uppercase tracking-[-0.045em] text-white">Professional<br /><span className="gold-text">detailing.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/82">Premium results at your home, work, or wherever your vehicle is parked. A’s n B brings the care, equipment, and finishing touch to you.</p><div className="mt-9 flex flex-wrap gap-3"><a href={phoneHref} className="gold-button"><Phone className="size-4" /> Call to book</a><a href={`mailto:${email}?subject=Appointment%20Request%20for%20A%27s%20n%20B%20Mobile%20Detailing`} className="blue-button"><Mail className="size-4" /> Email us</a></div></div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/70"><span className="flex items-center gap-2"><MapPin className="size-3.5 text-[#f7cf58]" /> We come to you</span><span className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-[#f7cf58]" /> Licensed & insured</span><span className="flex items-center gap-2"><BadgeCheck className="size-3.5 text-[#f7cf58]" /> Clean, protect, restore</span></div>
        </div>
      </section>

      <section className="brand-navy relative px-5 py-16 md:px-9 md:py-20 lg:px-14"><div className="gold-rule mx-auto mb-12 max-w-[1310px]" /><div className="mx-auto grid max-w-[1310px] gap-10 lg:grid-cols-[0.77fr_1.23fr] lg:gap-24"><div><p className="eyebrow text-[#f7cf58]">THE A’S N B PROMISE</p><h2 className="mt-5 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] sm:text-7xl">Clean cars.<br /><span className="text-[#0875ed]">Happy customers.</span></h2></div><div className="max-w-2xl"><p className="text-xl leading-8 text-white/88">Professional vehicle care should fit your life. That is why A’s n B is built around premium mobile service, clear starting prices, and the kind of finish you are proud to drive.</p><p className="mt-5 max-w-xl leading-7 text-white/60">From a thorough interior refresh to exterior protection and mobile oil changes, every appointment is focused on your vehicle’s condition and what will make the biggest difference.</p><div className="mt-8 flex items-center gap-3 border-l-2 border-[#e95591] pl-4 text-sm text-white/80"><Heart className="size-4 fill-[#e95591] text-[#e95591]" /> That’s our promise.</div></div></div></section>

      <section id="services" className="blue-panel relative px-5 py-20 md:px-9 md:py-28 lg:px-14"><GoldSpark className="absolute right-[7%] top-16 size-6" /><div className="mx-auto max-w-[1310px]"><div className="grid gap-8 border-b border-[#f7cf58]/45 pb-9 lg:grid-cols-[1fr_0.75fr] lg:items-end"><div><p className="eyebrow text-[#f7cf58]">WHAT WE DO</p><h2 className="mt-5 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] text-white sm:text-7xl">Mobile service.<br /><span className="text-[#f7cf58]">Serious shine.</span></h2></div><p className="max-w-lg leading-7 text-white/75">Interior, exterior, protection, restoration, and on-the-go maintenance. Choose the service that fits your vehicle, then call or text to get your appointment on the calendar.</p></div><div className="mt-10 grid gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-4">{detailServices.map((service, index) => <div key={service} className="service-chip"><span className="font-display text-2xl text-[#f7cf58]">0{index + 1}</span><span>{service}</span></div>)}</div><div className="mt-12 flex flex-wrap gap-4"><a className="gold-button" href={phoneHref}>Book your appointment <ArrowUpRight className="size-4" /></a><a className="text-link" href={`mailto:${email}`}>Ask about a custom service <ArrowDownRight className="size-4" /></a></div></div></section>

      <section className="ink-section relative overflow-hidden px-5 py-20 md:px-9 md:py-28 lg:px-14"><img src={sweepImage} alt="Glossy paint reflection after detailing" className="absolute inset-0 size-full object-cover opacity-35 mix-blend-screen" /><div className="absolute inset-0 bg-[linear-gradient(110deg,#020b22_18%,rgba(3,21,56,0.7)_64%,#020b22_100%)]" /><div className="relative mx-auto grid max-w-[1310px] gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-[#f7cf58]">POPULAR STARTING POINTS</p><h2 className="mt-5 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] sm:text-7xl">Find your<br /><span className="text-[#0875ed]">starting line.</span></h2><p className="mt-6 max-w-sm leading-7 text-white/65">Every vehicle is different. These advertised starting points help you begin the right conversation.</p></div><div className="grid gap-4 md:grid-cols-3">{startingPoints.map(({ name, price, note, icon: Icon }) => <article key={name} className="price-marker"><Icon className="size-5 text-[#f7cf58]" /><p className="mt-7 font-display text-xl uppercase tracking-wide text-white">{name}</p><p className="mt-2 font-display text-6xl leading-none text-[#f7cf58]">{price}</p><p className="mt-3 text-sm leading-6 text-white/62">{note}</p><p className="mt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0875ed]">Starting at</p></article>)}</div></div></section>

      <section id="packages" className="package-paper relative px-5 py-20 text-[#061c43] md:px-9 md:py-28 lg:px-14"><div className="mx-auto max-w-[1310px]"><div className="text-center"><p className="eyebrow text-[#9a6506]">DETAILING PACKAGES</p><h2 className="mt-4 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] sm:text-7xl">Pick your level<br /><span className="text-[#0754c7]">of care.</span></h2><p className="mx-auto mt-6 max-w-xl leading-7 text-[#31476d]">Clear starting points for the detail your vehicle needs. Call or text A’s n B to confirm the best fit for your vehicle.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{packages.map((pack, index) => <article key={pack.tier} className={`package-card ${index === 1 ? "package-card-featured" : ""}`}><p className="eyebrow text-[#d99a17]">{index === 1 ? "Most requested" : "Mobile detailing"}</p><h3 className="mt-4 font-display text-4xl uppercase tracking-[-0.03em]">{pack.tier}</h3><div className="my-5 h-px bg-[#d99a17]/70" /><p className="font-display text-7xl leading-none text-[#0754c7]">{pack.price}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#9a6506]">Starting at</p><ul className="mt-7 space-y-3 border-t border-[#061c43]/15 pt-6 text-sm leading-5 text-[#31476d]">{pack.details.map((detail) => <li className="flex gap-2" key={detail}><Check className="mt-0.5 size-4 shrink-0 text-[#d99a17]" />{detail}</li>)}</ul><a href={phoneHref} className="mt-8 flex items-center justify-between border border-[#0754c7] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#061c43] transition hover:bg-[#0754c7] hover:text-white">Call to book <ArrowUpRight className="size-3.5" /></a></article>)}</div><p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-6 text-[#486084]">Pricing may vary by vehicle size, condition, and selected work. Contact A’s n B for a straightforward appointment quote.</p></div></section>

      <section className="relative bg-[#020b22] px-5 py-20 md:px-9 md:py-28 lg:px-14"><div className="mx-auto grid max-w-[1310px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div className="gold-frame relative aspect-[4/5] max-h-[620px] overflow-hidden"><img src={interiorImage} alt="Interior car detailing in progress" className="size-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020b22] via-[#020b22]/75 to-transparent p-7"><p className="eyebrow text-[#f7cf58]">DETAILS THAT SHOW</p><p className="mt-3 max-w-sm text-lg leading-7 text-white/85">Clean touch points, fresh interiors, protected surfaces, and that just-detailed look.</p></div></div><div><p className="eyebrow text-[#f7cf58]">OUR MOBILE ADVANTAGE</p><h2 className="mt-5 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] sm:text-7xl">Your car.<br /><span className="text-[#0875ed]">Your location.</span></h2><div className="mt-10 space-y-0 border-t border-white/15">{[["01", "Call or text A’s n B", "Tell us what you drive and the service you have in mind."], ["02", "Choose a time & place", "We coordinate a suitable appointment at home, work, or another approved location."], ["03", "Enjoy the finish", "Professional vehicle care arrives where your day already happens."]].map(([number, title, text]) => <div className="grid grid-cols-[45px_1fr] gap-4 border-b border-white/15 py-6" key={number}><span className="font-display text-2xl text-[#f7cf58]">{number}</span><div><h3 className="font-display text-2xl uppercase tracking-wide text-white">{title}</h3><p className="mt-2 leading-6 text-white/60">{text}</p></div></div>)}</div><a href={phoneHref} className="gold-button mt-9">Book your appointment today <Phone className="size-4" /></a></div></div></section>

      <section id="faq" className="blue-panel relative px-5 py-20 md:px-9 md:py-28 lg:px-14"><div className="mx-auto grid max-w-[1310px] gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-24"><div><p className="eyebrow text-[#f7cf58]">COMMON QUESTIONS</p><h2 className="mt-5 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] sm:text-7xl">Before<br /><span className="text-[#f7cf58]">we roll up.</span></h2><p className="mt-6 max-w-sm leading-7 text-white/70">Have a specific vehicle or service question? Give A’s n B a call or send an email to start the conversation.</p><a href={phoneHref} className="text-link mt-7">{phoneText} <Phone className="size-4" /></a></div><div className="border-t border-[#f7cf58]/45">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-white/18"><button type="button" className="flex w-full items-center justify-between gap-5 py-6 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">{question}</span><ChevronDown className={`size-5 shrink-0 text-[#f7cf58] transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="max-w-2xl pb-6 leading-7 text-white/68">{answer}</p>}</div>)}</div></div></section>

      <section className="appointment-panel relative px-5 py-20 md:px-9 md:py-24 lg:px-14"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg,rgba(3,21,56,0.97),rgba(3,21,56,0.87)),url(${setupImage})` }} /><div className="relative mx-auto grid max-w-[1310px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="flex items-center gap-2 text-[#f7cf58]"><GoldSpark className="size-4" /><p className="eyebrow">READY WHEN YOU ARE</p><GoldSpark className="size-4" /></div><h2 className="mt-5 font-display text-5xl leading-[0.84] uppercase tracking-[-0.04em] text-white sm:text-7xl">Book your appointment<br /><span className="gold-text">today.</span></h2><p className="mt-5 max-w-lg text-lg leading-7 text-white/72">Professional detailing. Premium results. At your location.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={phoneHref} className="gold-button justify-center"><Phone className="size-4" /> {phoneText}</a><a href={`mailto:${email}?subject=Appointment%20Request%20for%20A%27s%20n%20B%20Mobile%20Detailing`} className="blue-button justify-center"><Mail className="size-4" /> Email A’s n B</a></div></div></section>

      <footer className="bg-black px-5 pb-8 pt-12 md:px-9 lg:px-14"><div className="mx-auto grid max-w-[1310px] gap-10 border-b border-[#d99a17]/35 pb-10 md:grid-cols-[1fr_auto] md:items-end"><div className="flex items-center gap-4"><BrandLogo className="size-20 rounded-full object-cover" /><div><p className="font-roman text-lg font-semibold uppercase tracking-[0.12em] text-[#f7cf58]">A’s n B</p><p className="mt-1 text-xs uppercase tracking-[0.17em] text-white/70">Mobile Detailing</p><p className="mt-3 text-sm text-white/60">Clean Cars. Happy Customers. That’s Our Promise.</p></div></div><div className="text-left text-sm leading-7 text-white/70 md:text-right"><a className="block transition hover:text-[#f7cf58]" href={phoneHref}>{phoneText}</a><a className="block transition hover:text-[#f7cf58]" href={`mailto:${email}`}>{email}</a></div></div><div className="mx-auto flex max-w-[1310px] flex-col gap-3 pt-6 text-[10px] font-medium uppercase tracking-[0.12em] text-white/45 md:flex-row md:justify-between"><p>© {new Date().getFullYear()} A’s n B Mobile Detailing</p><p>Professional detailing. Premium results.</p></div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "AutoWash", name: "A’s n B Mobile Detailing", description: "Professional mobile interior and exterior vehicle detailing and mobile oil changes.", telephone: phoneText, email, priceRange: "$60-$250", image: brandLogo }, { "@type": "Service", name: "Mobile Detailing", serviceType: "Mobile auto detailing", provider: { "@type": "Organization", name: "A’s n B Mobile Detailing", telephone: phoneText }, description: "Professional mobile detailing provided at a customer-approved location." }, { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }] }) }} />
    </main>
  );
}
