import { useState } from "react";
import ServiceModal from "./ServiceModal";

export default function ServiceDetail({ services }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [currentNumber, setCurrentNumber] = useState(1);

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };

    const openModal = () => {
        setSelectedService();
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setShowModal(false);
    };
    return (
        <>
            <ul className="ml-[-30px] flex flex-wrap">
                {services.map((service, index) => (
                    <li key={service.id} className="mb-[30px] pl-[30px] w-1/3 float-left">
                        <img className="popup_image" src="assets/img/service/2.jpg" alt="" />
                        <div className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                            <div className="details w-full float-left relative z-[1]">
                                <div className="title w-full float-left mb-[13px]">
                                    <span className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">{formatNumber(currentNumber + index)}</span>
                                    <h3 className="text-[20px]">{service.title}</h3>
                                </div>
                                <div className="text w-full float-left mb-[25px]">
                                    <p className="text-[#55527C] opacity-[0.7]">Web development is the process of building, programming...</p>
                                </div>
                                <div className="elisc_tm_read_more">
                                    <a href="#">Read More<span className="inline-block"><img className="svg" src="assets/img/svg/rightArrow.svg" alt="" /></span></a>
                                </div>
                            </div>
                            <a
                                className="elisc_tm_full_link absolute inset-0 z-[5]"
                                href="#"
                                onClick={() => openModal()}
                            ></a>
                        </div>
                    </li>
                ))}
            </ul>
            <ServiceModal showModal={showModal} closeModal={closeModal} />
        </>
    )
}
