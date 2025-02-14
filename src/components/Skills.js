const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
    "Web Accessibility",
    "Performance Optimization",
    "RESTful APIs",
  ]
  
  const Skills = () => {
    return (
      <section id="skills" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-md rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-transform duration-300 hover:scale-110"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Skills
  
  