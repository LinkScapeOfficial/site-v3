/**
 * Every deliverable in the organizational pack, published or internal.
 * Generated from the pack's README; do not hand-edit.
 */

export type Access = "public" | "internal";

export interface DocRecord {
  id: string;
  title: string;
  domain: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  access: Access;
}

export const docRegister: DocRecord[] = [
  { id: "G-01", title: "Mission, Vision & Values Statement", domain: "Governance", priority: "CRITICAL", access: "public" },
  { id: "G-02", title: "Updated Organizational Ordinance", domain: "Governance", priority: "CRITICAL", access: "public" },
  { id: "G-03", title: "Organizational Bylaws", domain: "Governance", priority: "HIGH", access: "public" },
  { id: "G-04", title: "Leadership Roster & Org Chart", domain: "Governance", priority: "HIGH", access: "public" },
  { id: "G-05", title: "Conflict of Interest Policy", domain: "Governance", priority: "CRITICAL", access: "public" },
  { id: "G-06", title: "HCB Fiscal Sponsorship Summary", domain: "Governance", priority: "HIGH", access: "public" },
  { id: "G-07", title: "Decision Authority Matrix", domain: "Governance", priority: "MEDIUM", access: "internal" },
  { id: "G-08", title: "Advisory Board Charter", domain: "Governance", priority: "LOW", access: "public" },
  { id: "G-09", title: "Annual Reporting Framework", domain: "Governance", priority: "MEDIUM", access: "internal" },
  { id: "G-10", title: "Compliance Calendar", domain: "Governance", priority: "MEDIUM", access: "internal" },
  { id: "G-11", title: "Dissolution Procedures", domain: "Governance", priority: "LOW", access: "public" },
  { id: "G-12", title: "Governance Review Process", domain: "Governance", priority: "MEDIUM", access: "internal" },
  { id: "G-13", title: "Strategic Planning Framework", domain: "Governance", priority: "MEDIUM", access: "internal" },
  { id: "G-14", title: "Succession Planning Framework", domain: "Governance", priority: "HIGH", access: "internal" },
  { id: "F-01", title: "Annual Budget Template", domain: "Finance", priority: "HIGH", access: "internal" },
  { id: "F-02", title: "Expense Policy & Procedures", domain: "Finance", priority: "CRITICAL", access: "internal" },
  { id: "F-03", title: "Compute Resource Usage Policy", domain: "Finance", priority: "CRITICAL", access: "internal" },
  { id: "F-04", title: "Fundraising Guidelines", domain: "Finance", priority: "MEDIUM", access: "public" },
  { id: "F-05", title: "Financial Reporting Standards", domain: "Finance", priority: "MEDIUM", access: "internal" },
  { id: "F-06", title: "Procurement Policy", domain: "Finance", priority: "MEDIUM", access: "internal" },
  { id: "F-07", title: "Asset Management Policy", domain: "Finance", priority: "MEDIUM", access: "internal" },
  { id: "F-08", title: "Financial Controls Checklist", domain: "Finance", priority: "HIGH", access: "internal" },
  { id: "F-09", title: "Reserve Fund Policy", domain: "Finance", priority: "LOW", access: "internal" },
  { id: "O-01", title: "Operations Manual", domain: "Operations", priority: "HIGH", access: "internal" },
  { id: "O-02", title: "Communication Protocols", domain: "Operations", priority: "HIGH", access: "internal" },
  { id: "O-03", title: "Meeting Framework", domain: "Operations", priority: "MEDIUM", access: "internal" },
  { id: "O-04", title: "Document Management System", domain: "Operations", priority: "HIGH", access: "internal" },
  { id: "O-05", title: "Tool Stack Documentation", domain: "Operations", priority: "MEDIUM", access: "internal" },
  { id: "O-06", title: "Incident Response Plan", domain: "Operations", priority: "HIGH", access: "internal" },
  { id: "O-07", title: "Backup & Recovery Procedures", domain: "Operations", priority: "HIGH", access: "internal" },
  { id: "O-08", title: "Vendor Management Guidelines", domain: "Operations", priority: "LOW", access: "internal" },
  { id: "O-09", title: "Quality Assurance Framework", domain: "Operations", priority: "MEDIUM", access: "internal" },
  { id: "O-10", title: "Remote Work Guidelines", domain: "Operations", priority: "MEDIUM", access: "internal" },
  { id: "O-11", title: "Continuous Improvement Process", domain: "Operations", priority: "MEDIUM", access: "internal" },
  { id: "P-01", title: "PM Methodology Guide", domain: "Projects", priority: "HIGH", access: "internal" },
  { id: "P-02", title: "Project Approval Process", domain: "Projects", priority: "CRITICAL", access: "internal" },
  { id: "P-03", title: "Project Charter Template", domain: "Projects", priority: "HIGH", access: "internal" },
  { id: "P-04", title: "Project Status Report Template", domain: "Projects", priority: "MEDIUM", access: "internal" },
  { id: "P-05", title: "Change Request Process", domain: "Projects", priority: "HIGH", access: "internal" },
  { id: "P-06", title: "Risk Management Template", domain: "Projects", priority: "MEDIUM", access: "internal" },
  { id: "P-07", title: "Lessons Learned Template", domain: "Projects", priority: "MEDIUM", access: "internal" },
  { id: "P-08", title: "Project Closure Checklist", domain: "Projects", priority: "MEDIUM", access: "internal" },
  { id: "P-09", title: "Portfolio Dashboard Design", domain: "Projects", priority: "LOW", access: "internal" },
  { id: "P-10", title: "Project Retrospective Guide", domain: "Projects", priority: "LOW", access: "internal" },
  { id: "E-01", title: "Responsible AI Policy", domain: "Ethics", priority: "CRITICAL", access: "public" },
  { id: "E-02", title: "Data Privacy Policy", domain: "Ethics", priority: "CRITICAL", access: "public" },
  { id: "E-03", title: "Research Ethics Guidelines", domain: "Ethics", priority: "HIGH", access: "public" },
  { id: "E-04", title: "Model Card Template", domain: "Ethics", priority: "MEDIUM", access: "public" },
  { id: "E-05", title: "Ethical Review Board Charter", domain: "Ethics", priority: "MEDIUM", access: "internal" },
  { id: "E-06", title: "Open Source Contribution Policy", domain: "Ethics", priority: "MEDIUM", access: "public" },
  { id: "E-07", title: "Environmental Impact Statement", domain: "Ethics", priority: "LOW", access: "public" },
  { id: "E-08", title: "AI Incident Response Protocol", domain: "Ethics", priority: "HIGH", access: "internal" },
  { id: "PP-01", title: "Code of Conduct", domain: "People", priority: "CRITICAL", access: "public" },
  { id: "PP-02", title: "IP Assignment Agreement", domain: "People", priority: "CRITICAL", access: "internal" },
  { id: "PP-03", title: "Recruitment Process", domain: "People", priority: "HIGH", access: "internal" },
  { id: "PP-04", title: "Onboarding Checklist", domain: "People", priority: "HIGH", access: "internal" },
  { id: "PP-05", title: "Member Handbook", domain: "People", priority: "HIGH", access: "internal" },
  { id: "PP-06", title: "Anti-Harassment Policy", domain: "People", priority: "CRITICAL", access: "public" },
  { id: "PP-07", title: "Offboarding Procedures", domain: "People", priority: "MEDIUM", access: "internal" },
  { id: "PP-08", title: "Performance Feedback Framework", domain: "People", priority: "MEDIUM", access: "internal" },
  { id: "PP-09", title: "Recognition Program", domain: "People", priority: "LOW", access: "internal" },
  { id: "PP-10", title: "Learning & Development Guide", domain: "People", priority: "MEDIUM", access: "internal" },
  { id: "PP-11", title: "Team Structure Guide", domain: "People", priority: "HIGH", access: "internal" },
  { id: "PP-12", title: "Volunteer Time Commitment Policy", domain: "People", priority: "HIGH", access: "public" },
  { id: "PP-13", title: "DEI Statement & Initiatives", domain: "People", priority: "MEDIUM", access: "public" },
  { id: "PP-14", title: "Member Engagement Survey", domain: "People", priority: "LOW", access: "internal" },
  { id: "I-01", title: "Theory of Change", domain: "Impact", priority: "HIGH", access: "public" },
  { id: "I-02", title: "Impact Measurement Framework", domain: "Impact", priority: "HIGH", access: "public" },
  { id: "I-03", title: "Stakeholder Engagement Plan", domain: "Impact", priority: "MEDIUM", access: "internal" },
  { id: "I-04", title: "Program Evaluation Methodology", domain: "Impact", priority: "MEDIUM", access: "internal" },
  { id: "I-05", title: "External Communications Strategy", domain: "Impact", priority: "MEDIUM", access: "internal" },
  { id: "I-06", title: "Partnership Framework", domain: "Impact", priority: "MEDIUM", access: "public" },
  { id: "I-07", title: "Annual Impact Report Template", domain: "Impact", priority: "LOW", access: "internal" },
  { id: "S-01", title: "Access Control Policy", domain: "Security", priority: "CRITICAL", access: "internal" },
  { id: "S-02", title: "Information Security Policy", domain: "Security", priority: "HIGH", access: "internal" },
  { id: "S-03", title: "Security Incident Procedures", domain: "Security", priority: "HIGH", access: "internal" },
  { id: "S-04", title: "Acceptable Use Policy", domain: "Security", priority: "HIGH", access: "internal" },
];

export const domains = Array.from(new Set(docRegister.map((d) => d.domain)));

export const registerStats = {
  total: docRegister.length,
  published: docRegister.filter((d) => d.access === "public").length,
};
