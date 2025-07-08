import { navItemsData, accountItemsData } from "../../data/navbarData";
import { UserIcon } from "@heroicons/react/24/solid";
import NavbarClient from "./NavbarClient";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <NavbarClient>
        <div className="navbar fixed top-0 left-0 right-0 h-20 z-200 bg-base-200 shadow-sm text-base-content">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow"
              >
                {navItemsData.map((item, index) => (
                  <li key={index}>
                    {item.dropdown ? (
                      <details>
                        <summary>{item.label}</summary>
                        <ul>
                          {item.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <li className="menu-title text-primary">
                                {section.sectionLabel}
                              </li>
                              {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href={link.url}>{link.label}</a>
                                </li>
                              ))}
                            </div>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <a href={item.url}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              <Image
                src="/images/relentnet-logo.png"
                alt="RelentNet Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 menu-lg">
              {navItemsData.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <details data-dropdown-id={`nav-${index}`}>
                      <summary data-dropdown-id={`nav-${index}`}>
                        {item.label}
                      </summary>
                      <ul className="dropdown-content bg-base-200 rounded-box z-1 !mt-6 w-80 p-2 shadow">
                        {item.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <li className="menu-title text-primary">
                              {section.sectionLabel}
                            </li>
                            {section.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a
                                  href={link.url}
                                  className="flex items-center gap-2"
                                >
                                  {link.icon && (
                                    <link.icon className="h-4 w-4" />
                                  )}
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </div>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a href={item.url}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <details data-dropdown-id="account">
                <summary
                  className="btn btn-ghost text-lg"
                  data-dropdown-id="account"
                >
                  <UserIcon className="size-6" />
                  Account
                </summary>
                <ul className="menu menu-lg dropdown-content bg-base-200 rounded-box z-1 mt-4 w-72 p-2 shadow">
                  {accountItemsData[0].sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <li className="menu-title text-primary">
                        {section.sectionLabel}
                      </li>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.url}
                            className="flex items-center gap-2"
                          >
                            {link.icon && <link.icon className="h-4 w-4" />}
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>
      </NavbarClient>
      <div className="h-20 w-full relative bg-base-100" />
    </>
  );
}
