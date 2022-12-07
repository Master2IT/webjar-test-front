import React from 'react'
import Toolbar from './Toolbar'

export default function Layout({ children }: any) {
    return (
        <>
            <Toolbar></Toolbar>
            <main className='container mx-auto py-5 px-20'>
                {children}
            </main>
        </>
    )
}
