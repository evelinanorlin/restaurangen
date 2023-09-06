import { ChangeEvent, FormEvent } from "react";
import { BookingSection } from "./style/BookingStyle";
import { ButtonYellow } from "./style/Buttons";
import { Select, Input } from "./style/Form";
import { H2 } from "./style/Title";
import { BookingWrapper } from "./style/Wrappers";
import DatePicker from "react-datepicker";
import { LightP } from "./style/P";

interface ICheckAvaibilityProps {
    clickFunction: (e: FormEvent) => void;
    setDate: (date: Date) => void;
    setTime: (time: string) => void;
    setGuests: (guests: string) => void;
    date: Date;
    time: string;
    guests: string;
    isAvaible: boolean | string;
}

export default function CheckAvaibility(props: ICheckAvaibilityProps) {
  const passedDates = (date: Date) => new Date() <= date;

  const notAvaible = (
    <LightP>
        Tyvärr har vi inte tillräckligt många lediga bord 
        detta datumet och tiden, testa en annan dag eller annan tid
    </LightP>)

    return (
      <BookingSection>
        <BookingWrapper>
          <form onSubmit={props.clickFunction}>
              <div>
                  <H2>När vill ni besöka oss?</H2>
                  <div>
                      <DatePicker 
                          filterDate={passedDates}
                          selected={props.date} 
                          onChange={(date: Date) => props.setDate(date)}
                          dateFormat="yyyy-MM-dd"
                          required>
                      </DatePicker>
                      <Select onChange={(e : ChangeEvent<HTMLSelectElement>) => props.setTime(e.target.value)} required>
                          <option value="18:00">18:00</option>
                          <option value="21:00">21:00</option>
                      </Select>
                  </div>
              </div>
              <div>
                  <H2>Hur många är ni?</H2>
                  <Input 
                      type="number" 
                      min="1" 
                      max="24" 
                      onChange={(e : ChangeEvent<HTMLInputElement>) => props.setGuests(e.target.value)}
                      required>
                  </Input>
              </div>
              <ButtonYellow type='submit'>Kontrollera tillgänglighet</ButtonYellow>
          </form>
          {props.isAvaible === false ? notAvaible : props.isAvaible === '' ? '' : ''}
      </BookingWrapper>
  </BookingSection>
    )
}