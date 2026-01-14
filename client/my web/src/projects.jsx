function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio with project showcase',
      tech: 'React, Node.js, MongoDB'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Online store with cart and checkout',
      tech: 'MERN Stack'
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Task management app',
      tech: 'React'
    }
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div
            key={project.id}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <p className="text-sm text-blue-600 font-semibold">{project.tech}</p>

            <div className="flex gap-3 mt-4">
              <button className="text-blue-600 hover:underline">
                Live Demo
              </button>
              <button className="text-gray-600 hover:underline">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
