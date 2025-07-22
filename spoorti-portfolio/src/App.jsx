import React from "react";

export default function Portfolio() {
  return (
    <main className="font-sans bg-[#f5f0e9] text-gray-800">
      {/* Navbar */}
      <nav className="bg-[#ebe2d8] shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Spoorti</h1>
        <ul className="flex space-x-6 text-md">
          <li><a href="#about" className="hover:text-[#a17551]">About</a></li>
          <li><a href="#skills" className="hover:text-[#a17551]">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#a17551]">Projects</a></li>
          <li><a href="#experience" className="hover:text-[#a17551]">Experience</a></li>
          <li><a href="#contact" className="hover:text-[#a17551]">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Spoorti Sidramappa Patil</h1>
        <p className="text-xl md:text-2xl text-[#6c584c] mb-6">
          Software Engineering Student @ Indiana University | Full Stack Developer | Blockchain & UI/UX Enthusiast
        </p>
        <a
          href="mailto:patilspoorti02@gmail.com"
          className="bg-[#a17551] text-white px-6 py-2 rounded-xl text-lg hover:bg-[#8b5c36] transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-7">
          I'm a Master's student in Computer Science at Indiana University, passionate about full-stack development, UI/UX design, and decentralized apps. I enjoy combining technology and creativity to build real-world solutions that empower users.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#f3e8dc] py-16 px-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p>Python, Java, C, Dart, JavaScript</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Web & Tools</h3>
            <p>HTML, CSS, Flutter, React, Node.js, Git, Docker, Kubernetes, Terraform, Figma</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Databases & Cloud</h3>
            <p>PostgreSQL, MongoDB, MySQL, AWS (EC2, S3), Firebase</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="space-y-8">
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <h3 className="text-2xl font-semibold">Secure Digital Identity Using NFTs</h3>
            <p className="text-gray-700 mt-2">
              Built a DApp on Ethereum using smart contracts and Web3.js to create, mint, and trade digital identities. Published in IEEE ICIRCA 2023.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <h3 className="text-2xl font-semibold">Event Management System</h3>
            <p className="text-gray-700 mt-2">
              A scalable system with role-based access deployed on AWS EC2 and PostgreSQL on RDS for event registrations.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#f3e8dc] py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Experience</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold">Full Stack Developer Intern – Y STEM and Chess Inc. (July 2025 – Present)</h3>
            <ul className="list-disc list-inside">
              <li>Redesigned UI components with React.js & Tailwind CSS, increasing usability by 20%</li>
              <li>Collaborated using Figma to build responsive, accessible interfaces</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Teaching Assistant – Indiana University (June 2025 – Present)</h3>
            <ul className="list-disc list-inside">
              <li>Assisted 27 students, held office hours, and graded technical coursework</li>
              <li>Supported lab sessions and curriculum improvements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>
        <ul className="space-y-4">
          <li>
            <strong>MS in Computer Science</strong> – Indiana University Bloomington (2024–2026) – GPA: 3.7
          </li>
          <li>
            <strong>BE in Computer Science</strong> – PDA College of Engineering (2019–2023) – CGPA: 8.27
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-10 border-t bg-[#ebe2d8]">
        <p>© 2025 Spoorti Sidramappa Patil</p>
        <p className="text-sm">
          Connect:
          <a href="mailto:patilspoorti02@gmail.com" className="text-[#a17551] underline ml-1">Email</a> |
          <a href="https://www.linkedin.com/in/spoorti-sidramappa-patil" className="text-[#a17551] underline ml-1">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
