export const conference = {
  shortName: "IRSES 2027",
  title: "International Conference on Intelligent, Resilient, and Sustainable Energy Systems (IRSES 2027)",
  label: "IRSES 2027",
  heroTitleLines: ["Intelligent, Resilient,", "and Sustainable", "Energy Systems"],
  theme: "A global forum for research shaping smarter, cleaner, and more resilient energy futures.",
  dates: "19-21 February 2027",
  venue: "Dhirubhai Ambani University, Gandhinagar, formerly known as DAIICT",
  host: "DAU",
  description:
    "IRSES 2027 brings together researchers, academicians, industry professionals, and students working on intelligent, resilient, and sustainable energy systems.",
  purpose:
    "The conference will provide a focused platform for sharing research in AI-driven energy systems, cyber-physical energy infrastructure, resilient grids, sustainable energy technologies, and efficient hardware for edge AI systems.",
  footer: "Copyright 2027 IRSES. All rights reserved.",
  logos: [
    {
      name: "Dhirubhai Ambani University",
      src: "./assets/dau-logo.jpg",
    },
    {
      name: "IEEE Gujarat Section",
      src: "./assets/ieee-gujarat-section.png",
    },
    /*{
      name: "Smart Energy Learning Center",
      src: "./assets/smart-energy-learning-center.jpg",
    },*/
  ],
  importantDates: [
    {
      label: "Paper submission opens",
      date: "1 June 2026",
      note: "Submission portal details will be announced soon.",
    },
    {
      label: "Paper submission deadline",
      date: "15 August 2026",
      note: "Authors should submit full papers before the deadline.",
    },
    {
      label: "Acceptance notification",
      date: "1 November 2026",
      note: "Accepted papers will proceed to final submission and registration.",
    },
    {
      label: "Final paper submission",
      date: "1 December 2026",
      note: "Camera-ready paper and author registration details will be required.",
    },
    {
      label: "Conference dates",
      date: "19-21 February 2027",
      note: "IRSES 2027 will be hosted at DAU, Gandhinagar.",
    },
  ],
  tracks: [
    {
      title: "AI and Data-Driven Energy Systems",
      scope: [
        "Machine learning for energy forecasting, optimization, and control",
        "Foundation models and multimodal learning for energy data",
        "Explainable and trustworthy AI in energy systems",
        "AI for energy systems",
        "Causal inference and uncertainty quantification",
      ],
    },
    {
      title: "Cyber-Physical and IoT-Enabled Energy Infrastructure",
      scope: [
        "Smart grids and cyber-physical energy systems",
        "IoT architectures for sensing, monitoring, and control",
        "Edge computing and real-time energy analytics",
        "Digital twins for energy systems",
        "Security and privacy in energy infrastructure",
      ],
    },
    {
      title: "Resilient, Decentralized, and Market-Driven Energy Systems",
      scope: [
        "Grid resilience under climate and extreme events",
        "Distributed energy resources (DERs) and microgrids",
        "Demand response and transactive energy systems",
        "Energy markets, pricing, and game-theoretic models",
        "Policy-aware and regulation-driven system design",
      ],
    },
    {
      title: "Sustainable Energy Technologies and Circular Systems",
      scope: [
        "Renewable energy systems including solar, wind, hydrogen, and hybrid systems",
        "Energy storage technologies and optimization",
        "Waste-to-energy and circular energy systems",
        "Lifecycle analysis and carbon-aware design",
        "Integrated energy systems across electric, thermal, and hydrogen domains",
        "2D materials for photovoltaic applications",
        "AI for climate control",
        "RF energy harvesting",
        "Low-power rectennas",
      ],
    },
    {
      title: "Energy Efficient and Secure Hardware Architecture for Edge AI Systems",
      scope: [
        "Quantum-inspired and next-generation hardware",
        "In-memory computing for AI",
        "Real-time edge intelligence systems",
        "Secure hardware design for AI systems",
        "GPU/NPU optimization for edge inference",
        "Low-power VLSI architectures for AI acceleration",
        "Energy-aware processor design for edge devices",
        "Neuromorphic and bio-inspired architectures",
        "FPGA-based AI accelerators for edge computing",
      ],
    },
  ],

  authorGuidelines: {
    eyebrow: "For Authors",
    title: "Submission Guidelines",
    intro:
      "IRSES 2027 welcomes original, unpublished research contributions aligned with intelligent, resilient, and sustainable energy systems. Authors must prepare manuscripts in IEEE conference format and complete all submission, registration, compliance, and presentation requirements within the announced deadlines.",
    actions: [
      {
        label: "IEEE Manuscript Templates",
        href: "https://www.ieee.org/conferences/publishing/templates.html",
        style: "primary",
      },
      {
        label: "IEEE Submission Policies",
        href: "https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/",
        style: "secondary",
      },
    ],
    essentials: [
      { label: "Format", value: "IEEE two-column conference template" },
      { label: "Length", value: "Maximum 6 pages" },
      { label: "Upload", value: "PDF only through Microsoft CMT" },
      { label: "Final upload", value: "Author registration required first" },
    ],
    sections: [
      {
        id: "submission-guidelines",
        title: "Submission Guidelines",
        label: "Initial Submission",
        description:
          "Authors should submit full-length manuscripts through the IRSES 2027 Microsoft CMT submission portal once it is opened by the committee.",
        items: [
          "Submissions must describe original work that has not been published and is not under review for another conference, journal, or proceedings venue.",
          "Only PDF files will be accepted for review. Source files should be retained by the authors and submitted only if requested during the final publication process.",
          "The paper should clearly state the research objective, technical contribution, methodology, results, and relevance to the conference themes.",
          "All manuscripts will undergo peer review by the Technical Program Committee or assigned expert reviewers.",
          "Review decisions, revision requests, and final submission instructions will be communicated through the conference submission system and official email channels.",
        ],
      },
      {
        id: "manuscript-formatting",
        title: "Manuscript Formatting Instructions",
        label: "IEEE Format",
        description:
          "Manuscripts must follow the standard IEEE conference paper template so that accepted papers can move smoothly into publication checks.",
        items: [
          "Use the IEEE two-column conference format without altering margins, columns, font sizes, or spacing.",
          "Prepare the manuscript in English and remove all instructional placeholder text from the IEEE template before submission.",
          "Include the paper title, author names, affiliations, country details, and corresponding author email as required by the template and submission form.",
          "Do not add page numbers, headers, footers, or security restrictions to the PDF.",
          "Figures, tables, equations, references, and acknowledgements must remain within the allowed page limit.",
        ],
      },
      {
        id: "paper-specifications",
        title: "Paper Specifications",
        label: "Technical Checks",
        description:
          "Papers that do not meet the required specifications may be returned for correction or rejected during screening.",
        specifications: [
          { label: "Paper length", value: "Maximum 6 pages, including figures, tables, and references" },
          { label: "Paper size", value: "US Letter, 8.5 x 11 in" },
          { label: "File format", value: "PDF (.pdf) only" },
          { label: "File size", value: "Maximum 2 MB unless the committee announces a revised limit" },
          { label: "Fonts", value: "All fonts must be embedded; Type 3 fonts should not be used" },
          { label: "Page numbers", value: "Do not include page numbering" },
          { label: "Security", value: "Do not password-protect or restrict the PDF file" },
        ],
      },
      {
        id: "camera-ready-process",
        title: "Final Camera-Ready Submission Process",
        label: "Accepted Papers",
        description:
          "Every accepted paper must complete a final camera-ready submission, even when the authors do not make changes to the reviewed manuscript.",
        ordered: true,
        items: [
          "Complete the required author registration before attempting the final paper upload.",
          "Revise the manuscript carefully in response to reviewer comments and committee instructions.",
          "Prepare the final PDF using the IEEE conference template and verify all paper metadata.",
          "Check the PDF through the IEEE PDF compliance process once the conference PDF eXpress details are announced.",
          "Log in to Microsoft CMT with the same account used for the initial submission and upload the final compliant PDF by the deadline.",
          "Complete any copyright, publication, or author declaration forms requested by the conference.",
        ],
      },
      {
        id: "pdf-compliance",
        title: "PDF Compliance Instructions",
        label: "IEEE PDF Check",
        description:
          "Camera-ready papers must satisfy IEEE PDF requirements before they can be considered for conference proceedings submission.",
        items: [
          "Use IEEE PDF eXpress or the compliance tool announced by IRSES 2027 to validate the final manuscript.",
          "Resolve font embedding, unsupported font, margin, image, or PDF-generation errors before uploading the final file.",
          "Upload only the compliant final PDF to Microsoft CMT; non-compliant files may delay publication processing.",
          "Do not apply encryption, password protection, editing restrictions, or other security settings to the PDF.",
          "PDF eXpress conference credentials and detailed instructions will be shared with accepted authors before the camera-ready deadline.",
        ],
      },
      {
        id: "registration-requirements",
        title: "Registration Requirements for Authors",
        label: "Author Registration",
        description:
          "Registration is mandatory for accepted papers before the final camera-ready upload and presentation.",
        items: [
          "At least one author of each accepted paper must register under an eligible author category by the stated deadline.",
          "The registration code or confirmation details may be required before the final paper can be uploaded.",
          "Co-authors attending the conference must complete separate registrations.",
          "A registered author is expected to present the accepted paper during the assigned conference session.",
          "Non-presented papers may be excluded from the conference proceedings or post-conference submission to the digital library, subject to the applicable no-show policy.",
        ],
      },
      {
        id: "plagiarism-ethics",
        title: "Plagiarism & Ethics Policy",
        label: "Research Integrity",
        description:
          "Authors are responsible for ensuring that the submitted work satisfies IEEE publication ethics and the conference's originality expectations.",
        items: [
          "All submissions may be screened for plagiarism, overlap, prior publication, multiple submission, and other publication ethics concerns.",
          "Text, figures, tables, methods, datasets, code, and ideas taken from other sources must be properly cited.",
          "Authors must disclose related prior work and clearly explain how the current submission differs from any earlier publication.",
          "Use of AI-generated or AI-assisted content must follow the latest IEEE author guidance and should be disclosed when required.",
          "Submissions with unacceptable similarity, improper reuse, or ethical violations may be rejected at any stage.",
        ],
      },
      {
        id: "ieee-xplore-note",
        title: "IEEE Xplore Submission Note",
        label: "Publication Eligibility",
        description:
          "Accepted and presented papers will be considered for submission to IEEE Xplore after the conference, subject to IEEE requirements and conference quality checks.",
        items: [
          "Acceptance and presentation at IRSES 2027 do not by themselves guarantee publication in IEEE Xplore.",
          "Only papers that complete peer review, registration, presentation, PDF compliance, copyright, and quality-screening requirements will be processed further.",
          "The conference organizing committee will conduct post-conference checks before forwarding eligible papers for publication consideration.",
          "IEEE or its publication partners may require corrections or may exclude papers that do not satisfy publication standards.",
        ],
      },
      {
        id: "important-notes",
        title: "Important Notes for Authors",
        label: "Before Uploading",
        description:
          "Please review the following points carefully before submitting either the review manuscript or the final camera-ready version.",
        items: [
          "Keep the paper ID and submission account details available for all correspondence.",
          "Ensure that author names, affiliations, email addresses, and paper title are consistent across the manuscript, CMT metadata, registration, and copyright forms.",
          "Do not wait until the final hour to upload; PDF validation, registration confirmation, or metadata corrections may take additional time.",
          "Late, incomplete, incorrectly formatted, or non-compliant submissions may not be included in the final publication workflow.",
          "The committee may update detailed submission links, PDF eXpress credentials, copyright instructions, and deadlines as the conference schedule is finalized.",
        ],
      },
    ],
    cmtAcknowledgement:
      "IRSES 2027 uses the Microsoft Conference Management Toolkit (CMT) to manage paper submission and peer review. Microsoft provides CMT to conferences without charge and supports the service infrastructure, including cloud hosting, platform development, and user support.",
  },

  committees: [
    {
      title: "Chief Patron",
      members: [
        {
          name: "Tathagata Bandyopadhyay",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/tathagata-bandyopadhyay.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/tathagata-bandyopadhyay",
          bio: "Director General of Dhirubhai Ambani University with expertise in statistics, academic leadership, and higher education administration.",
        },
      ],
    },
    {
      title: "Patron",
      members: [
        {
          name: "G. Venkatesh",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/g-venkatesh.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/g-venkatesh",
          bio: "Director of the School of Technology at Dhirubhai Ambani University with extensive academic, industry, and technology leadership experience.",
        },
      ],
    },
    {
      title: "Oversight Committee",
      members: [
        {
          name: "Bhaskar Chaudhary",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/bhaskar-chaudhary.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/bhaskar-chaudhury",
          bio: "Professor at Dhirubhai Ambani University working in computational plasma physics, computational data science, high-performance computing, and AI/ML applications.",
        },
        {
          name: "Yash Vasawada",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/yash-vasawada.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/yash-vasavada",
          bio: "Professor at Dhirubhai Ambani University with research interests in communication systems, signal processing, and machine learning.",
        },
        {
          name: "Manik Lal Das",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/maniklal-das.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/maniklal-das",
          bio: "Professor at Dhirubhai Ambani University specializing in cyber security, privacy, cryptography, security protocols, and algorithms.",
        },
      ],
    },
    {
      title: "General Chairs",
      members: [
        {
          name: "Pankaj Kumar",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/pankaj_kumar.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/pankaj-kumar",
          bio: "Faculty member at Dhirubhai Ambani University working in RF and microwave engineering, metamaterials, terahertz devices, and VLSI design.",
        },
        {
          name: "Yash Agarwal",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/yash-agarwal.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/yash-agrawal",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in VLSI, nanotechnology, advanced device modeling, and high-speed interconnects.",
        },
        {
          name: "Chirag Paunwala",
          institute: "Sarvajanik College of Engineering and Technology, Surat",
          image: "./assets/faculty/chirag-paunwala.jpg",
          infoLink: "https://scet.ac.in/employee/prof-dr-chirag-n-paunwala/",
          bio: "Professor and Dean R&D at Sarvajanik College of Engineering and Technology with expertise in image processing, pattern recognition, and signal processing.",
        },
      ],
    },
    {
      title: "TPC Chairs",
      members: [
        {
          name: "Sanjay Srivastava",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/sanjay-srivastava.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/sanjay-srivastava",
          bio: "Professor at Dhirubhai Ambani University with research interests in internet of things, protocol modeling and analysis, and simulation.",
        },
        {
          name: "Anish Mathuria",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/anish-mathuria.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/anish-mathuria",
          bio: "Professor at Dhirubhai Ambani University specializing in network security, privacy-preserving computation, system security, and cryptography.",
        },
        {
          name: "Biswajit Mishra",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/biswajit-mishra.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/biswajit-mishra",
          bio: "Faculty member at Dhirubhai Ambani University working in ultra-low-power circuits, VLSI design, power management, and energy-harvesting systems.",
        },
        {
          name: "Amit Ved",
          institute: "Marwadi University, Rajkot",
          image: "./assets/faculty/Amit-Ved.jpg",
          infoLink: "https://ieeegujaratsection.org/executive-committee/",
          bio: "Electrical engineering academic at Marwadi University and IEEE Gujarat Section volunteer with interests in power systems, electrical machines, and engineering education.",
        },
        {
          name: "Naran M. Pindoriya",
          institute: "Indian Institute of Technology Gandhinagar",
          image: "./assets/faculty/Naran-M-Pindoriya.jpg",
          infoLink: "https://iitgn.ac.in/faculty/ee/fac-naran",
          //bio: "Electrical engineering academic at Marwadi University and IEEE Gujarat Section volunteer with interests in power systems, electrical machines, and engineering education.",
        },
      ],
    },
    {
      title: "Publication Chair",
      members: [
        {
          name: "Jawar Singh",
          institute: "Indian Institute of Technology Patna",
          image: "./assets/faculty/jawar-singh.jpg",
          infoLink: "https://www1.iitp.ac.in/~jawar/",
          bio: "Professor in the Department of Electrical Engineering at IIT Patna with expertise in semiconductor devices, microelectronics, VLSI, and device modeling.",
        },
        {
          name: "Somak Bhattacharyya",
          institute: "Indian Institute of Technology (BHU) Varanasi",
          image: "./assets/faculty/somak-bhattacharyya.jpg",
          infoLink: "https://www.iitbhu.ac.in/dept/ece/people/somakbhattacharyyaece",
          bio: "Associate Professor at IIT (BHU) Varanasi with research interests in microwave engineering, metasurfaces, periodic structures, and opto-microwave devices.",
        },
        {
          name: "Manish Kumar",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/manish-kumar.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/manish-kumar",
          bio: "Faculty member at Dhirubhai Ambani University working in UAV networks, sensor and ad-hoc networks, wireless-powered IoT, and 5G/6G systems.",
        },
      ],
    },
    {
      title: "Finance Chair",
      members: [
        {
          name: "Mukesh Tiwari",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/mukesh-tiwari.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/mukesh-tiwari",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in nonequilibrium statistical mechanics and nonlinear dynamics.",
        },
        {
          name: "Sunita V",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/Sunitha-V.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/sunitha-v",
          bio: "Faculty member at Dhirubhai Ambani University specializing in graph theory, parallel and distributed algorithms, dynamic algorithms, and graph applications.",
        },
        {
          name: "Manisha Shah",
          institute: "Institute of Technology, Nirma University, Ahmedabad",
          image: "./assets/faculty/manisha-shah.jpg",
          infoLink: "https://technology.nirmauni.ac.in/author/manisha/",
          bio: "Senior Assistant Professor in Electrical Engineering at Nirma University with expertise in power electronics, power quality, converters, and renewable grid integration.",
        },
      ],
    },
    {
      title: "Website & Social Media Chair",
      members: [
        {
          name: "Sujay Kadam",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/sujay-kadam.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/sujay-kadam",
          bio: "Faculty member at Dhirubhai Ambani University with interests in instrumentation, systems and control theory, human-motor learning, and robotics.",
        },
        {
          name: "Anupam Rana",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/anupam-rana.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/anupam-rana",
          bio: "Faculty member at Dhirubhai Ambani University working in design education, experience design, UI/UX, design thinking, and multidisciplinary research.",
        },
      ],
    },
    {
      title: "PhD Colloquium Chair",
      members: [
        {
          name: "Rutu Parekh",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/rutu-parekh.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/rutu-parekh",
          bio: "Faculty member at Dhirubhai Ambani University specializing in high-voltage ASIC design, nanoelectronics, embedded systems, IoT, and emerging devices.",
        },
      ],
    },
    {
      title: "Student Innovation Chair",
      members: [
        {
          name: "Koushlendra Singh",
          institute: "National Institute of Technology Jamshedpur",
          image: "./assets/faculty/koushlendra-singh.jpg",
          infoLink: "https://nitjsr.irins.org/profile/98513",
          bio: "Assistant Professor at NIT Jamshedpur with research interests in image processing, biometrics, computer vision, artificial intelligence, and machine learning.",
        },
        {
          name: "Tapas Kumar Maiti",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/Tapas-kumar-maiti.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/tapas-kumar-maiti",
          bio: "Faculty member at Dhirubhai Ambani University working in intelligent devices and systems, robotics, AI-chip design, and cybernetics.",
        },
      ],
    },
    {
      title: "Industry Track Chair",
      members: [
        {
          name: "Ankit Vijayvargiya",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/ankit-vijayvargiya.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/ankit-vijayvargiya",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in biomedical signals, machine learning, neural rehabilitation, and gait analysis.",
        },
        {
          name: "Amit Mankodi",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/amit-mankodi.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/amit-mankodi",
          bio: "Professor at Dhirubhai Ambani University specializing in embedded systems, computer networks, high-performance computing, and machine learning.",
        },
      ],
    },
    {
      title: "International Liaison Chairs",
      members: [
        {
          name: "Abhishek Jindal",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/abhishek-jindal.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/abhishek-jindal",
          bio: "Associate Professor at Dhirubhai Ambani University with research interests in reinforcement learning, deep learning, wireless communication, and cyber-physical systems.",
        },
        {
          name: "Ajay Beniwal",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/ajay-beniwal.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/ajay-beniwal",
          bio: "Assistant Professor at Dhirubhai Ambani University working in flexible and printable electronics, smart sensing, sensor materials, and sustainable electronics.",
        },
      ],
    },
    {
      title: "Women in Engineering Chairs",
      members: [
        {
          name: "Minal Bhise",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/Minal-Bhise.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/minal-bhise",
          bio: "Faculty member at Dhirubhai Ambani University specializing in distributed databases, query processing, biodiversity-domain applications, and software systems.",
        },
        {
          name: "Sangeeta Singh",
          institute: "National Institute of Technology Patna",
          image: "./assets/faculty/sangeeta-singh.jpg",
          infoLink: "https://nitp.irins.org/profile/102011",
          bio: "Assistant Professor at NIT Patna with expertise in electrical and electronic engineering, beyond-CMOS devices, green electronics, and 2D materials for nanoelectronics.",
        },
      ],
    },
    {
      title: "Tutorial and Special Session Chairs",
      members: [
        {
          name: "Pritam Anand",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/pritam-anand.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/pritam-anand",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in support vector machines, loss functions, regression, and extreme learning machines.",
        },
        {
          name: "Arpit Rana",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/arpit-rana.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/arpit-rana",
          bio: "Faculty member at Dhirubhai Ambani University specializing in applied machine learning, recommender systems, multimodality, and digital innovation.",
        },
      ],
    },
    {
      title: "Local Arrangement Chairs",
      members: [
        {
          name: "Madhukant Sharma",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/madhukant-sharma.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/madhu-kant-sharma",
          bio: "Faculty member at Dhirubhai Ambani University working in fractional differential equations, optimization, numerical methods, and signal processing.",
        },
        {
          name: "Pushpendra Kumar",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/pushpendra-kumar.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/pushpendra-kumar",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in fractional calculus, mathematical modeling, numerical analysis, and neural networks.",
        },
      ],
    },
    {
      title: "Publicity Chairs",
      members: [
        {
          name: "Prasenjit Kundu",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/prasenjit-kundu.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/prosenjit-kundu",
          bio: "Faculty member at Dhirubhai Ambani University working in applied mathematics, complex networks, dynamical systems, and mathematical sciences.",
        },
      ],
    },
    {
      title: "Registration Chairs",
      members: [
        {
          name: "Purbasha Das",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/purbasha-das.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/purbasha-das",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in history of transport and communication, urban history, and legal and social history.",
        },
        {
          name: "Sreeja Rajendran",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/sreeja-rajendran.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/sreeja-rajendran",
          bio: "Faculty member at Dhirubhai Ambani University specializing in VLSI, embedded systems and MEMS, hardware security, and VLSI testing.",
        },
      ],
    },
    {
      title: "Technical Track Chairs",
      members: [
        {
          name: "Kalyan Sasidhar",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/Kalyan-Sasidhar.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/p-s-kalyan-sasidhar",
          bio: "Faculty member at Dhirubhai Ambani University with research interests in mobile and pervasive computing, wireless sensor networks, and mobile phone sensing.",
        },
      ],
    },
    {
      title: "Sponsor Committee Chairs",
      members: [
        {
          name: "Saurabh Tiwari",
          institute: "Dhirubhai Ambani University ",
          image: "./assets/faculty/Saurabh-Tiwari.jpg",
          infoLink: "https://www.daiict.ac.in/faculty/saurabh-tiwari",
          bio: "Faculty member at Dhirubhai Ambani University specializing in software engineering, mining software repositories, natural language processing, and HCI.",
        },
      ],
    },
  ],
  registrationNote: "",
  registrationFees: [
    {
      group: "IEEE Member",
      category: "Indian participant - IEEE student member",
      earlyBird: "₹6,000",
      late: "₹7,000",
    },
    {
      group: "IEEE Women Member",
      category: "Indian participant - IEEE student women member",
      earlyBird: "₹5,000",
      late: "₹6,000",
    },
    {
      group: "IEEE Member",
      category: "Indian participant - IEEE member",
      earlyBird: "₹9,000",
      late: "₹11,000",
    },
    {
      group: "IEEE Women Member",
      category: "Indian participant - IEEE women member",
      earlyBird: "₹8,000",
      late: "₹10,000",
    },
    {
      group: "IEEE Member",
      category: "Foreign participant - IEEE student member",
      earlyBird: "$200",
      late: "$300",
    },
    {
      group: "IEEE Women Member",
      category: "Foreign participant - IEEE student women member",
      earlyBird: "$150",
      late: "$250",
    },
    {
      group: "IEEE Member",
      category: "Foreign participant - IEEE member",
      earlyBird: "$300",
      late: "$400",
    },
    {
      group: "IEEE Women Member",
      category: "Foreign participant - IEEE women member",
      earlyBird: "$250",
      late: "$350",
    },
    {
      group: "Non-IEEE Member",
      category: "Indian participant - non-IEEE student member",
      earlyBird: "₹7,000",
      late: "₹8,500",
    },
    {
      group: "Non-IEEE Women Member",
      category: "Indian participant - non-IEEE student women member",
      earlyBird: "₹6,000",
      late: "₹7,500",
    },
    {
      group: "Non-IEEE Member",
      category: "Indian participant - non-IEEE member",
      earlyBird: "₹10,000",
      late: "₹12,000",
    },
    {
      group: "Non-IEEE Women Member",
      category: "Indian participant - non-IEEE women member",
      earlyBird: "₹9,000",
      late: "₹11,000",
    },
    {
      group: "Non-IEEE Member",
      category: "Foreign participant - non-IEEE student member",
      earlyBird: "$250",
      late: "$400",
    },
    {
      group: "Non-IEEE Women Member",
      category: "Foreign participant - non-IEEE women student member",
      earlyBird: "$200",
      late: "$350",
    },
    {
      group: "Non-IEEE Member",
      category: "Foreign participant - non-IEEE member",
      earlyBird: "$350",
      late: "$500",
    },
    {
      group: "Non-IEEE Women Member",
      category: "Foreign participant - non-IEEE woman member",
      earlyBird: "$300",
      late: "$450",
    },
  ],
  registrationGuidelines: {
    authors: [
      "At least one author of every accepted paper must register and present the paper for inclusion in the conference proceedings.",
      "If more than one author of an accepted paper attends the conference, each attendee must register separately.",
      "Non-refundable registration must be completed before uploading the final formatted paper and related publication forms.",
    ],
    attendees: [
      "All participants must complete registration to attend IRSES 2027.",
      "IEEE members should provide membership details during registration when using an IEEE category.",
      "Students should provide a valid student ID during registration when using a student category.",
      "Applicable taxes, payment gateway charges, and other levies, if any, will be borne by the registrant.",
    ],
    noShow:
      "Accepted papers are expected to be presented at the conference by at least one registered author. Non-presented papers may be excluded from submission to the digital library as per applicable no-show policy.",
  },
  sponsorship: {
    intro: [
      "IRSES 2027 offers sponsors and exhibitors a focused opportunity to present services, technologies, and solutions to a research-driven audience working across intelligent, resilient, and sustainable energy systems.",
      "Sponsors can use the conference platform to connect with potential collaborators, customers, researchers, students, and industry professionals. Sponsorship packages include defined promotional privileges during the conference.",
      "A limited number of exhibitor spaces will be available and allocated on a first-come, first-served basis. Interested organizations are encouraged to confirm participation early.",
    ],
    packages: [
      { grade: "Title Sponsors", amount: "INR 10,00,000" },
      { grade: "Platinum Sponsors", amount: "INR 5,00,000" },
      { grade: "Gold Sponsors", amount: "INR 3,00,000" },
      { grade: "Silver Sponsors", amount: "INR 2,00,000" },
      { grade: "Academic Partners", amount: "INR 2,00,000" },
      { grade: "Exhibitors", amount: "INR 50,000" },
    ],
    taxNote: "Amounts exclude GST at 18%.",
    benefits: [
      {
        title: "Title Sponsors",
        amount: "Rs. 10,00,000/- + GST (18%)",
        details: [
          "Featured as the “Presented By” sponsor with visibility across PR campaigns, inaugural ceremony, social media promotions, main-stage acknowledgements, and a dedicated 10-minute presentation slot.",
         // "Special mention as Presented by, inclusion in PR activities, inaugural ceremony presence, a 10-minute presentation slot, social media mentions, main-stage panel visibility, and podium acknowledgement.",
         
         "Sponsor name and logo will be prominently displayed across conference branding materials, including banners, posters, announcements, and proceedings. A high-resolution JPG logo must be submitted at the time of confirmation." ,
         //"Sponsor name and logo will appear in conference announcement materials and documents, including banners, posters, and proceedings. Please provide a high-resolution JPG logo at the time of contract.",
         
         "A premium exhibition space of up to 5m × 5m will be allocated at the venue for product display and networking, along with ten complimentary delegate registrations.", 
         //"Space up to 5m x 5m will be provided at a strategic location in the venue to showcase products. Ten complimentary registrations will be provided.",
        ],
      },
      {
        title: "Platinum Sponsors",
        amount: "Rs. 5,00,000/- + GST (18%)",
        details: [
          "Sponsor recognition through main-stage visibility, podium acknowledgements, inaugural ceremony presence, gala dinner invitations, social media promotions, and conference PR activities.",
          //"Main-stage panel visibility, podium acknowledgement, inaugural ceremony presence, gala dinner invite, social media mentions, and inclusion in PR activity.",
          
          "Sponsor name and logo will be featured across official conference materials, including banners, posters, announcements, and proceedings. A high-resolution JPG logo must be provided upon confirmation.",
          //"Sponsor name and logo will appear in conference announcement materials and documents, including banners, posters, and proceedings. Please provide a high-resolution JPG logo at the time of contract.",
          
          "A dedicated 4m × 4m exhibition space will be allocated at a prime venue location for product showcase and engagement. Sponsors will also be acknowledged during the inaugural or closing ceremony, along with five complimentary delegate registrations.",
          //"Space up to 4m x 4m will be provided at a strategic venue location to showcase products. Sponsors will be acknowledged during the inaugural welcome or closing event. Five complimentary registrations will be provided.",
        ],
      },
      {
        title: "Gold Sponsors",
        amount: "Rs. 3,00,000/- + GST (18%)",
        details: [
          "Sponsor name and logo will be displayed across official conference promotional materials, including banners and posters.",
          //"Sponsor name and logo will appear in conference announcement materials, including banners and posters.",
          
          "A dedicated 4m × 4m exhibition space will be provided at the venue for product showcasing and networking. Sponsors will also receive acknowledgement during the inaugural or closing ceremony.",
          //"Space up to 4m x 4m will be provided at the exhibition venue to showcase products. Sponsors will be acknowledged during the inaugural welcome or closing event.",
          
          "Three complimentary delegate registrations will be included.",
          //"Three complimentary registrations will be provided.",
        ],
      },
      {
        title: "Silver Sponsors",
        amount: "Rs. 2,00,000/- + GST (18%)",
        details: [
          "Sponsor name will be featured on the official conference event banner.",
          //"Sponsor name will be displayed in the event banner of the conference.",

          "A dedicated 3m × 3m exhibition space will be allocated at the venue for product display and engagement.",
          //"Space up to 3m x 3m will be provided at the exhibition venue to showcase products.",
          
          "Two complimentary delegate registrations will be included.",
        //  "Two complimentary registrations will be provided.",
        ],
      },
      {
        title: "Academic Partners",
        amount: "Rs. 2,00,000/- + GST (18%)",
        details: [
          /*"This option is open to academic institutions, colleges, and universities where IEEE Student Branches exist.",
          "Partner name will be displayed in the event banner, and space up to 3m x 3m will be provided at the exhibition venue to showcase activities and innovations.",
          "Two complimentary registrations will be provided.",*/
          "This partnership category is exclusively available to academic institutions, colleges, and universities with active IEEE Student Branches.",
          "Partner name will be featured on the official conference event banner, along with a dedicated 3m × 3m exhibition space to showcase institutional activities, research, and innovations.",
          "Two complimentary delegate registrations will be included.",
        ],
      },
      {
        title: "Exhibitors",
        amount: "Rs. 50,000/- + GST (18%)",
        details: [
          /*"Exhibitors will be provided space at the exhibition venue to showcase activities and innovations.",
          "One complimentary registration will be provided.",*/
          "Exhibitors will be provided with dedicated space at the venue to showcase their activities, products, and innovations.",
          "One complimentary delegate registration will be included.",
        ],
      },
    ],
    contact: "To secure participation, please write to us at ieee_irses@dau.ac.in.",
  },
  fellowship: {
    travelGrants: {
      description:
        "IRSES 2027 is pleased to offer financial support to selected IEEE student members who are first authors and will present their accepted research work during the conference. Grants will be awarded to a limited number of applicants on a competitive basis and may support registration fees or partial travel expenses. Final decisions will be made by the Conference Fellowship Committee.",
      instruction:
        "Interested IEEE student members who are first authors can email the conference after paper acceptance with the following details:",
      fields: [
        "Paper ID",
        "Paper Title",
        "Authors Names and Affiliations (with country name)",
        "Abstract",
        "Email",
        "Contact Number",
      ],
    },
    awards:
      "Best Paper and Poster Awards will be presented for work representing outstanding research. Track chairs will nominate top papers, and the committee will review each nomination, reviewer comments, and nomination statements before selecting awardees.",
  },
  venueDetails: {
    title: "DAU, Gandhinagar",
    description:
      "IRSES 2027 will be hosted at Dhirubhai Ambani University, Gandhinagar, formerly known as DAIICT. Travel details, nearby accommodation, campus map, and local transport guidance will be added after confirmation.",
  },
  contact: [
    {
      label: "Organising Secretary",
      image: "./assets/faculty/Dr-Umang-Patel.jpg",
      value: "Dr. Umang Patel",
    },
    {
      label: "Conference Email",
      value: "ieee_irses@dau.ac.in",
    },
    {
      label: "Phone",
      value: "07968261595",
    },
    {
      label: "Host Institute",
      value: "Dhirubhai Ambani University",
    },
    {
      label: "Location",
      value: "Gandhinagar, Gujarat",
    },
  ],
};
