import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

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
                <img
                  className="h-8 w-8"
                  src={Logo}
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

            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
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