import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import TawkChat from '@/components/TawkChat'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-base-100 text-base-content">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <TawkChat />
    </>
  ),
})
