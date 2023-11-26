export default function ContactDetail({ profiles }) {
    return (
        <div className="left w-1/2 pr-[50px]">
            <div className="elisc_tm_title w-full float-left">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                    - Let's Connect
                </span>
                <h3 className="text-[40px] font-extrabold">Get in touch</h3>
            </div>
            <div className="text w-full float-left mt-[20px] mb-[40px]">
                <p>
                    I'm currently avaliable to take on new projects, so feel
                    free to send me a message about anything that you want to
                    run past me. You can contact anytime at 24/7
                </p>
            </div>
            <div className="info w-full float-left">
                <ul>
                    <li className="mb-[8px] w-full float-left">
                        <div className="text-dark-color font-semibold font-inter inline-block relative">
                            {profiles.phone}
                        </div>
                    </li>
                    <li className="mb-[8px] w-full float-left">
                        <div className="text-dark-color font-semibold font-inter inline-block relative">
                            {profiles.email}
                        </div>
                    </li>
                    <li className="w-full float-left">
                        <div className="href_location text-dark-color font-semibold font-inter inline-block relative">
                            {profiles.city}, {profiles.country}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
