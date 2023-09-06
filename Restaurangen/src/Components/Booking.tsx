import { ChangeEvent, useContext, useEffect } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import DatePicker from "react-datepicker"
import "../calendar.css"
import { getBookings } from "../services/restaurantServices";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { checkAviability } from "../functions/checkAviability";
import { IFetchedBooking } from "../interfaces/interfaces";
import Bookingform from "./Bookingform";


export const Booking = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('18:00');
    const [guests, setGuests] = useState<string>('1');
    const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
    const passedDates = (date: Date) => new Date() <= date;
    const [isAvaible, setIsAvailable] = useState<boolean | string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        async function fetchBookings() {
            const bookings = await getBookings(restaurantId);
            setBookings(bookings);
        }
        fetchBookings();
    },[restaurantId]);

    const clickFunction = () => {
        setIsAvailable(checkAviability(time, date, guests, bookings))
        console.log(isAvaible);
    }

    const notAvaible = <p>Tyvärr har vi inte tillräckligt många lediga bord detta datumet och tiden, testa en annan dag eller annan tid</p>
    const BookingForm = (
    <div>
        <p>Det finns lediga bord detta datumet och tiden, vi behöver bara några uppgifter från dig</p>
        <form>
            <div>
                <input type='text' placeholder="Förnamn" onChange={(e : ChangeEvent<HTMLInputElement>) => setName(e.target.value)} required></input>
                <input type='text' placeholder="Efternamn" onChange={(e : ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} required></input>
            </div>
            <div>
                <input type='text' placeholder="Telefonnummer" onChange={(e : ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} required></input>
                <input type='email' placeholder="E-post" onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required></input>
            </div>
            <p>Har du andra frågor till restaurangen?</p>
            <textarea></textarea>
            <button type="submit">Boka</button>
        </form>   
    </div>)


    return <>
        <div>
            <h2>När vill ni besöka oss?</h2>
            <div>
                <DatePicker 
                    filterDate={passedDates}
                    selected={date} 
                    onChange={(date: Date) => setDate(date)}
                    dateFormat="yyyy-MM-dd">
                </DatePicker>
                <select onChange={(e : ChangeEvent<HTMLSelectElement>) => setTime(e.target.value)}>
                    <option value="18:00">18:00</option>
                    <option value="21:00">21:00</option>
                </select>
            </div>
        </div>
        <div>
            <h2>Hur många är ni?</h2>
            <input 
                type="number" 
                min="1" 
                max="24" 
                onChange={(e : ChangeEvent<HTMLInputElement>) => setGuests(e.target.value)}>
            </input>
        </div>
        <button onClick={clickFunction}>Kontrollera tillgänglighet</button>
        {isAvaible === true ? BookingForm : isAvaible === false ? notAvaible : isAvaible === '' ? '' : ''}
    </>
}