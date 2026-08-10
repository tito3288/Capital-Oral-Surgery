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
    role: "Oral surgeon in Topeka KS",
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
        heading: "A lifelong path toward medicine and oral surgery.",
        paragraphs: [
          "Born and raised in Kampala, Uganda, Dr. Patrick Lucaci is the eldest of five children and grew up with a lifelong dream of pursuing medicine.",
          "He earned his Bachelor of Dental Surgery degree from Makerere University in 1999, with additional credits from Queen's University in Belfast and the Karolinska Institutet in Stockholm, Sweden.",
          "After moving to the United States, Dr. Lucaci earned his Doctor of Dental Surgery degree from the University of Missouri-Kansas City in 2009, then continued on to receive his medical degree from the University of Missouri School of Medicine in 2012.",
          "He then returned to UMKC, completed a year of General Surgery Residency in 2013, and earned his Certificate in Oral and Maxillofacial Surgery from UMKC School of Medicine in 2015.",
        ],
      },
      expertise: {
        eyebrow: "Skills and specialties",
        heading: "Surgical precision for complex oral health needs.",
        cards: [
          {
            title: "Oral and maxillofacial surgery",
            paragraphs: [
              "With training in both dentistry and medicine, Dr. Lucaci has a deep understanding of facial anatomy, oral structures, and the surgical planning required for complex care.",
              "His clinical work includes procedures such as dental implants, wisdom teeth removal, extractions, bone grafting, oral pathology, and reconstructive oral surgery.",
            ],
          },
          {
            title: "Patient-centered care",
            paragraphs: [
              "Dr. Lucaci helps patients understand their diagnosis, treatment options, and recovery plan before moving forward with care.",
              "His approach pairs surgical expertise with a calm chairside manner, helping patients feel informed and supported throughout the process.",
            ],
          },
        ],
      },
      affiliations: {
        eyebrow: "Education and training",
        heading: "Medical training with oral surgery focus.",
        intro:
          "Dr. Lucaci's training combines dental surgery, medicine, general surgery, and oral and maxillofacial surgery.",
        lists: [
          {
            title: "Training and certifications",
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
        eyebrow: "Affiliations and accomplishments",
        heading: "Connected to trusted dental and surgical communities.",
        intro:
          "Dr. Lucaci is a board-certified surgeon and is involved with respected professional organizations. He has also contributed lectures and presentations on oral surgery, pathology, reconstruction, facial trauma, and implant surgery.",
        lists: [
          {
            title: "Professional memberships",
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
            title: "Lectures and recognition",
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
    role: "Oral surgeon in Topeka KS",
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
        heading: "A path shaped by discipline, education, and surgery.",
        paragraphs: [
          "Dr. Owen Lonergan grew up in Texas, where he excelled in athletics as a soccer player and captain of his State Championship wrestling team.",
          "After high school, he pursued a Bachelor of Science degree in biology at the University of California, San Diego.",
          "During his time in San Diego, Dr. Lonergan learned to surf, played intramural soccer, and started a wrestling club.",
        ],
      },
      expertise: {
        eyebrow: "Education and training",
        heading: "Dental, medical, and surgical training.",
        cards: [
          {
            title: "Dental and public health education",
            paragraphs: [
              "Dr. Lonergan attended the Arizona School of Dentistry and Oral Health and the Arizona School of Health Sciences in Phoenix, Arizona.",
              "He received his Doctor of Dental Medicine degree and a Master of Public Health degree concurrently in 2010.",
            ],
          },
          {
            title: "Oral surgery residency",
            paragraphs: [
              "Following dental school, Dr. Lonergan pursued residency training in oral and maxillofacial surgery at the University of Missouri-Kansas City.",
              "During residency, he earned his Doctor of Medicine degree from the University of Missouri-Kansas City College of Medicine in 2014, completed a year of general surgery in 2015, and received his certification in oral surgery from the UMKC Oral & Maxillofacial Surgery Residency in 2017.",
            ],
          },
        ],
      },
      affiliations: {
        eyebrow: "Teaching and curriculum",
        heading: "Experience educating future dental professionals.",
        intro:
          "After residency, Dr. Lonergan served as a clinical faculty member in the oral surgery department for the UMKC School of Dentistry.",
        lists: [
          {
            title: "Academic work",
            items: [
              "Served as a clinical professor at the UMKC School of Dentistry",
              "Taught several oral surgery courses to dental students",
              "Serves as a consultant for oral surgery curriculum development for educational programs",
            ],
          },
        ],
      },
      recognition: {
        eyebrow: "Credentials and memberships",
        heading: "Board-certified oral and maxillofacial surgery care.",
        intro:
          "Dr. Lonergan is a Diplomate of the American Board of Oral and Maxillofacial Surgery and maintains certifications in ACLS and BLS.",
        lists: [
          {
            title: "Professional memberships",
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
] satisfies Doctor[];

export const getDoctorBySlug = (slug: string) =>
  doctors.find((doctor) => doctor.slug === slug);
