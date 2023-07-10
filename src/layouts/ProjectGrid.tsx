import ProjectCard from '@src/components/ProjectCard';

export default function ProjectGrid() {
	let projectDetailsList = [
		{
			projectName: 'Project 1',
			cpuStats: { value: '91%', alert: false },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: false },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 3,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 2',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 2,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 3',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 3,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 4',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 2,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 5',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 1,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 6',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 3,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 7',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 1,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 8',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 1,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 9',
			cpuStats: { value: '91%', alert: true },
			memoryStats: { value: '82%', alert: false },
			networkStats: { value: '98 Mbps', alert: true },
			heapSizeStats: { value: '2 GB', alert: false },
			criticality: 1,
			nextFailure: '10:30:42 PM',
		},
		{
			projectName: 'Project 10',
			cpuStats: { value: '90%', alert: false },
			memoryStats: { value: '86%', alert: true },
			networkStats: { value: '102 Mbps', alert: false },
			heapSizeStats: { value: '1 GB', alert: false },
			criticality: 2,
			nextFailure: '10:30:42 PM',
		},
	];

	projectDetailsList.sort((projectDetails1, projectDetails2) => {
		return projectDetails1.criticality - projectDetails2.criticality;
	});

	return (
		<>
			<div className="w-full md:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
				{projectDetailsList.map((projectDetails) => (
					<ProjectCard projectDetails={projectDetails} />
				))}
			</div>
		</>
	);
}
