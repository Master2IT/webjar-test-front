import React, { useEffect, useState } from 'react'
import BlogContentBox from '../components/BlogContentBox'
import Input from '../components/Input'

interface Category {
    text: string,
    isChecked: boolean
}

export default function blog() {
    const categories: Category[] = [
        {
            text: 'کامپیوتر',
            isChecked: true
        },
        {
            text: 'سیستم های اداری',
            isChecked: true
        },
        {
            text: 'سیستم های تجاری',
            isChecked: false
        },
        {
            text: 'سیستم های عمومی',
            isChecked: false
        },
        {
            text: 'سیستم های اموزشی',
            isChecked: false
        },
    ]
    const [posts, setPosts]: any = useState([])
    useEffect(() => {
        fetchApi();
    }, [])
    const fetchApi = async () => {
        const url: any = process.env.api_url + "posts";
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data)
    }
    return (
        <div className='mt-10'>
            <div className='mx-auto text-center w-2/4'>
                <h1 className='font-bold text-4xl'>وبلاگ</h1>
                <Input placeholder="جستجو کنید" icon="search-outline"></Input>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='bg-white rounded-xl p-5 h-fit'>
                    <h3 className='font-bold text-2xl'>دسته بندی</h3>
                    <ul className='mt-3'>
                        {
                            categories.map((category, index) => {
                                return (
                                    <li key={index} className='my-5'>
                                        <label className='cursor-pointer flex items-center justify-between'>
                                            {category.text}
                                            <input className={`${category.isChecked ? 'text-current bg-current' : ''}`} checked={category.isChecked} onChange={(e: any) => { category.isChecked = e.target.checked }} type="checkbox" />
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-span-2'>
                    {
                        posts.length ?
                            posts.map((post: any) => {
                                return (
                                    <BlogContentBox {...post}></BlogContentBox>
                                )
                            })
                            : <p>در حال بارگذاری...</p>
                    }

                </div>
            </div>
        </div>
    )
}
