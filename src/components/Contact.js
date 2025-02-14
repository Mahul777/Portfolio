const Contact = () => {
    return (
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:apoorvsahu.cse19@chitkarauniversity.edu.in"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              apoorvsahu.cse19@chitkarauniversity.edu.in
            </a>
            <a href="tel:+918393990042" className="text-indigo-600 hover:text-indigo-800 font-medium">
              +91 8393990042
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/apoorv-sahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Mahul777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact
  
  