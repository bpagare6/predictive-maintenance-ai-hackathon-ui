import { ArrowsUpDownIcon, CpuChipIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import StatsBlock from '@src/components/StatsBlock';
import classNames from '@src/utils/classNames';

interface ProjectCardProps {
	projectDetails: {
		projectName: string;
		cpuStats: { value: string; alert: boolean };
		memoryStats: { value: string; alert: boolean };
		networkStats: { value: string; alert: boolean };
		heapSizeStats: { value: string; alert: boolean };
		criticality: number;
		nextFailure: string;
	};
}

function getBorderColor(criticality: number) {
	if (criticality === 1) return 'border-red-500';
	else if (criticality === 2) return 'border-orange-300';
	else return 'border-green-400';
}

export default function ProjectCard(props: ProjectCardProps) {
	const { projectName, cpuStats, memoryStats, networkStats, heapSizeStats, criticality, nextFailure } =
		props.projectDetails;

	let alertCount =
		Number(cpuStats.alert) + Number(memoryStats.alert) + Number(networkStats.alert) + Number(heapSizeStats.alert);

	let borderColorClass = getBorderColor(criticality);

	return (
		<div
			className={classNames(
				borderColorClass,
				'w-full shadow max-w-xs bg-white h-48 flex flex-col justify-between rounded-lg border py-4 px-4'
			)}
		>
			<div>
				<div className="flex justify-between items-center">
					<h4 className="font-bold text-gray-800">{projectName}</h4>
					{alertCount > 0 && (
						<div className="flex items-center text-red-400 gap-1">
							<ExclamationTriangleIcon className="w-4 h-4" />
							<p className="text-xs font-medium">{alertCount} alerts</p>
						</div>
					)}
				</div>
				<>
					<div className="flex items-center gap-4 py-2">
						<StatsBlock icon={<CpuChipIcon />} statValue={cpuStats.value} statName="CPU Usage" alert={cpuStats.alert} />
						<div className="left-1/2 -ml-0.5 w-px h-5 bg-gray-300"></div>
						<StatsBlock
							icon={<CpuChipIcon />}
							statValue={memoryStats.value}
							statName="Memory Usage"
							alert={memoryStats.alert}
						/>
					</div>
					<div className="flex items-center gap-4 py-2">
						<StatsBlock
							icon={<ArrowsUpDownIcon />}
							statValue={networkStats.value}
							statName="Network"
							alert={networkStats.alert}
						/>
						<div className="left-1/2 -ml-0.5 w-px h-5 bg-gray-300"></div>
						<StatsBlock
							icon={<ArrowsUpDownIcon />}
							statValue={heapSizeStats.value}
							statName="Heap Size"
							alert={heapSizeStats.alert}
						/>
					</div>
				</>
				<p className="pt-2 pb-2 text-right text-sm font-medium text-gray-500">🕒Next failure at {nextFailure}</p>
			</div>
		</div>
	);
}
