import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkClass = 'px-3 py-2 rounded-md text-sm font-medium';
  const linkClassMobile = 'block px-3 py-2 rounded-md text-base font-medium';

  const calculateLinkClass = (path: string) => {
    if (location.pathname === path) {
      return 'bg-gray-900 text-white';
    }
    return 'text-gray-300 hover:bg-gray-700 hover:text-white';
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8"
                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                     alt="Logo"/>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className={`${calculateLinkClass('/')} ${linkClass}`}>
                    Neuste Meldungen
                  </Link>
                  <Link to="/nearby" className={`${calculateLinkClass('/nearby')} ${linkClass}`}>
                    In der Nähe
                  </Link>
                  <Link to="/locations" className={`${calculateLinkClass('/locations')} ${linkClass}`}>
                    Gemeinden
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/*<!-- Mobile menu button -->*/}
              <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/*<!--
                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                -->*/}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                {/*<!--
                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                -->*/}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/*<!-- Mobile menu, show/hide based on menu state. -->*/}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className={`${calculateLinkClass('/')} ${linkClassMobile}`}>
              Neuste Meldungen
            </Link>
            <Link to="/nearby" className={`${calculateLinkClass('/nearby')} ${linkClassMobile}`}>
              In der Nähe
            </Link>
            <Link to="/locations" className={`${calculateLinkClass('/locations')} ${linkClassMobile}`}>
              Gemeinden
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}