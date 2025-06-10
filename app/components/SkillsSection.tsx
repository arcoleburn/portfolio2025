export default function SkillsSection() {
	const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'GraphQL', 'Git', 'Responsive Web Design', 'Agile Devlopment/Project Management'];

	return (
		<section className="bg-gray-800 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Skills & Technologies</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill) => (
						<div
							key={skill}
							className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
						>
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
