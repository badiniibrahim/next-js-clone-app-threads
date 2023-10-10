import { ThemeToggle } from '@/src/theme/ThemeToggle'
import React from 'react'

const Header = () => {
  return (
    <header className='border-b border-b-accent'>
        <div className='container flex items-center py-2 max-w-lg m-auto gap-1'>
            <h2 className='text-2xl font-bold mr-auto'>Next.js Threads Clone</h2>
            <ThemeToggle />
        </div>
    </header>
  )
}

export default Header