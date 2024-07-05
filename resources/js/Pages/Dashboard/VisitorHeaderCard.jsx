import { Icon } from '@iconify/react';
import { useState, useEffect } from "react";

function VisitorHeaderCard({ totalVisitor, mostVisitedPage, latestVisitorWithCity }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className="flex justify-between flex-wrap items-center mb-6">
                <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block pr-4 mb-1 sm:mb-0">Visitors</h4>
            </div>
            <div className="grid grid-cols-12 gap-5 mb-5">
                <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {loading ? (
                            <div className="card">
                                <div className="card-body pt-4 pb-3 px-4">
                                    <div className="flex space-x-3 ">
                                        <div className="skeleton animate-pulse flex-none">
                                            <div className="skeleton animate-pulse h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl bg-slate-900 text-info-500">
                                                <div class="skeleton animate-pulse w-16 h-16 rounded-full shrink-0"></div>
                                            </div>
                                        </div>
                                        <div className="skeleton animate-pulse flex-1">
                                            <div className="text-slate-300 text-sm mb-1 font-medium">
                                            </div>
                                            <div className="text-white text-lg font-medium">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="card">
                                <div className="card-body pt-4 pb-3 px-4">
                                    <div className="flex space-x-3 ">
                                        <div className="flex-none">
                                            <div className="h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl bg-slate-900 text-info-500">
                                                <Icon icon="material-symbols:nest-doorbell-visitor"></Icon>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-slate-300 text-sm mb-1 font-medium">
                                                Totel Visitor
                                            </div>
                                            <div className="text-white text-lg font-medium">
                                                {totalVisitor}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {loading ? (
                            <div className="card">
                                <div className="card-body pt-4 pb-3 px-4">
                                    <div className="flex space-x-3 ">
                                        <div className="skeleton animate-pulse flex-none">
                                            <div className="skeleton animate-pulse h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl bg-slate-900 text-info-500">
                                                <div class="skeleton animate-pulse w-16 h-16 rounded-full shrink-0"></div>
                                            </div>
                                        </div>
                                        <div className="skeleton animate-pulse flex-1">
                                            <div className="text-slate-300 text-sm mb-1 font-medium">
                                            </div>
                                            <div className="text-white text-lg font-medium">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="card">
                                <div className="card-body pt-4 pb-3 px-4">
                                    <div className="flex space-x-3 mb-3">
                                        <div className="flex-none">
                                            <div className="h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl bg-slate-900	 text-warning-500">
                                                <Icon icon="mdi:eye"></Icon>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-slate-300 text-sm mb-1 font-medium">
                                                Most Visited Page:
                                            </div>
                                            <div className="text-white text-lg font-medium">
                                                {mostVisitedPage?.visit_count}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {loading ? (
                            <div className="card">
                                <div className="card-body pt-4 pb-3 px-4">
                                    <div className="flex space-x-3 ">
                                        <div className="skeleton animate-pulse flex-none">
                                            <div className="skeleton animate-pulse h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl bg-slate-900 text-info-500">
                                                <div class="skeleton animate-pulse w-16 h-16 rounded-full shrink-0"></div>
                                            </div>
                                        </div>
                                        <div className="skeleton animate-pulse flex-1">
                                            <div className="text-slate-300 text-sm mb-1 font-medium">
                                            </div>
                                            <div className="text-white text-lg font-medium">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="card">
                                <div className="card-body pt-4 pb-3 px-4">
                                    <div className="flex space-x-3 ">
                                        <div className="flex-none">
                                            <div className="h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl dark:bg-slate-900	 text-[#5743BE]">
                                                <Icon icon="mingcute:time-line"></Icon>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="dark:text-slate-300 text-sm mb-1 font-medium">
                                                Latest Visitor:
                                            </div>
                                            <div className="dark:text-white text-lg font-medium">
                                                {latestVisitorWithCity.visit_time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitorHeaderCard