import { navItemsData, accountItemsData } from "../../data/navbarData";
import { UserIcon } from "@heroicons/react/24/solid";
import NavbarClient from "./NavbarClient";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <NavbarClient>
        <div className="fixed top-0 right-0 left-0 z-200 navbar h-20 bg-base-200 text-base-content shadow-sm">
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
                className="dropdown-content menu z-1 mt-4 w-52 rounded-box bg-base-200 p-2 shadow"
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
            <Link href="/" className="btn text-xl normal-case btn-ghost">
              <Image
                src="/images/relentnet-logo.png"
                alt="RelentNet Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal menu-lg px-1">
              {navItemsData.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <details data-dropdown-id={`nav-${index}`}>
                      <summary data-dropdown-id={`nav-${index}`}>
                        {item.label}
                      </summary>
                      <ul className="dropdown-content z-1 !mt-6 w-80 rounded-box bg-base-200 p-2 shadow">
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
                  className="btn text-lg btn-ghost"
                  data-dropdown-id="account"
                >
                  <UserIcon className="size-6" />
                  Account
                </summary>
                <ul className="dropdown-content menu z-1 mt-5 w-72 menu-lg rounded-box bg-base-200 p-2 shadow">
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
      <div className="relative h-20 w-full bg-base-100" />
    </>
  );
}
