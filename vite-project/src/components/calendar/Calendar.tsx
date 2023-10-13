// import "@fontsource/anek-telugu";
import { useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import * as Styles from "./styles.ts";

dayjs.locale("fr");

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const currentDay = useMemo(() => dayjs().toDate(), []);

  const firstDayOfTheMonth = useMemo(
    () => selectedDate.clone().startOf("month"),
    [selectedDate]
  );

  const firstDayOfFirstWeekOfMonth = useMemo(
    () => {
      // Commencez la semaine un lundi (1) et assurez-vous d'afficher les jours précédents si nécessaire
      const firstDay = dayjs(firstDayOfTheMonth).startOf("week").day(1);
      return firstDay.isAfter(firstDayOfTheMonth) ? firstDay.subtract(7, "days") : firstDay;
    },
    [firstDayOfTheMonth]
  );

  const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];
    for (let i = 1; i < 6; i++) {
      const date = day.clone().add(i, "week");
      dates.push(date);
    }
    return dates;
  }, []);

  const generateWeek = useCallback((day: Dayjs): Date[] => {
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = day.clone().add(i, "day").toDate();
      dates.push(date);
    }
    return dates;
  }, []);

  const generateWeeksOfTheMonth = useMemo((): Date[][] => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(
      firstDayOfFirstWeekOfMonth
    );
    return firstDayOfEachWeek.map((date) => generateWeek(date));
  }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

  const handleDateClick = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return (
    <Styles.MainWrapper>
      <Styles.CalendarHeaderWrapper>
        <h3>{selectedDate.clone().format("MMM YYYY")}</h3>
        <div>
          <MdKeyboardArrowLeft
            size={25}
            onClick={() => setSelectedDate((date) => date.subtract(1, "month"))}
          />
          <MdKeyboardArrowRight
            size={25}
            onClick={() => setSelectedDate((date) => date.add(1, "month"))}
          />
        </div>
      </Styles.CalendarHeaderWrapper>
      <Styles.WeekDaysWrapper>
        {generateWeeksOfTheMonth[0].map((day, index) => (
          <Styles.WeekDayCell key={`week-day-${index}`}>
            {dayjs(day).format("dd")}
          </Styles.WeekDayCell>
        ))}
      </Styles.WeekDaysWrapper>
      {generateWeeksOfTheMonth.map((week, weekIndex) => (
        <Styles.CalendarContentWrapper key={`week-${weekIndex}`}>
           {week.map((day, dayIndex) => (
            <Styles.CalendarDayCell
              key={`day-${dayIndex}`}
              variant={
                selectedDate.clone().toDate().getMonth() !== day.getMonth()
                  ? "nextMonth"
                  : dayjs(currentDay).isSame(day, "date")
                  ? "today"
                  : "default"
              }
              onClick={() => handleDateClick(dayjs(day))}
            >
              {day.getDate()}
            </Styles.CalendarDayCell>
          ))}
        </Styles.CalendarContentWrapper>
      ))}
    </Styles.MainWrapper>
  )
}