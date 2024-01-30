import AuthLayout from "@/Layouts/Admin/AuthLayout"
import VisitorTable from "./VisitorTable";
import VisitorHeaderCard from "./VisitorHeaderCard";
import { Head } from '@inertiajs/react';

function Index({ auth, breadcrumb, totalVisitor, mostVisitedPage, latestVisitorWithCity, visitors, currentPage }) {
    return (
        <>
            <AuthLayout user={auth.user} breadcrumb={breadcrumb} currentPage={currentPage}>
                <Head title="Dashboard" />

                <VisitorHeaderCard totalVisitor={totalVisitor} mostVisitedPage={mostVisitedPage} latestVisitorWithCity={latestVisitorWithCity} />

                <VisitorTable visitors={visitors} />
            </AuthLayout>
        </>
    )
}

export default Index