import HomeLeft from "@/Components/HomeLeft";
import HomeRight from "@/Components/HomeRight";
export default function Home({ name, country, phone, email, address, typed }) {
    return (
        <div className="elisc_tm_section animated" id="home">
            <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
                <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                    <div className="details w-full min-h-[100vh] flex items-center">
                        <HomeLeft name={name} country={country} phone={phone} email={email} address={address} typed={typed} />
                        <HomeRight />
                    </div>
                </div>
            </div>
        </div>
    );
}
