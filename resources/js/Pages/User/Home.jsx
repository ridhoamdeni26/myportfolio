import HomeLeft from "@/Components/HomeLeft";
import HomeRight from "@/Components/HomeRight";
import AnimateHome from "@/Components/AnimateHome";

export default function Home({ name, country, phone, email, address, typed, image_homepage }) {
    return (
        <div>
            <AnimateHome />
            <div className="elisc_tm_section">
                <div className="elisc_tm_home w-full min-h-screen clear-both float-left">
                    <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-4">
                        <div className="details w-full min-h-screen flex items-center">
                            <HomeLeft name={name} country={country} phone={phone} email={email} address={address} typed={typed} />
                            <HomeRight image_homepage={image_homepage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
