// Social Link Component
export const SocialLink = ({ href, icon }: any) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
    >
      {icon}
    </a>
  );