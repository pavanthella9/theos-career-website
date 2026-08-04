import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  HardHat,
  HeartPulse,
  Hotel,
  MapPin,
  Settings,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./jobs.module.css";

export const metadata: Metadata = {
  title: "Current Job Openings",
  description:
    "View current IT and non-IT job openings in Singapore and India through Theos Career Consultants.",
};

type IconType = typeof Stethoscope;

type Job = {
  position: string;
  title: string;
  industry: string;
  location: string;
  description: string;
  icon: IconType;
};

const singaporeJobs: Job[] = [
  {
    position: "01",
    title: "Nurses",
    industry: "Healthcare",
    location: "Singapore",
    description:
      "Opportunities for qualified nurses across hospitals and healthcare facilities.",
    icon: Stethoscope,
  },
  {
    position: "02",
    title: "Physiotherapist",
    industry: "Healthcare",
    location: "Singapore",
    description:
      "Physiotherapy opportunities across hospitals, clinics and rehabilitation centres.",
    icon: HeartPulse,
  },
  {
    position: "03",
    title: "AWS Cloud Engineer",
    industry: "Information Technology",
    location: "Singapore",
    description:
      "Cloud infrastructure, deployment, monitoring and AWS platform support roles.",
    icon: Cloud,
  },
  {
    position: "04",
    title: "DevOps Engineer",
    industry: "Information Technology",
    location: "Singapore",
    description:
      "CI/CD, automation, containers, cloud operations and infrastructure engineering roles.",
    icon: Code2,
  },
  {
    position: "05",
    title: "System Administrator",
    industry: "Information Technology",
    location: "Singapore",
    description:
      "Server administration, networking, system support, security and troubleshooting roles.",
    icon: Settings,
  },
  {
    position: "06",
    title: "Salesforce Developer",
    industry: "Information Technology",
    location: "Singapore",
    description:
      "Salesforce application development, customisation, integration and platform support roles.",
    icon: Building2,
  },
  {
    position: "07",
    title: "Human Resources Professionals",
    industry: "Human Resources",
    location: "Singapore",
    description:
      "Recruitment, employee relations, HR operations and talent-management opportunities.",
    icon: UsersRound,
  },
  {
    position: "08",
    title: "School Teachers",
    industry: "Education",
    location: "Singapore",
    description:
      "Teaching opportunities for primary, secondary and school-level academic programmes.",
    icon: GraduationCap,
  },
  {
    position: "09",
    title: "Civil Engineer",
    industry: "Engineering & Construction",
    location: "Singapore",
    description:
      "Site execution, planning, quality control and construction project opportunities.",
    icon: HardHat,
  },
  {
    position: "10",
    title: "Mechanical Engineer",
    industry: "Engineering & Manufacturing",
    location: "Singapore",
    description:
      "Mechanical design, maintenance, project execution and MEP-related opportunities.",
    icon: Activity,
  },
  {
    position: "11",
    title: "Hospitality Professionals",
    industry: "Hospitality",
    location: "Singapore",
    description:
      "Hotel operations, front office, food and beverage service, and housekeeping roles.",
    icon: Hotel,
  },
];

const indiaJobs: Job[] = [
  {
    position: "12",
    title: "Business Analyst",
    industry: "IT & Business Analytics",
    location: "Bangalore, Hyderabad, Noida",
    description:
      "Business requirements, process analysis, documentation and stakeholder coordination roles.",
    icon: BriefcaseBusiness,
  },
  {
    position: "13",
    title: "Data Analyst",
    industry: "Data & Analytics",
    location: "Bangalore, Hyderabad, Noida",
    description:
      "Data reporting, dashboards, insights, SQL and business intelligence opportunities.",
    icon: Activity,
  },
  {
    position: "14",
    title: "SAP Consultants — All Modules",
    industry: "ERP & Enterprise Applications",
    location: "Bangalore, Hyderabad, Noida",
    description:
      "Openings across SAP FI, CO, MM, SD, PP, HCM, BW, BASIS, CRM and related modules.",
    icon: Building2,
  },
];

function JobCard({ job }: { job: Job }) {
  const Icon = job.icon;

  return (
    <article className={styles.jobCard}>
      <div className={styles.cardTop}>
        <span className={styles.position}>Position {job.position}</span>
        <span className={styles.iconBox} aria-hidden="true">
          <Icon size={22} />
        </span>
      </div>

      <p className={styles.industry}>{job.industry}</p>
      <h3>{job.title}</h3>

      <p className={styles.description}>{job.description}</p>

      <div className={styles.cardFooter}>
        <span className={styles.location}>
          <MapPin size={15} />
          {job.location}
        </span>

        <Link className={styles.applyLink} href="/contact">
          Apply / Enquire
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function CountrySection({
  code,
  title,
  subtitle,
  jobs,
  tone,
}: {
  code: string;
  title: string;
  subtitle: string;
  jobs: Job[];
  tone: "singapore" | "india";
}) {
  return (
    <section className={styles.countrySection}>
      <div className={styles.countryHeading}>
        <div>
          <span className={`${styles.countryCode} ${styles[tone]}`}>{code}</span>
          <div>
            <p className={styles.countryLabel}>Current Openings</p>
            <h2>{title}</h2>
          </div>
        </div>
        <p>{subtitle}</p>
      </div>

      <div className={styles.jobsGrid}>
        {jobs.map((job) => (
          <JobCard key={`${job.position}-${job.title}`} job={job} />
        ))}
      </div>
    </section>
  );
}

export default function JobsPage() {
  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Jobs by industry and location</p>
          <h1>Current Openings</h1>
          <p className={styles.heroCopy}>
            Explore current IT and non-IT opportunities in Singapore and India.
            Positions are listed in order and clearly grouped by industry.
          </p>
          <Link className="button" href="/contact">
            Submit Your Profile
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <div className={`container ${styles.content}`}>
        <aside className={styles.notice}>
          <strong>Important:</strong> Applications are subject to employer
          requirements, eligibility, shortlisting and final selection. Theos
          Career Consultants provides career guidance and placement assistance
          and does not guarantee employment or visa approval.
        </aside>

        <CountrySection
          code="SG"
          title="Singapore"
          subtitle="Healthcare, IT, HR, education, engineering and hospitality opportunities."
          jobs={singaporeJobs}
          tone="singapore"
        />

        <CountrySection
          code="IN"
          title="India"
          subtitle="Openings in Bangalore, Hyderabad and Noida."
          jobs={indiaJobs}
          tone="india"
        />

        <section className={styles.resumeCta}>
          <div>
            <p className={styles.countryLabel}>Cannot find your role?</p>
            <h2>Share your resume with our career team</h2>
            <p>
              We will review your profile and contact you when a suitable
              opportunity is available.
            </p>
          </div>
          <Link className="button" href="/contact">
            Submit Resume
            <ArrowRight size={17} />
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
