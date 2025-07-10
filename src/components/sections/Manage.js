import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const ManageSection = () => {
  return (
    <section className="relative py-section">
      <span className="bg-mask-right"></span>
      <div className="container relative mx-auto px-4 py-block">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-12">
          <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0">
            <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
              Manage
            </div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              <span className="italic">Simplify</span> your online management.
            </h2>
            <p className="text-base-content/80 mb-12">
              RelentNet&apos;s all-in-one website management platform simplifies your
              digital operations, from design and development to hosting,
              updates, and ongoing support. From design and development to
              hosting and updates, we provide a seamless experience that puts
              everything you need at your fingertips.
            </p>
            <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
              Benefits
            </div>
            <p className="text-base-content/80 mb-4">
              <strong>- Centralized Control</strong>
              <br />
              Manage all aspects of your website from a single, user-friendly
              dashboard, saving you time and effort.
            </p>
            <p className="text-base-content/80 mb-4">
              <strong>- Comprehensive Tools</strong>
              <br />
              Access a full suite of tools for design, content management,
              e-commerce, analytics, and more, all in one place.
            </p>
            <p className="text-base-content/80 mb-12">
              <strong>- 24/7 Support</strong>
              <br />
              Our dedicated team is always available to assist with any issues
              or questions, ensuring your site runs smoothly.
            </p>
            <Link
              href="https://clients.relentnet.com/index.php?rp=/login"
              className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
            >
              Access your account
              <PlayIcon className="size-3 -mt-0.5 ml-2 inline-block group-hover:rotate-[360deg] transition-transform duration-200 text-white" />
            </Link>
          </div>
          <Image
            src="/images/software-23.png"
            alt="Simplify Online Management"
            className="object-contain"
            quality={100}
            width={500}
            height={500}
            sizes="(max-width: 768px) 350px, 500px"
          />
        </div>
      </div>
    </section>
  );
};

export default ManageSection;
