import Authenticated from "@/Layouts/User/Authenticated/Index";
import Home from "./Home";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Home" />
            <Authenticated>
                <Home
                    name={`Ridho Amdeni`}
                    country={`Indonesia`}
                    phone={`+6281365200863`}
                    email={`secretridho26@gmail.com`}
                    address={`Kota Tangerang`}
                    typed={[
                        "Fullstack Developer",
                        1000,
                        "Coder",
                        1000,
                        "Web Developer",
                        1000,
                        "Problem Solver",
                        1000,
                    ]}
                />
            </Authenticated>
        </>
    );
}
