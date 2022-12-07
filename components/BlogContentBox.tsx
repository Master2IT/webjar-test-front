import React from 'react'
import Button from './Button'
import Moment from 'react-moment';
import 'moment/locale/fa';
import parse from 'html-react-parser'

export default function BlogContentBox(props: any) {
    const { title, body, commentCount, updatedAt, introImageUrl, author } = props
    return (
        <div className='bg-white rounded-xl grid grid-cols-4 gap-3 h-60 shadow-sm mb-10'>
            <div className='py-5 pr-5'>
                <img src={introImageUrl.host} alt={title} className='w-full h-full rounded-lg' />
            </div>
            <div className='col-span-2 p-5 flex flex-col justify-between'>
                <div>
                    <h2 className='font-medium text-lg'>{title}</h2>
                    <p className='mt-2 h-24 overflow-hidden leading-8'>{parse(body)}</p>
                </div>
                <ul className='flex items-center justify-between pb-2'>
                    <li className='flex items-center text-gray-500'>
                        {/* @ts-ignore:next-line */}
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span className='mr-2 text-xs'>
                            <Moment format='YYYY/MM/DD' locale="fa">{updatedAt}</Moment>
                        </span>
                    </li>
                    <li className='flex items-center text-gray-500'>
                        {/* @ts-ignore:next-line */}
                        <ion-icon name="chatbox-outline"></ion-icon>
                        <span className='mr-2 text-xs'>{commentCount} نظر</span>
                    </li>
                    <li className='flex items-center text-gray-500'>
                        {/* @ts-ignore:next-line */}
                        <ion-icon name="person-outline"></ion-icon>
                        <span className='mr-2 text-xs'>{author}</span>
                    </li>
                </ul>
            </div>
            <div className='place-self-end p-5'>
                <Button>بیشتر</Button>
            </div>
        </div>
    )
}
