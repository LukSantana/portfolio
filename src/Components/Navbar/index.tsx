import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from "react-scroll";
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <Popover className="relative bg-[#212529]" id='navbar'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <span className="sr-only">LukSantana</span>
                        <img
                            className="h-8 w-auto sm:h-7"
                            src="/assets/img/luksantana.png"
                            alt=""
                        />
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#212529] p-2 text-gray-400 hover:bg-[#212529] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                        >
                            SOBRE MIM
                        </Link>
                        <Link
                            to="skills"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="text-base cursor-pointer font-medium text-white hover:text-gray-300">
                            HABILIDADES
                        </Link>
                        <Link
                            to="projects"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                        >
                            PROJETOS
                        </Link>
                        <Link
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                        >
                            CONTATO
                        </Link>
                    </Popover.Group>
                    <div className="hidden items-center justify-end gap-4 md:flex md:flex-1 lg:w-0">
                        <a href="https://github.com/LukSantana" target="_blank" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
                            <FaGithub className="text-white text-3xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/luksantana" target="_blank" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
                            <FaLinkedin className="text-white text-3xl" />
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#212529] shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto sm:h-7"
                                        src="/assets/img/luksantana.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#212529] p-2 text-gray-400 hover:bg-[#32383e] hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-400">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                                >
                                    SOBRE MIM
                                </Link>
                                <Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                                >
                                    HABILIDADES
                                </Link>
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                                >
                                    PROJETOS
                                </Link>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-base cursor-pointer font-medium text-white hover:text-gray-300"
                                >
                                    CONTATO
                                </Link>
                            </div>
                            <div className='flex justify-start gap-3'>
                                <a href="https://github.com/LukSantana" target="_blank" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
                                    <FaGithub className="text-3xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/luksantana" target="_blank" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover >
    )
}
