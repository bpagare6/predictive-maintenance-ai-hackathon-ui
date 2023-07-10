import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '@src/components/Logo';
import Profile from '@src/components/Profile';
import classNames from '@src/utils/classNames';

const navigation = [
	{ name: 'Dashboard', href: '/', current: true },
	{ name: 'Team', href: '/team', current: false },
	{ name: 'Projects', href: '/projects', current: false },
];

export default function Navbar() {
	return (
		<Disclosure as="nav">
			{({ open }) => (
				<>
					<div className="shadow bg-white w-full mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md">
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<Logo />
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? 'text-indigo-600 underline underline-offset-8'
														: 'text-gray-500 hover:underline underline-offset-8 hover:text-indigo-600',
													'px-3 py-2 rounded-md text-base font-semibold'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<Profile user={'Bhushan Pagare'} />
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? 'text-indigo-600 underline underline-offset-8'
											: 'text-gray-500 hover:underline underline-offset-8 hover:text-indigo-600',
										'block px-3 py-2 rounded-md text-base font-semibold'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
