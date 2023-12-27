import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './Calender.css';
import styles from '../../styles/Calender.module.css'

function Calender() {
    // const [date, setDate] = useState(new Date());

    return (
        <div className=''>
            <div className=''>
                <Calendar />
            </div>

        </div>
    );
}

export default Calender;