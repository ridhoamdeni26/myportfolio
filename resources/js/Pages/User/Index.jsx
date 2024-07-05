import Authenticated from "@/Layouts/User/Authenticated/Index";
import Home from "./Home";
import { Head } from "@inertiajs/react";

export default function Index({ profiles, typed }) {
    return (
        <>
            <Head title="Home" />
            <Authenticated>
                <Home
                    name={profiles.name}
                    country={profiles.country}
                    phone={profiles.phone}
                    email={profiles.email}
                    address={profiles.address}
                    typed={typed}
                />
            </Authenticated>
        </>
    );
}
