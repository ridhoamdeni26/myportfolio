import Authenticated from "@/Layouts/User/Authenticated/Index";
import { Head } from "@inertiajs/react";
import ContactDetail from "@/Components/ContactDetail";
import ContactForm from "@/Components/ContactForm";

export default function Contact({ profiles }) {
    return (
        <>
            <Authenticated>
                <Head title="Contact Me"></Head>
                <div className="elisc_tm_section" id="contact">
                    <div className="elisc_tm_contact w-full min-h-[100vh] float-left bg-[#E9F9FF] pt-[120px]">
                        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
                            <div className="wrapper w-full float-left flex">
                                <ContactDetail profiles={profiles} />
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
