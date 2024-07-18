export default function SidebarSocialLink() {
    const socialLinks = [
        { iconClass: "icon-facebook-1", href: "https://www.facebook.com/ridho.amdeni" },
        { iconClass: "icon-twitter-1", href: "https://x.com/_auahhgelapp?s=21&t=OVfTOp275bfUzQv58A1Ygg" },
        { iconClass: "icon-linkedin-1", href: "https://www.linkedin.com/in/ridho-amdeni-72951a14b/" },
        { iconClass: "icon-github-1", href: "https://github.com/ridhoamdeni26" }
    ];

    const SocialLink = ({ href, iconClass }) => {
        return (
            <a className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color" href={href}>
                <i className={`${iconClass} absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]`}></i>
            </a>
        );
    };

    return (
        <div className="social w-full float-left mb-[7px]">
            <ul>
                {socialLinks.map((link, index) => (
                    <li className={index !== socialLinks.length - 1 ? "mr-[3px] inline-block" : "inline-block"} key={index}>
                        <SocialLink href={link.href} iconClass={link.iconClass} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
