import React from 'react'

function outlinedButton(props: any) {
    return (
        <button className='bg-white border-2 border-current rounded-lg py-2 px-10 text-current font-medium hover:bg-current hover:text-white'>{props}</button>
    )
}

function defaultButton(props: any) {
    return (
        <button className='bg-current text-white rounded-lg py-2 px-10 font-medium hover:bg-green-600'>{props}</button>
    )
}

export default function Button({ outlined, children }: any) {
    return (
        outlined ? outlinedButton(children) : defaultButton(children)
    )
}
