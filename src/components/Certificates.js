const certificates = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2024",
      url: "https://drive.google.com/file/d/1KRVgZut06YbLZ2Vcw2jN0TlZMTfQw_Ar/view?usp=drive_link",
    },
    {
      title: "Postman: The Complete Guide - REST API Testing",
      issuer: "Udemy",
      year: "2024",
      url: "https://drive.google.com/file/d/1CQPFZkYXB9XHnwbYzsfTuZ__VrmVlAjf/view?usp=drive_link",
    },
  ]
  
  const Certificates = () => {
    return (
      <section id="certificates" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">
                {cert.issuer} | {cert.year}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Certificates
  
  