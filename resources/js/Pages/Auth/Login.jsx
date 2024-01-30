import LoginForm from '@/Components/backend/LoginForm';
import LoginFooter from '@/Components/backend/LoginFooter';
import { Head } from '@inertiajs/react';
import "../../../../public/assetsadmin/css/sidebar-menu.css"
import "../../../../public/assetsadmin/css/SimpleBar.css"
import "../../../../public/assetsadmin/css/app.css"

export default function Login() {
    return (
        <>
            <Head title="Login"></Head>
            <div className="loginwrapper">
                <div className="lg-inner-column">
                    <div className="left-column relative z-[1]">
                        <div className="max-w-[520px] pt-20 pl-20 pr-20">
                            <h4>
                                Welcome Admin
                                <br />
                                <span className="text-slate-800 dark:text-slate-400 font-bold">
                                    Login
                                </span>
                            </h4>
                        </div>
                        <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
                            <img src="assetsadmin/images/auth/ils1.svg" alt="" className=" h-full w-full object-contain" />
                        </div>
                    </div>
                    <div className="right-column  relative">
                        <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
                            <LoginForm />
                            <LoginFooter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
