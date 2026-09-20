import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Cable,
  Camera,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Cloud,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  PhoneCall,
  Router,
  ShieldCheck,
  Sparkles,
  Wifi,
  X,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import cloudnetLogo from "@/assets/cloudnet-logo.png.asset.json";
import orderonLogo from "@/assets/orderon-logo.jpg.asset.json";
import floor3d from "@/assets/orderon-floor-3d.png.asset.json";
import tables2d from "@/assets/orderon-tables-2d.png.asset.json";
import floorAngle from "@/assets/orderon-floor-angle.png.asset.json";
import mobile from "@/assets/orderon-mobile.png.asset.json";
import restaurant from "@/assets/orderon-restaurant.jpg.asset.json";
import pos from "@/assets/orderon-pos.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CloudNet | OrderOn POS & Τεχνολογικές Λύσεις" },
      { name: "description", content: "OrderOn ηλεκτρονική παραγγελιοληψία και POS για την εστίαση. Δίκτυα, Wi-Fi Marketing, CCTV και συναγερμοί από την CloudNet." },
      { property: "og:title", content: "CloudNet | OrderOn POS & Τεχνολογικές Λύσεις" },
      { property: "og:description", content: "Η εστίασή σας σε πλήρη έλεγχο με το OrderOn και τις ολοκληρωμένες λύσεις CloudNet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const demos = [
  { id: "pda", label: "PDA / Smartphone", title: "Η σάλα στην παλάμη του σερβιτόρου", text: "Άμεση λήψη παραγγελίας, ζωντανή κατάσταση τραπεζιών και ενημέρωση ταμείου χωρίς περιττές διαδρομές.", image: mobile.url, alt: "OrderOn σε smartphone με κατάσταση τραπεζιών" },
  { id: "floor", label: "3D / 2D Κάτοψη", title: "Κάθε τραπέζι, σε πραγματικό χρόνο", text: "Δείτε ανοικτούς λογαριασμούς, πληρότητα και κατάσταση σάλας σε διαδραστική 3D ή 2D απεικόνιση.", image: floor3d.url, alt: "Τρισδιάστατη κάτοψη τραπεζιών OrderOn" },
  { id: "pos", label: "Ταμείο & Delivery", title: "Ένα ταμείο για κάθε κανάλι πώλησης", text: "Σάλα, delivery και take away σε μία καθαρή ροή εργασίας, με οργάνωση ειδών και γρήγορη πληρωμή.", image: pos.url, alt: "Οθόνη παραγγελίας και ταμείου OrderOn" },
  { id: "reports", label: "Αναφορές", title: "Οι αριθμοί που χρειάζεστε, όταν τους χρειάζεστε", text: "Αναλυτική εικόνα βάρδιας, τζίρου, λογαριασμών και απόδοσης για καλύτερες αποφάσεις.", image: tables2d.url, alt: "Πίνακας διαχείρισης τραπεζιών OrderOn" },
] as const;

const services: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Cable, title: "Εγκαταστάσεις Δικτύων", text: "Δομημένη καλωδίωση, rack, ανθεκτικά access points, seamless roaming, bandwidth management και failover 4G/5G." },
  { icon: Wifi, title: "Wi-Fi Marketing", text: "Captive portal, social login και νόμιμη συλλογή επαφών με αυτοματοποιημένες καμπάνιες και loyalty." },
  { icon: Camera, title: "CCTV & Συναγερμοί", text: "IP κάμερες υψηλής ανάλυσης, NVR με απομακρυσμένη θέαση και πιστοποιημένοι συναγερμοί με σύνδεση σε κέντρο σημάτων." },
];

