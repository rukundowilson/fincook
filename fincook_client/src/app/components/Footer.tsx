"use client"

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
                <li><a href="#home" className="text-emerald-100 hover:text-white">Home</a></li>
                <li><a href="#features" className="text-emerald-100 hover:text-white">Features</a></li>
                <li><a href="#services" className="text-emerald-100 hover:text-white">Services</a></li>
                <li><a href="#education" className="text-emerald-100 hover:text-white">Education</a></li>
                <li><a href="#contact" className="text-emerald-100 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-300 font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-emerald-100">rukundowilson5@gmail.com</li>
                <li className="text-emerald-100">+250790080450</li>
                <li className="text-emerald-100">KN 27 Street</li>
                <li className="text-emerald-100">Investment City, IC 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-300">&copy; {new Date().getFullYear()} fincook. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-emerald-300 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-emerald-300 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}