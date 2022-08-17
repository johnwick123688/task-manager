import { BadgeCheckIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function Noti(){
    const [title, setTitle] = useState('Login Success')


    return (
        <div className="flex p-3 px-6 bg-green-200">
            <BadgeCheckIcon className=" h-5 w-5 text-green-500" />
            <h1 className="text-green-700">{title}</h1>
        </div>
    )
}

