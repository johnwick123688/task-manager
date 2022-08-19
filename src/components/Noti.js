import { BadgeCheckIcon } from '@heroicons/react/outline'

export default function Noti({title, colorS}){

    return (
        <div className= {`${colorS} notification`}>
            <BadgeCheckIcon className={`icon1`}/>
            <h1 className={`title1`}>{title}</h1>
        </div>
    )
}

