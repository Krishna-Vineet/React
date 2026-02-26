import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const SiteLayout = () => {
  return (
    <>
        <Header />
        < Outlet />
        <Footer />
    </>
  )
}
