import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import "../../../../public/assetsadmin/css/sidebar-menu.css"
import "../../../../public/assetsadmin/css/SimpleBar.css"
import "../../../../public/assetsadmin/css/rt-plugins.css"
import "../../../../public/assetsadmin/css/app.css"
import Sidebar from '@/Components/backend/partials/Sidebar';
import Header from '@/Components/backend/partials/Header';
import Footer from '@/Components/backend/partials/Footer';
import { Link } from '@inertiajs/react';


function AuthLayout({ user, breadcrumb, children, currentPage }) {
    useEffect(() => {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'assetsadmin/js/jquery-3.6.0.min.js';
        jqueryScript.async = true;
        jqueryScript.onload = () => {
            loadScript('assetsadmin/js/rt-plugins.js');
            loadScript('assetsadmin/js/SimpleBar.js');
            loadScript('assetsadmin/js/sidebar-menu.js');
            loadScript('assetsadmin/js/app.js');
        };
        document.body.appendChild(jqueryScript);

        return () => {
            document.body.removeChild(jqueryScript);
        };
    }, []);

    return (
        <>
            <main className="app-wrapper dark:bg-slate-900">
                {/* Sidebar */}
                <Sidebar currentPage={currentPage} />

                {/* Header */}
                <div className="flex flex-col justify-between min-h-screen">
                    <div>
                        <Header user={user} />

                        <div
                            className="content-wrapper transition-all duration-150 ml-[248px] dark"
                            id="content_wrapper"
                        >
                            <div className="page-content">
                                <div
                                    className="transition-all duration-150 container-fluid"
                                    id="page_layout"
                                >
                                    <div id="content_layout">
                                        {breadcrumb && (
                                            <div className="mb-5">
                                                <ul className="m-0 p-0 list-none flex items-center space-x-2">
                                                    {breadcrumb.map((item, index) => (
                                                        <li key={index} className="flex items-center text-sm text-primary-500 font-Inter">
                                                            {item.url ? (
                                                                <Link href={item.url} className="flex items-center">
                                                                    <span>{item.label}</span>
                                                                </Link>
                                                            ) : (
                                                                <span>{item.label}</span>
                                                            )}
                                                            {index < breadcrumb.length - 1 && (
                                                                <Icon icon="heroicons-outline:chevron-right" className="ml-1"></Icon>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="space-y-5">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default AuthLayout

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}