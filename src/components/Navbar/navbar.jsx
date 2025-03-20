import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
const navigation = [
  { name: 'Employees', href: '/employees'},
  { name: 'Customers', href: '/customers'},
  { name: 'Projects', href: '/others'},
  { name: 'Calendar', href: '/others2'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className=" md:flex md:justify-center px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            <div className="absolute inset-y-0 left-0 flex justify-start items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={({isActive}) => {
                        return (
                          ' rounded-md px-3 py-2 text-sm font-medium ' +
                          (!isActive 
                            ? ' text-gray-300 hover:bg-gray-700 hover:text-white ' 
                            : ' bg-gray-900 text-white ') 
                        );
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={({isActive}) => {
                  return (
                    ' block rounded-md px-3 py-2 text-base font-medium ' +
                    (!isActive 
                      ? ' text-gray-300 hover:bg-gray-700 hover:text-white ' 
                      : ' bg-gray-900 text-white ') 
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
        {props.children}
    </>
  );
}
