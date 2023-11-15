import React from 'react'

export default function AboutmeExperience({ statistics }) {
    return (
        <ul className="your-list-styles">
            {statistics.map((item, index) => (
                <li key={index} className="mb-[30px] float-left w-1/3 pl-[30px]">
                    <div className={`list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[${item.color}]`}>
                        <h3 className="text-[40px] mb-[7px]">{item.number}</h3>
                        <span className="font-medium font-karla uppercase">{item.label}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}
