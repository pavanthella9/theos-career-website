import Link from "next/link";
import {
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Globe2,
  Handshake,
  Headphones,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const stats = [
  { icon: UsersRound, value: "1000+", label: "Students Trained", tone: "blue" },
  { icon: BriefcaseBusiness, value: "500+", label: "Placement Outcomes", tone: "green" },
  { icon: Building2, value: "200+", label: "Employer Connections", tone: "purple" },
  { icon: Award, value: "3", label: "Countries Served", tone: "orange" },
];

const programs = [
  { icon: GraduationCap, title: "IT Training", tone: "blue", items: ["Cloud & DevOps", "Full Stack Development", "Data Analytics", "Software Testing"] },
  { icon: UsersRound, title: "Non-IT Training", tone: "green", items: ["Digital Marketing", "HR & Payroll", "Accounting", "Customer Service"] },
  { icon: TrendingUp, title: "Career Skills", tone: "purple", items: ["Communication", "Interview Preparation", "Resume Building", "Aptitude"] },
  { icon: Award, title: "Job Readiness", tone: "orange", items: ["Practical Projects", "Mock Interviews", "Profile Branding", "Placement Support"] },
];

const strengths = [
  { icon: Target, title: "Industry-focused training", text: "Practical programs aligned to real job requirements." },
  { icon: UsersRound, title: "Personal career guidance", text: "Individual support based on skills and goals." },
  { icon: MessageSquareText, title: "Interview preparation", text: "Resume reviews, mock interviews and confidence building." },
  { icon: Handshake, title: "Employer network", text: "Recruitment connections across IT and non-IT sectors." },
  { icon: TrendingUp, title: "Placement assistance", text: "Structured support from application to interview." },
  { icon: ShieldCheck, title: "Transparent process", text: "Clear guidance without false job or visa guarantees." },
];

const process = [
  ["01", "Career consultation", "We understand your background, interests and target role."],
  ["02", "Skill development", "You receive practical training and a clear learning roadmap."],
  ["03", "Profile preparation", "We strengthen your resume, LinkedIn profile and interview readiness."],
  ["04", "Opportunity support", "We guide applications and connect suitable profiles with employers."],
];

const jobs = [
  ["Cloud & DevOps Engineer", "IT", "India"],
  ["Customer Support Executive", "Non-IT", "India"],
  ["Software Developer", "IT", "Singapore"],
  ["Accounts Executive", "Non-IT", "Malaysia"],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-matched">
        <div className="container hero-match-grid">
          <div className="hero-match-copy">
            <span className="hero-kicker">Training • Recruitment • Placement Assistance</span>
            <h1>Build the right skills.<br />Reach the right<br /><span>opportunities.</span></h1>
            <p>Theos Career Consultants prepares candidates for IT and non-IT careers across India, Singapore and Malaysia through practical training, career guidance and ethical placement assistance.</p>
            <div className="hero-actions matched-actions">
              <Link className="button" href="/training"><GraduationCap size={18} /> Explore Programs</Link>
              <Link className="button button-outline" href="/placements"><UsersRound size={18} /> Placement Assistance</Link>
              <Link className="button button-orange" href="/contact"><Headphones size={18} /> Talk to an Advisor</Link>
            </div>
          </div>

          <div className="border-card">
            <div className="world-grid" />
            <div className="border-card-title"><Globe2 size={30} /><strong>Opportunities Across Borders</strong></div>
            <div className="country-grid">
              <article><span>🇮🇳</span><h3>India</h3><p>Training and placement assistance</p></article>
              <article><span>🇸🇬</span><h3>Singapore</h3><p>Career readiness and opportunity support</p></article>
              <article><span>🇲🇾</span><h3>Malaysia</h3><p>Career readiness and opportunity support</p></article>
            </div>
            <div className="ethics-note"><ShieldCheck size={17} /> Ethical Guidance • Transparent Process • No Job Guarantee • No Visa Guarantee</div>
          </div>
        </div>

        <div className="container stats-strip">
          {stats.map(({ icon: Icon, value, label, tone }) => (
            <div className="stat-item" key={label}>
              <span className={`stat-icon ${tone}`}><Icon /></span>
              <div><strong>{value}</strong><small>{label}</small></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section programs-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Programs built for employability</span>
            <h2>Training that prepares you for real opportunities</h2>
            <p>Choose practical IT, non-IT and career-readiness programs designed around current workplace expectations.</p>
          </div>
          <div className="programs-match-grid">
            {programs.map(({ icon: Icon, title, tone, items }) => (
              <article className={`program-match-card ${tone}`} key={title}>
                <div className="program-title"><span><Icon /></span><h3>{title}</h3></div>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                <Link href="/training">View programs <ChevronRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-section">
          <div>
            <span className="section-kicker">Why choose Theos</span>
            <h2>A clear, ethical path from learning to opportunity</h2>
            <p>We combine practical training, career counselling and recruitment support so candidates understand what to improve and how to move forward.</p>
            <Link href="/about" className="text-link">Learn more about Theos <ChevronRight size={17} /></Link>
          </div>
          <div className="strengths-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article key={title}><span><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">How it works</span>
            <h2>Your career journey, simplified</h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section jobs-section">
        <div className="container">
          <div className="section-heading row-heading">
            <div><span className="section-kicker">Career opportunities</span><h2>Featured job categories</h2></div>
            <Link href="/jobs" className="button button-outline">View all jobs</Link>
          </div>
          <div className="jobs-grid">
            {jobs.map(([title, category, location]) => (
              <article key={title}>
                <span className="job-icon"><BriefcaseBusiness /></span>
                <div><h3>{title}</h3><p>{category} • {location}</p></div>
                <Link href="/contact" aria-label={`Enquire about ${title}`}><ChevronRight /></Link>
              </article>
            ))}
          </div>
          <p className="disclaimer">Job listings and employer requirements may change. Applications and interviews are subject to employer selection. Theos does not guarantee employment or visa approval.</p>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <div><span className="section-kicker light">Start your next career step</span><h2>Need guidance choosing the right program or role?</h2><p>Speak with our team for a practical career consultation.</p></div>
          <Link className="button button-light" href="/contact"><Sparkles size={18} /> Book a Free Consultation</Link>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar-grid">
          <div><ShieldCheck /><span><strong>Ethical Practices</strong><small>Transparent and honest guidance</small></span></div>
          <div><Globe2 /><span><strong>Global Opportunities</strong><small>India • Singapore • Malaysia</small></span></div>
          <div><UsersRound /><span><strong>Career-first Support</strong><small>Training, profiles and interviews</small></span></div>
          <div><Headphones /><span><strong>Support at Every Step</strong><small>From enquiry to placement assistance</small></span></div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
