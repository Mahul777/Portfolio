import ProjectCard from "./ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "Soundwave Academy",
      description: "An interactive music learning platform built with React and Web Audio API.",
      image: "/soundwave-academy.png",
      techStack: ["3D animated cards","Next.js","Tailwind CSS"],
      demoLink: "https://soundwave-academy-2-oawf.onrender.com/",
      githubLink: "https://github.com/Mahul777/soundwave-academy",
    },
    {
      title: "Travel App",
      description: "A responsive travel planning application with itinerary management and real-time weather updates.",
      image: "/travel-app.png",
      techStack: ["React",  "Next.js", "TypeScript", "Tailwind CSS"],
      demoLink: "https://travel-app-ksix.onrender.com/",
      githubLink: "https://github.com/Mahul777/travel-app",
    },
    {
      title: "Sahu Clothing Shop",
      description:
        "An e-commerce platform for a clothing brand, featuring a dynamic product catalog and secure checkout process.",
      image: "/sahu-clothing-shop.png",
      techStack: ["React", "Tailwind CSS"],
      demoLink: "https://sahufashion.netlify.app/",
      githubLink: "https://github.com/Mahul777/sahu-clothing-shop",
    },
  ]

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

