
import React from 'react'

interface Props {
    label: string;
    placeholder: string;
    icon: string,
    iconSize: number
}

export default function Input(props: any) {

    const { label, placeholder, icon, iconSize }: Props = props;

    const defaultProps: Props = {
        label: 'تست',
        placeholder: "تست خود را وارد کنید",
        icon: "person-outline",
        iconSize: 25
    }

    return (
        <div className='my-5 flex flex-col shadow-sm shadow-inner bg-white border p-3 rounded-xl'>
            {label ? <label className='font-medium mb-1' htmlFor="custom-input">{label || defaultProps.label}</label> : ''}
            <div className='flex items-center'>
                {/* @ts-ignore:next-line */}
                <ion-icon style={{ fontSize: iconSize || defaultProps.iconSize + 'px' }} name={icon || defaultProps.icon}></ion-icon>
                <input className='outline-none w-full mr-2' type="text" id="custom-input" placeholder={placeholder || defaultProps.placeholder} />
            </div>
        </div>
    )
}
