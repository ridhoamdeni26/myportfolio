import React from "react";

export default function PortfolioDetail({
    category,
    title,
    client_name,
    imageThumbnail,
    imageDescription1,
    imageDescription2,
    imageDescription3,
    date,
    description,
}) {
    return (
        <div className="list_inner">
            <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                <img
                    className="min-w-full relative opacity-0"
                    src={imageThumbnail}
                    alt=""
                />
                <div
                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageThumbnail})` }}
                ></div>
                <a
                    className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                    href="#"
                ></a>
            </div>
            <div className="details w-full float-left">
                <span className="category inline-block mb-[7px]">
                    <a href="#">Modalbox</a>
                </span>
                <h3 className="title">
                    <a className="line_effect portfolio_popup" href="#">
                        Beautiful Boat
                    </a>
                </h3>
            </div>
        </div>
    );
}
