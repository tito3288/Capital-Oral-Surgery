export type DoctorSection = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
};

export type DoctorCardSection = {
  eyebrow: string;
  heading: string;
  cards: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

export type DoctorListSection = {
  eyebrow: string;
  heading: string;
  intro?: string;
  lists: Array<{
    title: string;
    items: string[];
  }>;
};

export type Doctor = {
  name: string;
  slug: string;
  initials: string;
  role: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: string;
  heroLead: string;
  sections: {
    background: DoctorSection;
    expertise: DoctorCardSection;
    affiliations: DoctorListSection;
    recognition: DoctorListSection;
  };
};

export const doctors = [
  {
    name: "Dr. Patrick Lucaci",
    slug: "patrick-lucaci",
    initials: "PL",
    role: "Oral Surgeon in Topeka KS",
    image: "/images/doctor-patrick-lucaci.jpg",
    imageAlt: "Dr. Patrick Lucaci",
    imageWidth: 600,
    imageHeight: 600,
    imagePosition: "50% 45%",
    heroLead:
      "A board-certified oral and maxillofacial surgeon with dental, medical, and surgical training, Dr. Patrick Lucaci brings a steady, detail-oriented approach to specialty care in Topeka.",
    sections: {
      background: {
        eyebrow: "Background",
        heading: "a lifelong path toward medicine and oral surgery.",
        paragraphs: [
          "Born and raised in Kampala, Uganda, Dr. Patrick Lucaci is the eldest of five children and grew up with a lifelong dream of pursuing medicine.",
          "He earned his Bachelor of Dental Surgery degree from Makerere University in 1999, with additional credits from Queen's University in Belfast and the Karolinska Institutet in Stockholm, Sweden.",
          "After moving to the United States, Dr. Lucaci earned his Doctor of Dental Surgery degree from the University of Missouri-Kansas City in 2009, then continued on to receive his medical degree from the University of Missouri School of Medicine in 2012.",
          "He then returned to UMKC, completed a year of General Surgery Residency in 2013, and earned his Certificate in Oral and Maxillofacial Surgery from UMKC School of Medicine in 2015.",
        ],
      },
      expertise: {
        eyebrow: "Skills and Specialties",
        heading: "surgical precision for complex oral health needs.",
        cards: [
          {
            title: "Oral and Maxillofacial Surgery",
            paragraphs: [
              "With training in both dentistry and medicine, Dr. Lucaci has a deep understanding of facial anatomy, oral structures, and the surgical planning required for complex care.",
              "His clinical work includes procedures such as dental implants, wisdom teeth removal, extractions, bone grafting, oral pathology, and reconstructive oral surgery.",
            ],
          },
          {
            title: "Patient-Centered Care",
            paragraphs: [
              "Dr. Lucaci helps patients understand their diagnosis, treatment options, and recovery plan before moving forward with care.",
              "His approach pairs surgical expertise with a calm chairside manner, helping patients feel informed and supported throughout the process.",
            ],
          },
        ],
      },
      affiliations: {
        eyebrow: "Education and Training",
        heading: "medical training with oral surgery focus.",
        intro:
          "Dr. Lucaci's training combines dental surgery, medicine, general surgery, and oral and maxillofacial surgery.",
        lists: [
          {
            title: "Training and Certifications",
            items: [
              "Bachelor of Dental Surgery, Makerere University",
              "Doctor of Dental Surgery, University of Missouri-Kansas City",
              "Doctor of Medicine, University of Missouri School of Medicine",
              "General Surgery Residency, UMKC",
              "Certificate in Oral and Maxillofacial Surgery, UMKC School of Medicine",
              "Advanced certifications in ACLS, BLS, PALS, and ATLS",
            ],
          },
        ],
      },
      recognition: {
        eyebrow: "Affiliations and Accomplishments",
        heading: "connected to trusted dental and surgical communities.",
        intro:
          "Dr. Lucaci is a board-certified surgeon and is involved with respected professional organizations. He has also contributed lectures and presentations on oral surgery, pathology, reconstruction, facial trauma, and implant surgery.",
        lists: [
          {
            title: "Professional Memberships",
            items: [
              "American Dental Association",
              "American Association of Oral and Maxillofacial Surgeons",
              "American College of Oral and Maxillofacial Surgeons",
              "Kansas Dental Association",
              "Missouri Dental Association",
              "American Academy of Oral and Maxillofacial Radiology",
              "American Society of Dental Anesthesiologists",
              "International Association of Oral and Maxillofacial Surgeons",
              "Kansas Society of Oral and Maxillofacial Surgeons",
            ],
          },
          {
            title: "Lectures and Recognition",
            items: [
              "Presented on dental implant surgery, pathology, reconstructive surgery, maxillofacial trauma, and facial cosmetic surgery",
              "Lectured on clinical implications of ameloblastoma and mandibular subcondyle fracture treatment options",
              "Presented on facial injury management for sports medicine audiences",
              "Recipient of the International Youth Leadership Award by Habitat for Humanity",
              "Recipient of the Dentsply Award for Best Table Clinic",
            ],
          },
        ],
      },
    },
  },
  {
    name: "Dr. Owen Lonergan",
    slug: "owen-lonergan",
    initials: "OL",
    role: "Oral Surgeon in Topeka KS",
    image: "/images/doctor-owen-lonergan.jpg",
    imageAlt: "Dr. Owen Lonergan",
    imageWidth: 270,
    imageHeight: 405,
    imagePosition: "50% 18%",
    heroLead:
      "Dr. Owen Lonergan is an oral and maxillofacial surgeon with dental, medical, public health, surgical, and teaching experience.",
    sections: {
      background: {
        eyebrow: "Background",
        heading: "a path shaped by discipline, education, and surgery.",
        paragraphs: [
          "Dr. Owen Lonergan grew up in Texas, where he excelled in athletics as a soccer player and captain of his State Championship wrestling team.",
          "After high school, he pursued a Bachelor of Science degree in biology at the University of California, San Diego.",
          "During his time in San Diego, Dr. Lonergan learned to surf, played intramural soccer, and started a wrestling club.",
        ],
      },
      expertise: {
        eyebrow: "Education and Training",
        heading: "dental, medical, and surgical training.",
        cards: [
          {
            title: "Dental and Public Health Education",
            paragraphs: [
              "Dr. Lonergan attended the Arizona School of Dentistry and Oral Health and the Arizona School of Health Sciences in Phoenix, Arizona.",
              "He received his Doctor of Dental Medicine degree and a Master of Public Health degree concurrently in 2010.",
            ],
          },
          {
            title: "Oral Surgery Residency",
            paragraphs: [
              "Following dental school, Dr. Lonergan pursued residency training in oral and maxillofacial surgery at the University of Missouri-Kansas City.",
              "During residency, he earned his Doctor of Medicine degree from the University of Missouri-Kansas City College of Medicine in 2014, completed a year of general surgery in 2015, and received his certification in oral surgery from the UMKC Oral & Maxillofacial Surgery Residency in 2017.",
            ],
          },
        ],
      },
      affiliations: {
        eyebrow: "Teaching and Curriculum",
        heading: "experience educating future dental professionals.",
        intro:
          "After residency, Dr. Lonergan served as a clinical faculty member in the oral surgery department for the UMKC School of Dentistry.",
        lists: [
          {
            title: "Academic Work",
            items: [
              "Served as a clinical professor at the UMKC School of Dentistry",
              "Taught several oral surgery courses to dental students",
              "Serves as a consultant for oral surgery curriculum development for educational programs",
            ],
          },
        ],
      },
      recognition: {
        eyebrow: "Credentials and Memberships",
        heading: "board-certified oral and maxillofacial surgery care.",
        intro:
          "Dr. Lonergan is a Diplomate of the American Board of Oral and Maxillofacial Surgery and maintains certifications in ACLS and BLS.",
        lists: [
          {
            title: "Professional Memberships",
            items: [
              "American Association of Oral and Maxillofacial Surgeons",
              "Greater Kansas City Society of Oral and Maxillofacial Surgeons",
            ],
          },
          {
            title: "Personal",
            items: [
              "Dr. Lonergan is married and resides in Kansas City, where he and his wife are raising their daughter.",
            ],
          },
        ],
      },
    },
  },
  {
    name: "Dr. Emily Eickhoff",
    slug: "emily-eickhoff",
    initials: "EE",
    role: "Oral Surgeon in Topeka KS",
    image: "/images/doctor-emily-eickhoff.jpeg",
    imageAlt: "Dr. Emily Eickhoff",
    imageWidth: 2048,
    imageHeight: 1365,
    imagePosition: "50% 50%",
    heroLead:
      "Dr. Emily Eickhoff brings military, dental, and oral surgery experience to Capital Oral Surgery & Dental Implants, along with a deep commitment to compassionate patient care.",
    sections: {
      background: {
        eyebrow: "Background",
        heading: "military and surgical experience with a heart for patient care.",
        paragraphs: [
          "Dr. Emily Eickhoff joined Capital Oral Surgery & Dental Implants on April 3, 2026.",
          "She brings extensive military and surgical experience to the practice, along with a deep commitment to helping patients feel comfortable throughout their treatment journey.",
          "Dr. Eickhoff finds the greatest reward in caring for oral surgery patients and helping them improve both their oral health and their confidence.",
        ],
      },
      expertise: {
        eyebrow: "Education and Training",
        heading: "advanced dental and oral surgery training.",
        cards: [
          {
            title: "Dental Education",
            paragraphs: [
              "Dr. Eickhoff earned her Doctor of Dental Surgery degree from the University of North Carolina School of Dentistry, where she studied from 2015 to 2019.",
              "Following dental school, she completed an Advanced Education in General Dentistry residency with the U.S. Army at Fort Carson, Colorado, from 2019 to 2020.",
            ],
          },
          {
            title: "Oral Surgery Residency",
            paragraphs: [
              "Driven by her passion for oral surgery, Dr. Eickhoff completed a rigorous Oral and Maxillofacial Surgery Residency at Brooke Army Medical Center in Fort Sam Houston, Texas, from 2021 to 2025.",
              "Her training reflects a strong foundation in surgical care, military service, and patient-centered treatment.",
            ],
          },
        ],
      },
      affiliations: {
        eyebrow: "Military Service",
        heading: "service through dentistry and oral surgery.",
        intro:
          "Dr. Eickhoff's military experience includes general dentistry, advanced residency training, and oral surgery care in Army medical settings.",
        lists: [
          {
            title: "Service Experience",
            items: [
              "Advanced Education in General Dentistry residency, U.S. Army, Fort Carson, Colorado",
              "General Dentist, Rhoades Dental Clinic, Fort Sam Houston, Texas",
              "Oral and Maxillofacial Surgery Residency, Brooke Army Medical Center, Fort Sam Houston, Texas",
              "Oral Surgeon, Irwin Army Community Hospital, Fort Riley, Kansas",
            ],
          },
        ],
      },
      recognition: {
        eyebrow: "Patient Care",
        heading: "compassionate care for healthier, more confident smiles.",
        intro:
          "Dr. Eickhoff takes pride in providing high-quality surgical care while helping patients feel supported before, during, and after treatment.",
        lists: [
          {
            title: "Personal",
            items: [
              "Dr. Eickhoff has been married for more than a decade.",
              "She enjoys hiking, camping, and running in her free time.",
              "She values health, wellness, spending time in nature, and helping others inside and outside of her professional life.",
            ],
          },
        ],
      },
    },
  },
] satisfies Doctor[];

export const getDoctorBySlug = (slug: string) =>
  doctors.find((doctor) => doctor.slug === slug);
