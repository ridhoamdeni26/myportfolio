import React, { useRef, useEffect, useState } from 'react';
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/themes/dark.css';

function DatePicker({ value, onChange, className = '', ...props }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onChange(date);
    };

    return (
        <>
            <Flatpickr
                {...props}
                options={{
                    dateFormat: "Y-m-d",
                    allowInput: true,
                }}
                className={
                    'form-control !pr-12 dark:bg-black-500 ' +
                    className
                }
                value={value}
                onChange={handleDateChange}
            />
        </>
    )
}

export default DatePicker