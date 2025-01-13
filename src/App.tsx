import React from 'react';
import { Github, Linkedin, Mail, Monitor, Server, Layout, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rakesh Reddy Kunda</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Full Stack Developer</h2>
          <p className="text-xl opacity-90">Crafting exceptional digital experiences with modern web technologies</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a Full Stack Developer with 3 years of experience in building modern web applications. 
            Currently working at Samsung Electro Mechanics, I specialize in frontend technologies 
            with expertise in Angular, React, and Next.js.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Monitor className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="text-gray-600">
                <li>React.js</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Server className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="text-gray-600">
                <li>Node.js</li>
                <li>RESTful APIs</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <ul className="text-gray-600">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Samsung Electro Mechanics</h3>
            <p className="text-gray-600 mb-4">Full Stack Developer</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Developing and maintaining web applications using modern JavaScript frameworks</li>
              <li>Collaborating with cross-functional teams to deliver high-quality solutions</li>
              <li>Implementing responsive designs and ensuring cross-browser compatibility</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} Rakesh Reddy Kunda. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;