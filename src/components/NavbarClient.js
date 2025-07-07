"use client";

import { useState, useEffect, useRef } from "react";

export default function NavbarClient({ children }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleDropdownClick = (e) => {
      const summary = e.target.closest('summary');
      if (summary) {
        e.preventDefault();
        const dropdownId = summary.getAttribute('data-dropdown-id');
        if (dropdownId) {
          setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
        }
      }
    };

    const navbar = navRef.current;
    if (navbar) {
      navbar.addEventListener('click', handleDropdownClick);
      return () => navbar.removeEventListener('click', handleDropdownClick);
    }
  }, [openDropdown]);

  useEffect(() => {
    const details = navRef.current?.querySelectorAll('details[data-dropdown-id]');
    details?.forEach(detail => {
      const dropdownId = detail.getAttribute('data-dropdown-id');
      detail.open = openDropdown === dropdownId;
    });
  }, [openDropdown]);

  return (
    <div ref={navRef}>
      {children}
    </div>
  );
}