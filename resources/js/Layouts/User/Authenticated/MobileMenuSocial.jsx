import React from 'react'

function MobileMenuSocial() {

    const socialMedia = [
        {
            name: 'facebook',
            iconClass: 'icon-facebook-1',
            link: 'https://www.facebook.com/ridho.amdeni'
        },
        {
            name: 'twitter',
            iconClass: 'icon-twitter-1',
            link: 'https://x.com/_auahhgelapp?s=21&t=OVfTOp275bfUzQv58A1Ygg'
        },
        {
            name: 'linkedin',
            iconClass: 'icon-linkedin-1',
            link: 'https://www.linkedin.com/in/ridho-amdeni-72951a14b/'
        },
        {
            name: 'github',
            iconClass: 'icon-github-1',
            link: 'https://github.com/ridhoamdeni26'
        }
    ];

    return (
        <div className="social w-full float-left mb-[5px]">
            <ul>
                {socialMedia.map((social, index) => (
                    <li key={index} className="mr-[8px] inline-block">
                        <a className="text-[#333]" href={social.link}>
                            <i className={social.iconClass}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenuSocial