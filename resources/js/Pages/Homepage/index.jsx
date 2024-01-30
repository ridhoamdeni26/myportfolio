import AuthLayout from "@/Layouts/Admin/AuthLayout"

function index() {
    return (
        <AuthLayout user={auth.user} breadcrumb={breadcrumb} currentPage={currentPage}>
            <Head title="Homepage" />
        </AuthLayout>
    )
}

export default index