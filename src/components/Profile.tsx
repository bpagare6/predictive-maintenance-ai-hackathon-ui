import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface ProfileProps {
	user: string;
}

export default function Profile(props: ProfileProps) {
	return (
		<Menu as="div" className="ml-3 relative">
			<div>
				<Menu.Button className="flex gap-2 items-center text-sm rounded-full">
					<UserCircleIcon className="h-8 w-8 rounded-full" />
					<span className="sr-only text-base font-medium text-gray-700 md:not-sr-only">{props.user}</span>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
								Your Profile
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
								Settings
							</a>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
