export const Projects = ({ link, icon, title, description }: any) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-gray-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-gray-800/70"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {description}
    </p>
  </a>
);
