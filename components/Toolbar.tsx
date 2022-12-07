import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { useRouter } from "next/router"

export default function Toolbar() {
  const router = useRouter()

  const menuItems = [
    {
      text: 'خانه',
      url: '/',
      isActive: false
    },
    {
      text: 'محصولات',
      url: '/products',
      isActive: false
    },
    {
      text: 'خدمات',
      url: '/services',
      isActive: false
    },
    {
      text: 'وبلاگ',
      url: '/blog',
      isActive: false
    },
  ]

  menuItems.forEach(menu => {
    if (menu.url == router.pathname) menu.isActive = true
  });
  return (
    <div className='bg-white p-5'>
      <div className="container mx-auto px-20 flex justify-between">
        <div className='flex items-center'>
          <Image src="" alt="Logo" width="50" height="50"></Image>
          <ul className='flex items-center mr-10'>
            {
              menuItems.map(menu => {
                return (
                  <li className={`mx-3 px-5 pb-3 ${menu.isActive ? 'border-b-4 border-current' : ''}`} key={menu.url}>
                    <Link href={menu.url}>{menu.text}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Button outlined>ورود</Button>
      </div>
    </div>
  )
}
