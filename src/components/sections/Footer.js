import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-base-300">
      <div className="container py-section mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center text-center md:text-left">
        <div className="max-w-[150px] mx-auto md:mx-0">
          <Image
            src="/images/relentnet-logo.png"
            alt="RelentNet Logo"
            quality={100}
            width={150}
            height={150}
            sizes="(max-width: 768px) 75px, (max-width: 1024px) 100px, 150px"
          />
        </div>
        <div className="gap-y-4">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Quick Links
          </div>
          <ul className="gap-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-primary transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="gap-y-4">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Contact
          </div>
          <ul className="gap-y-2">
            <li className="flex items-center justify-center gap-x-2 md:justify-start">
              <MapPinIcon className="size-5 text-primary" />
              <span className="text-base-content/80">Nashville, TN</span>
            </li>
            <li className="flex items-center justify-center gap-x-2 md:justify-start">
              <PhoneIcon className="size-5 text-primary" />
              <span className="text-base-content/80">+1 (918) 550-9049</span>
            </li>
            <li className="flex items-center justify-center gap-x-2 md:justify-start">
              <EnvelopeIcon className="size-5 text-primary" />
              <span className="text-base-content/80">
                support@relentnet.com
              </span>
            </li>
          </ul>
        </div>
        <div className="gap-y-4">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Policies
          </div>
          <ul className="gap-y-2 text-base-content/80">
            <li>
              <Link
                href="/policies/cloud-based-contracts"
                className="hover:text-primary transition duration-200"
              >
                Cloud-Based Contract
              </Link>
            </li>
            <li>
              <Link
                href="/policies/web-and-app-contracts"
                className="hover:text-primary transition duration-200"
              >
                Web & App Development Contract
              </Link>
            </li>
            <li>
              <Link
                href="/policies/privacy-policy"
                className="hover:text-primary transition duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/policies/refund-policy"
                className="hover:text-primary transition duration-200"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/policies/terms-of-service"
                className="hover:text-primary transition duration-200"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="container mx-auto py-block md:py-2 px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-base-content/80">
            &copy; 2025 RelentNet. All rights reserved.
          </p>
          <div className="flex gap-x-4">
            <Link
              href="#"
              className="hover:text-primary transition duration-200"
            >
              <span className="text-base-content/80">Twitter</span>
            </Link>
            <Link
              href="#"
              className="hover:text-primary transition duration-200"
            >
              <span className="text-base-content/80">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="hover:text-primary transition duration-200"
            >
              <span className="text-base-content/80">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
