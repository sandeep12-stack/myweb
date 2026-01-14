function About() {
  const skills = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB',
    'JavaScript', 'HTML & CSS', 'RESTful APIs', 'Git'
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Biography</h3>
        <p className="text-gray-700 leading-relaxed">
          I'm a Full Stack Developer with expertise in the MERN stack.
          I love creating responsive and user-friendly web applications.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Education</h3>
        <p className="text-gray-700">
          Full Stack Development Program - EMC <br />
          MERN Stack (MongoDB, Express.js, React, Node.js)
        </p>
      </div>
    </div>
  );
}

export default About;
