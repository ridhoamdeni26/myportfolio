import AuthLayout from "@/Layouts/Admin/AuthLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

function index({ auth, breadcrumb, currentPage }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        titlehomepage: "",
    });
    return (
        <AuthLayout
            user={auth.user}
            breadcrumb={breadcrumb}
            currentPage={currentPage}
        >
            <Head title="Homepage" />

            <div className="card">
                <div className="card-body flex flex-col p-6">
                    <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1">
                            <div className="card-title text-slate-900 dark:text-white">
                                Homepage Data
                            </div>
                        </div>
                    </header>
                    <div className="card-text h-full space-y-4">
                        <div className="input-area relative pl-28">
                            <InputLabel
                                htmlFor="titlehomepage"
                                value="Title Homepage"
                                className="mb-2 absolute left-0 top-1/2 -translate-y-1/2 block cursor-pointer font-Inter font-medium capitalize text-slate-700 dark:text-slate-50 leading-6"
                            />

                            <TextInput
                                id="titlehomepage"
                                type="text"
                                name="titlehomepage"
                                className="form-control !py-1 !text-xs ml-2"
                                onChange={(e) =>
                                    setData("titlehomepage", e.target.value)
                                }
                                isFocused={true}
                                placeholder="Title Homepage"
                                required
                            />

                            <InputError
                                message={errors.titlehomepage}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default index;
