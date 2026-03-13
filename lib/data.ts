export const RESUME_DATA = {
  profile: {
    name: "My Portfolio", 
    role: "Kevin C. Mercado", 
    bio: "On a mission to master my money. Trying to building assets & creating peace of mind.Just a guy who realized that 'wealth' is more about peace of mind than flashy purchases. I'm focusing on building a rock-solid financial foundation-saving, investing, and preparing for the future to live life on my own terms.",
    about: "I have knowledge in building a website.I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...I have knowledge in building a website...",
    avatar: "/kev.jpg",
    social: [
      { label: "GitHub", url: "https://github.com/ultrakevin143" },
      { label: "Facebook", url: "https://www.facebook.com/osaka.kun.90" }
    ]
  },
  // ... rest of your data
  skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js","Figma"],
  experience: [
    {
      id: "job-1",
      role: "Head Waiter",
      company: "Virtucio Caterers",
      date: "2023 - Present",
      description: "Leading the Team on how to interact with the Clients Properly",
      imageUrl: "/virt.jpg" 
    },
  ],
  projects: [
    {
      id: "fcfs-sim",
      slug: "fcfs-scheduler", 
      title: "FCFS Scheduler",
      category: "System Tool",
      description: "A process scheduling visualizer demonstrating First-Come-First-Serve algorithms with real-time Gantt charts.",
      tech: ["Next.js", "Tailwind"],
      imageUrl: "/fcfs.jpg", 
      projectUrl: "https://fcfs-nine.vercel.app/" 
    },
    {
      id: "ecommerce",
      title: "ShopAnalytics",
      category: "Web Application",
      description: "Ecommerce computer parts products",
      tech: ["React.js"],
      imageUrl: "/shop.jpg", 
      projectUrl: "https://lazappyv3.vercel.app/" 
    }, {
      id: "crypto",
      slug: "https://kvnmr.netlify.app/",
      title: "Current Bitcoin Price",
      category: "Web Application",
      description: "Fetch the currect price of Bitcoin",
      tech: ["HTML, Fetch Api"],
      imageUrl: "/bit.png", 
      projectUrl: "https://kvnmr.netlify.app/" 
    }
  ],
  certificates: [
    {
      name: "Creative Web Design",
      issuer: "Tesda",
      date: "June 8 2024",
      imageUrl: "/cert.jpg", 
      certificateUrl: "/cert.jpg",
      fullCertificateUrl: "/cert.jpg" 
    },
    {
      name: "Cookery NCII",
      issuer: "Tesda",
      date: "March 03, 2024",
      imageUrl: "/nc.jpg", 
      certificateUrl: "/nc.jpg",
      fullCertificateUrl: "/nc.jpg" 
    }
  ]
};