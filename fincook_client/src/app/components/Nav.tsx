"use client"
import { Disclosure } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export default function Nav(){
    return (
        /* Navigation */
        <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="/logo/fincook_logo.png"
                    alt="fincook logo"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="text-2xl font-bold text-gray-500">fin<span className="text-emerald-400">cook</span></div>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <Link href="/" className="px-3 py-2 text-sm font-medium text-emerald-800 hover:text-emerald-500">Home</Link>
                <Link href="/resources" className="px-3 py-2 text-sm font-medium text-emerald-800 hover:text-emerald-500">Resources</Link>
                <Link href="/learn" className="px-3 py-2 text-sm font-medium text-emerald-800 hover:text-emerald-500">Learn</Link>
                <Link href="/happy/user" className="block px-3 py-2 text-base font-medium text-emerald-800 hover:text-emerald-500 hover:bg-gray-100 rounded-md">Buy me coffee</Link>
                <Link href="#contact" className="ml-4 px-4 py-2 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-md">Request a Quote</Link>
              </div>
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-emerald-800 hover:text-emerald-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-sm font-medium text-emerald-800 hover:text-emerald-500">Home</Link>
              <Link href="/resources" className="block px-3 py-2 text-sm font-medium text-emerald-800 hover:text-emerald-500">Resources</Link>
              <Link href="/learn" className="block px-3 py-2 text-sm font-medium text-emerald-800 hover:text-emerald-500">Learn</Link>
              <Link href="/happy/user" className="block px-3 py-2 text-base font-medium text-emerald-800 hover:text-emerald-500 hover:bg-gray-100 rounded-md">Buy me coffee</Link>
              <Link href="#contact" className="block px-4 py-2 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-md">Request a Quote</Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
}