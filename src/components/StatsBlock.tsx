import classNames from '@src/utils/classNames';

interface StatsBlockProps {
	icon: React.ReactNode;
	statValue: string;
	statName: string;
	alert: boolean;
}

export default function StatsBlock(props: StatsBlockProps) {
	return (
		<div className="flex w-1/2 items-center gap-2">
			<div className="w-7 h-7 text-gray-600">{props.icon}</div>
			<div>
				<p className={classNames(props.alert ? 'text-red-400' : '', 'font-bold text-gray-700')}>{props.statValue}</p>
				<p className="text-xs font-semibold text-gray-500">{props.statName}</p>
			</div>
		</div>
	);
}
