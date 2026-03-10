
export const RESUME_DATA = {
  profile: {
    name: "My Portfolio",
    role: "Hi, I'm Kevin Mercado, Welcome to my webpage.",
    bio: "Ai is the Future!",
    about: "I have knowledge in building a website, especially in the frontend. I also have small knowledge in backend with a guide of AI. I'm good at computers when it comes to typing. I got a lot of work experience that is not related to my course. I thrive in collaborative environments and enjoy working with people with good sense of humor",
    avatar: "/kev.jpg",
    social: [
      { label: "GitHub", url: "https://github.com/ultrakevin143" },
      { label: "Facebook", url: "https://www.facebook.com/osaka.kun.90" }
    ]
  },
  skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js"],
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
      slug: "shopanalytics",
      title: "ShopAnalytics",
      category: "Web Application",
      description: "Ecommerce computer parts products",
      tech: ["React.js"],
      imageUrl: "/shop.jpg", 
      projectUrl: "https://lazappyv3.vercel.app/" 
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