function DemoForm({ interest = "OrderOn" }: { interest?: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="py-10 text-center"><CircleCheck className="mx-auto mb-4 size-12 text-success"/><h3 className="text-xl font-bold">Λάβαμε το αίτημά σας.</h3><p className="mt-2 text-muted-foreground">Η ομάδα της CloudNet θα επικοινωνήσει μαζί σας σύντομα.</p></div>;
  return <form onSubmit={submit} className="mt-5 grid gap-3">
    <Input required aria-label="Ονοματεπώνυμο" placeholder="Ονοματεπώνυμο" className="h-12" />
    <div className="grid gap-3 sm:grid-cols-2"><Input required aria-label="Τηλέφωνο" type="tel" placeholder="Τηλέφωνο" className="h-12"/><Input required aria-label="Email" type="email" placeholder="Email" className="h-12"/></div>
    <select aria-label="Υπηρεσία ενδιαφέροντος" defaultValue={interest} className="h-12 rounded-md border border-input bg-background px-3 text-sm">
      <option>OrderOn</option><option>Δίκτυα</option><option>Wi-Fi Marketing</option><option>Κάμερες & Συναγερμοί</option>
    </select>
    <Textarea aria-label="Μήνυμα" placeholder="Πείτε μας λίγα λόγια για την επιχείρησή σας" className="min-h-24"/>
    <Button type="submit" size="lg" className="h-12">Αποστολή αιτήματος <ArrowRight/></Button>
    <p className="text-xs text-muted-foreground">Με την αποστολή συμφωνείτε να επικοινωνήσουμε μαζί σας σχετικά με το αίτημά σας.</p>
  </form>;
}

function DemoDialog({ label = "Ζητήστε Live Demo", variant = "default" }: { label?: string; variant?: "default" | "outline" }) {
  return <Dialog><DialogTrigger asChild><Button variant={variant} size="lg" className="h-12 px-6">{label}<ArrowRight/></Button></DialogTrigger><DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl"><DialogHeader><DialogTitle className="text-2xl">Δείτε το OrderOn ζωντανά</DialogTitle><DialogDescription>Συμπληρώστε τα στοιχεία σας και θα οργανώσουμε μία προσωπική παρουσίαση.</DialogDescription></DialogHeader><DemoForm /></DialogContent></Dialog>;
}

function Index() {
  const [activeDemo, setActiveDemo] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminals, setTerminals] = useState(1);
  const [pdas, setPdas] = useState(2);
  const estimate = 39 + (terminals - 1) * 18 + pdas * 7;
  const demo = demos[activeDemo] ?? demos[0];

  return <main className="min-h-screen overflow-hidden bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="CloudNet αρχική"><img src={cloudnetLogo.url} alt="CloudNet POS Networks Security" className="h-14 w-auto"/></a>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex"><a href="#orderon">OrderOn</a><a href="#features">Δυνατότητες</a><a href="#pricing">Πακέτα</a><a href="#services">Υπηρεσίες</a><a href="#contact">Επικοινωνία</a></nav>
        <div className="hidden lg:block"><DemoDialog /></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Μενού">{menuOpen ? <X/> : <Menu/>}</Button>
      </div>
      {menuOpen && <nav className="grid gap-1 border-t bg-background px-5 py-4 lg:hidden">{[["OrderOn","#orderon"],["Δυνατότητες","#features"],["Πακέτα","#pricing"],["Υπηρεσίες","#services"],["Επικοινωνία","#contact"]].map(([text,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)} className="py-3 font-medium">{text}</a>)}</nav>}
    </header>

    <section id="top" className="relative min-h-[92vh] pt-20">
      <img src={restaurant.url} alt="Το OrderOn σε λειτουργία σε επαγγελματικό χώρο εστίασης" className="absolute inset-0 h-full w-full object-cover object-center"/>
      <div className="absolute inset-0 bg-hero-overlay"/>
      <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8 lg:pb-20">
        <div className="max-w-3xl text-hero-foreground">
          <div className="mb-7 inline-flex items-center gap-2 border border-hero-border bg-hero-surface px-3 py-2 text-xs font-semibold uppercase"><Cloud className="size-4 text-tech"/>Cloud POS για σύγχρονη εστίαση</div>
          <h1 className="text-balance text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">Η παραγγελία ξεκινά.<br/><span className="text-tech">Η επιχείρηση προχωρά.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted sm:text-xl">Το OrderOn ενώνει ασύρματη παραγγελιοληψία, ταμείο, delivery και διαχείριση σάλας σε μία γρήγορη, αξιόπιστη πλατφόρμα.</p>
          <div className="mt-8 flex flex-wrap gap-3"><DemoDialog/><Button asChild variant="outline" size="lg" className="h-12 border-hero-border bg-hero-surface text-hero-foreground hover:bg-hero-surface-strong hover:text-hero-foreground"><a href="#features">Δείτε πώς λειτουργεί</a></Button></div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-hero-muted">{["Χαμηλό μηνιαίο κόστος","Αυτόματες αναβαθμίσεις","Υποστήριξη 24/7"].map(x=><span key={x} className="flex items-center gap-2"><Check className="size-4 text-success"/>{x}</span>)}</div>
        </div>
      </div>
    </section>

    <section id="orderon" className="border-b bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div><span className="eyebrow">OrderOn SaaS</span><h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Όλη η λειτουργία σας.<br/>Μία οθόνη.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Χωρίς ακριβή αρχική επένδυση και κρυφές δεσμεύσεις. Νοικιάζετε ό,τι χρειάζεστε και το σύστημα μεγαλώνει μαζί με την επιχείρησή σας.</p><div className="mt-8 grid grid-cols-2 gap-4">{[["100%","Cloud-native"],["24/7","Υποστήριξη"],["Live","Κατάσταση σάλας"],["Auto","Αναβαθμίσεις"]].map(([a,b])=><div key={b} className="border-l-2 border-tech pl-4"><div className="text-2xl font-bold">{a}</div><div className="text-sm text-muted-foreground">{b}</div></div>)}</div></div>
        <div className="relative"><div className="overflow-hidden rounded-lg border bg-product p-2 shadow-product"><img src={floorAngle.url} alt="OrderOn τρισδιάστατη διαχείριση σάλας" className="w-full rounded-md"/></div><div className="absolute -bottom-5 -left-4 hidden w-24 overflow-hidden rounded-lg border-[5px] border-product bg-product shadow-product sm:block lg:w-28"><img src={mobile.url} alt="OrderOn mobile" className="w-full"/></div></div>
      </div>
    </section>

    <section id="features" className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><span className="eyebrow">Μέσα στο OrderOn</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Δείτε το πριν το δοκιμάσετε.</h2></div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="grid content-start gap-2">{demos.map((item,i)=><Button key={item.id} variant="ghost" onClick={()=>setActiveDemo(i)} className={`h-auto justify-between whitespace-normal rounded-md border px-5 py-5 text-left text-base ${activeDemo===i ? "border-tech bg-background text-foreground shadow-sm" : "border-transparent text-muted-foreground"}`}><span>{item.label}</span><ChevronRight className={activeDemo===i ? "text-tech" : ""}/></Button>)}</div>
          <div className="overflow-hidden rounded-lg border bg-product shadow-product"><div className="relative aspect-[16/9] overflow-hidden"><img key={demo.image} src={demo.image} alt={demo.alt} className={`h-full w-full ${demo.id === "pda" ? "object-contain p-4" : "object-cover"}`}/></div><div className="border-t border-product-border p-6 text-product-foreground"><h3 className="text-xl font-bold">{demo.title}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-product-muted">{demo.text}</p></div></div>
        </div>
      </div>
    </section>

    <section id="pricing" className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8"><div><span className="eyebrow">Ευέλικτη συνδρομή</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Πληρώνετε για ό,τι πραγματικά χρειάζεστε.</h2><p className="mt-5 max-w-xl text-lg text-muted-foreground">Η τελική προσφορά προσαρμόζεται στον χώρο, στα σημεία πώλησης και στην ομάδα σας.</p><ul className="mt-8 grid gap-4">{["POS, PDA και smartphones στην ίδια πλατφόρμα","Αυτόματες αναβαθμίσεις χωρίς διακοπές","Ετοιμότητα διασύνδεσης με myDATA / ΑΑΔΕ","Απομακρυσμένη υποστήριξη 24/7"].map(x=><li key={x} className="flex gap-3"><CircleCheck className="mt-0.5 size-5 shrink-0 text-success"/><span>{x}</span></li>)}</ul></div>
        <div className="rounded-lg border bg-card p-6 shadow-soft sm:p-8"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold text-muted-foreground">ΕΝΔΕΙΚΤΙΚΗ ΔΙΑΜΟΡΦΩΣΗ</p><h3 className="mt-1 text-2xl font-bold">OrderOn Business</h3></div><Sparkles className="size-6 text-order"/></div><div className="mt-8 space-y-7">{([ ["Τερματικά POS",terminals,setTerminals,4], ["PDA / Smartphones",pdas,setPdas,10] ] as const).map(([label,value,setValue,max])=><div key={label}><div className="mb-3 flex justify-between"><span className="font-medium">{label}</span><span className="font-bold">{value}</span></div><input aria-label={label} type="range" min="1" max={max} value={value} onChange={e=>setValue(Number(e.target.value))} className="w-full accent-primary"/></div>)}</div><div className="my-7 border-t"/><div className="flex items-end justify-between"><div><p className="text-sm text-muted-foreground">Ενδεικτική τιμή από</p><p className="text-4xl font-bold">{estimate}€<span className="text-base font-normal text-muted-foreground"> / μήνα</span></p></div></div><p className="mt-3 text-xs text-muted-foreground">Η τιμή είναι ενδεικτική και δεν αποτελεί δεσμευτική προσφορά.</p><div className="mt-6"><DemoDialog label="Ζητήστε ακριβή προσφορά"/></div></div>
      </div></section>

    <section id="services" className="bg-ink py-20 text-ink-foreground lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-2"><div><span className="eyebrow text-tech">CloudNet Solutions</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Η τεχνολογία πίσω από μια επιχείρηση που δεν σταματά.</h2></div><p className="self-end text-lg leading-relaxed text-ink-muted">Από το καλώδιο και το Wi-Fi μέχρι την ασφάλεια του χώρου σας, σχεδιάζουμε υποδομές με έναν υπεύθυνο συνεργάτη.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-ink-border md:grid-cols-3">{services.map(({ icon: Icon, title, text })=><article key={title} className="bg-ink p-7 lg:p-9"><Icon className="size-8 text-tech"/><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-muted">{text}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-tech">Μιλήστε με έναν τεχνικό <ArrowRight className="size-4"/></a></article>)}</div>
      </div></section>

    <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"><div className="overflow-hidden rounded-lg"><img src={restaurant.url} alt="OrderOn εγκατεστημένο σε κατάστημα εστίασης" className="aspect-[4/3] w-full object-cover"/></div><div><span className="eyebrow">Σχεδιασμένο για την πράξη</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Από την πρώτη παραγγελία μέχρι το κλείσιμο βάρδιας.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Το OrderOn ακολουθεί τον ρυθμό της ομάδας σας. Καθαρό περιβάλλον, γρήγορες κινήσεις και άμεση εικόνα της επιχείρησης — ακόμα και στις ώρες αιχμής.</p><div className="mt-8 flex flex-wrap gap-3"><DemoDialog label="Κλείστε παρουσίαση"/><Button asChild variant="outline" size="lg" className="h-12"><a href="#contact">Μιλήστε μαζί μας</a></Button></div></div></div></section>

    <section className="bg-section py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="text-center"><span className="eyebrow">Συχνές ερωτήσεις</span><h2 className="mt-4 text-4xl font-bold">Όσα θέλετε να γνωρίζετε.</h2></div><Accordion type="single" collapsible className="mt-10">{[
      ["Χρειάζεται να αγοράσω ακριβό εξοπλισμό;","Όχι απαραίτητα. Η λύση διαμορφώνεται πάνω στον υπάρχοντα εξοπλισμό σας ή σε νέο εξοπλισμό που προτείνουμε μετά από έλεγχο αναγκών."],
      ["Μπορεί το OrderOn να καλύψει delivery και take away;","Ναι. Η πλατφόρμα οργανώνει παραγγελίες σάλας, delivery και take away από ένα κοινό περιβάλλον."],
      ["Τι γίνεται αν μεγαλώσει η επιχείρησή μου;","Προσθέτετε τερματικά και συσκευές ανάλογα με τις ανάγκες σας, χωρίς να αλλάξετε τον τρόπο λειτουργίας της ομάδας."],
      ["Υπάρχει τεχνική υποστήριξη;","Ναι. Παρέχεται υποστήριξη 24/7 και απομακρυσμένη διάγνωση, ώστε η λειτουργία σας να συνεχίζεται απρόσκοπτα."],
      ["Είναι έτοιμο για myDATA και ΑΑΔΕ;","Το OrderOn έχει σχεδιαστεί με ετοιμότητα διασύνδεσης για τις σύγχρονες φορολογικές απαιτήσεις. Η ακριβής διαμόρφωση επιβεβαιώνεται ανά εγκατάσταση."],
    ].map(([q,a],i)=><AccordionItem value={`q${i}`} key={q}><AccordionTrigger className="py-6 text-base">{q}</AccordionTrigger><AccordionContent className="pb-6 leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section id="contact" className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><span className="eyebrow">Επικοινωνία</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ας δούμε τι χρειάζεται η επιχείρησή σας.</h2><p className="mt-5 text-lg text-muted-foreground">OrderOn, δίκτυα, Wi-Fi ή ασφάλεια — ξεκινάμε με τις πραγματικές ανάγκες του χώρου σας.</p><div className="mt-8 grid gap-5 text-sm"><a href="mailto:info@cloudnet.gr" className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-md bg-secondary"><Mail className="size-5 text-tech"/></span><span><span className="block text-muted-foreground">Email</span><strong>info@cloudnet.gr</strong></span></a><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-md bg-secondary"><PhoneCall className="size-5 text-tech"/></span><span><span className="block text-muted-foreground">Τηλεφωνική επικοινωνία</span><strong>Ζητήστε να σας καλέσουμε</strong></span></div><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-md bg-secondary"><MapPin className="size-5 text-tech"/></span><span><span className="block text-muted-foreground">Εξυπηρέτηση</span><strong>Επιχειρήσεις σε όλη την Ελλάδα</strong></span></div></div></div><div className="rounded-lg border bg-card p-6 shadow-soft sm:p-8"><h3 className="text-2xl font-bold">Ζητήστε εκτίμηση</h3><p className="mt-2 text-sm text-muted-foreground">Πείτε μας τι σας ενδιαφέρει και θα επικοινωνήσουμε μαζί σας.</p><DemoForm/></div></div></section>

    <footer className="border-t bg-section"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8"><img src={cloudnetLogo.url} alt="CloudNet" className="h-14 w-auto self-start"/><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><a href="#orderon">OrderOn</a><a href="#services">Υπηρεσίες</a><a href="mailto:info@cloudnet.gr">info@cloudnet.gr</a></div><p className="text-xs text-muted-foreground">© 2026 CloudNet. POS | Networks | Security</p></div></footer>
  </main>;
}