  // Timeline Experience Component
export const TimelineExperience = ({ company, role, period, location, achievements }: any) => (
    <div className="relative pl-8 pb-12 group">
      <div className="absolute left-0 w-1 h-full bg-blue-400/30 group-hover:bg-blue-400 transition-colors duration-300" />
      <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-blue-400 transform group-hover:scale-150 transition-transform duration-300" />
      <div className="bg-gray-800/50 rounded-lg p-6 transform hover:scale-102 transition-all duration-300 hover:bg-gray-800/70">
        <div className="flex justify-between items-start mb-4 flex-wrap">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">{company}</h3>
            <p className="text-xl text-gray-300">{role}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">{period}</p>
            <p className="text-gray-500">{location}</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {achievements.map((achievement: any, index: any) => (
            <li key={achievement + index} className="hover:text-blue-400 transition-colors duration-300">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );