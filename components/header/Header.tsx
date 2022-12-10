import Link from "next/link";
import { Fragment, useState } from "react";
import { useTheme } from 'next-themes'
import { FaSun, FaRegMoon} from 'react-icons/fa'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon,  XIcon } from '@heroicons/react/outline'
import Image from "next/image";

import logo from '../../public/images/logo/danops.png'

const navigation = {
	categories: [
	  {
		id: 'services',
		name: 'Services',
		sections: [
		  {
			id: 'development',
			name: 'Development',
			items: [
			  { name: 'Software Development', href: '#' },
			  { name: 'Web Development', href: '#' },
			  { name: 'Machince Learning', href: '#' }
			],
		  },
		  {
			id: 'cloud-devops',
			name: 'Cloud/DevOps',
			items: [
			  { name: 'Cloud Computing', href: '#' },
			  { name: 'DevOps', href: '#' }
			],
		  },
		  {
			id: 'engineering-design',
			name: 'Engineering/Designs',
			items: [
			  { name: 'Product Engineering', href: '#' }
			],
		  }
		],
	  },
	  {
		id: 'learn',
		name: 'Learn',
		sections: [
		  {
			id: 'programming',
			name: 'Programming',
			items: [
			  { name: 'Learn Python', href: '#' },
			  { name: 'Learn Golang', href: '#' }
			],
		  },
		  {
			id: 'scripting',
			name: 'Scripting',
			items: [
				{ name: 'Learn PHP', href: '#' }
			],
		  },
		  {
			id: 'devops',
			name: 'DevOps',
			items: [
			  { name: 'AWS', href: '#' }
			],
		  }
		],
	  },
	],
	pages: [
		{ name: 'Projects', href: '#projects' },
		{ name: 'About DanOps', href: '#about' },
		{ name: 'Contact', href: '#' },
	],
}
  
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	const { theme, setTheme } = useTheme()
	const [open, setOpen] = useState(false)
	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<div className="fixed inset-0 flex z-40">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
								<div className="px-4 pt-5 pb-2 flex">
								<button
									type="button"
									className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
									onClick={() => setOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
								</div>
								<Tab.Group as="div" className="mt-2">
									<div className="border-b border-gray-200">
										<Tab.List className="-mb-px flex px-4 space-x-8">
										{navigation.categories.map((category) => (
											<Tab
											key={category.name}
											className={({ selected }) =>
												classNames(
												selected ? 'text-slate border-slate' : 'text-gray-900 border-transparent',
												'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
												)
											}
											>
											{category.name}
											</Tab>
										))}
										</Tab.List>
									</div>
									<Tab.Panels as={Fragment}>
										{navigation.categories.map((category) => (
										<Tab.Panel key={category.name} className="pt-2 pb-4 px-4 space-y-5">
											<div className="grid grid-cols-2 gap-x-4"></div>
											{category.sections.map((section) => (
												<div key={section.name}>
													<p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
														{section.name}
													</p>
													<ul
														role="list"
														aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
														className="mt-4 flex flex-col space-y-6"
													>
													{section.items.map((item) => (
														<li key={item.name} className="flow-root">
														<a href={item.href} className="-m-2 p-2 block text-gray-500">
															{item.name}
														</a>
														</li>
													))}
													</ul>
												</div>
											))}
										</Tab.Panel>
										))}
									</Tab.Panels>
								</Tab.Group>
								<div className="border-t border-gray-200 py-6 px-4 space-y-6">
									{navigation.pages.map((page) => (
										<div key={page.name} className="flow-root">
											<Link href={page.href}>
												<span className="-m-2 p-2 block font-medium text-gray-900">
													{page.name}
												</span>
											</Link>
										</div>
									))}
								</div>
								<div className="border-t border-gray-200 py-6 px-4 space-y-6">
									<div className="flow-root">
										<a href="#" className="-m-2 p-2 block font-medium text-gray-900">
										Let&apos;s talk
										</a>
									</div>
									<div className="flow-root">
										<a href="mailto: hello@danops.dev" 
											className="-m-2 p-2 block font-medium text-gray-900">
										hello@danops.dev
										</a>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
			<header className="fixed top-0 left-0 right-0 z-10">
				{/* <p className="bg-slate h-10 py-7 md:py-0 flex items-center text-center md:justify-center text-base antialiased md:subpixel-antialiased font-medium text-white px-4 sm:px-6 lg:px-8">
					<span className="">Site is under construction. Get in touch:&nbsp;<a className="underline" href="mailto: hello@danops.dev"> hello@danops.dev &rarr; </a></span>
				</p> */}
				<nav aria-label="Top" className="bg-white max-w-full shadow-md mx-auto px-4 sm:px-6 lg:px-8">
					<div className="border-b border-gray-200">
						<div className="h-16 flex items-center">
							<button
								type="button"
								className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
								onClick={() => setOpen(true)}
							>
								<span className="sr-only">Open menu</span>
								<MenuIcon className="h-6 w-6" aria-hidden="true" />
							</button>

							{/* Logo */}
							<div className="ml-4 flex lg:ml-0">
								<Link href="/">
									<span>
										<span className="sr-only">DanOps</span>
										<Image 
											className="h-11 w-auto"
											width={0}
											height={0}
											src={logo}
											alt="danops-logo"
										/>
									</span>
								</Link>
							</div>

							{/* Flyout menus */}
							<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="h-full flex space-x-8">
								{navigation.categories.map((category) => (
									<Popover key={category.name} className="flex">
									{({ open }) => (
										<>
										<div className="relative flex">
											<Popover.Button
											className={classNames(
												open
												? 'border-slate text-slate'
												: 'border-transparent text-gray-700 hover:text-gray-800',
												'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
											)}
											>
											{category.name}
											</Popover.Button>
										</div>

										<Transition
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
											{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
											<div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

											<div className="relative bg-white">
												<div className="max-w-7xl mx-auto px-8">
													<div className="grid grid-cols-1 py-5">
														<div className="grid grid-cols-4 text-sm">
														{category.sections.map((section) => (
															<div key={section.name}>
															<p id={`${section.name}-heading`} className="font-medium text-gray-900">
																{section.name}
															</p>
															<ul
																role="list"
																aria-labelledby={`${section.name}-heading`}
																className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
															>
																{section.items.map((item) => (
																<li key={item.name} className="flex">
																	<Link href={item.href}>
																		<span className="hover:text-gray-800">{item.name}</span>
																	</Link>
																</li>
																))}
															</ul>
															</div>
														))}
														</div>
													</div>
												</div>
											</div>
											</Popover.Panel>
										</Transition>
										</>
									)}
									</Popover>
								))}

								{navigation.pages.map((page) => (
									<a
									key={page.name}
									href={page.href}
									className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
									>
									{page.name}
									</a>
								))}
								</div>
							</Popover.Group>

							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									<a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
										Let&apos;s talk
									</a>
									<span className="h-6 w-px bg-gray-200" aria-hidden="true" />
									<a href="mailto: hello@danops.dev" 
										className="text-sm font-medium text-gray-700 hover:text-gray-800">
										hello@danops.dev
									</a>
								</div>
								{/* Theme buttob */}
								<div className="ml-4 flow-root lg:ml-6">
									<button
										className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-white"
										onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									>
										{theme === "dark" ? <FaSun /> : <FaRegMoon />}
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};