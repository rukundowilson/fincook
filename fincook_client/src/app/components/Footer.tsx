"use client"
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-white">fin<span className="text-emerald-400">cook</span></div>
              <p className="mt-4 text-emerald-200 max-w-md">
                Empowering local communities to make smarter investment decisions through knowledge, resources, and expert guidance.
              </p>
            </div>
            <div>
              <h3 className="text-emerald-300 font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="px-3 py-2 text-sm font-medium text-emerald-100">Home</Link></li>
                <li><Link href="/resources" className="px-3 py-2 text-sm font-medium text-emerald-100">Resources</Link></li>
                <li><Link href="/learn" className="px-3 py-2 text-sm font-medium text-emerald-100">Learn</Link></li>
                <li><Link href="/happy/user" className="block px-3 py-2 text-base font-medium text-emerald-100 hover:bg-gray-100 rounded-md">Buy me coffe</Link></li>                
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-300 font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-emerald-100">rukundowilson5@gmail.com</li>
                <li className="text-emerald-100">+250790080450</li>
                <li className="text-emerald-100">KN 27 Street</li>
                <li className="text-emerald-100">Kigali Rwanda</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-300">&copy; {new Date().getFullYear()} fincook. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-emerald-300 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-emerald-300 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
}