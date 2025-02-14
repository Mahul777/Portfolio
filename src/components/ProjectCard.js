const ProjectCard = ({ title, description, image, techStack, demoLink, githubLink }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Live Demo
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  
  