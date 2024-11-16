export const SkillCard = ({ title, skills }: any) => (
    <div className="bg-gray-800/50 rounded-lg p-6 transform hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill: any, index: any) => (
          <li key={skill + index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );