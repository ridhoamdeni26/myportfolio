import React from 'react'

function Footer() {
    return (
        <footer className="md:block hidden" id="footer">
            <div
                className="site-footer px-6 bg-slate-800 text-slate-300 py-4 ml-[248px]"
            >
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
                    <div
                        className="text-center ltr:md:text-start rtl:md:text-right text-sm"
                    >
                        COPYRIGHT ©
                        <span id="thisYear"></span>
                        Ridho Amdeni, All rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer