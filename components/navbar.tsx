import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const navigation = [
    { name: 'Team', href: '/team', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

// @ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open Main Menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <Link className="flex flex-shrink-0 items-center" href="/">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://cdn.linkscape.app/linkscape-logo.png"
                                        alt="LinkScape"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://cdn.linkscape.app/linkscape-logo.png"
                                        alt="LinkScape"
                                    />
                                </Link>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-blue-500 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
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
                                <a href="https://github.com/LinkScapeOfficial">
                                  <FaGithub className="h-8 w-8 mr-4" />
                                </a>
                                <a href="https://discord.gg/WDdvabyKaH">
                                  <FaDiscord className="h-8 w-8 mr-4" />
                                </a>
                                <a href="https://twitter.com/RealLinkScape">
                                  <FaTwitter className="h-8 w-8"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-blue-500 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
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
    )
}
