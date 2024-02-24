import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import "./Calendar/CalendarPage.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function CalendarPage() {
  const date = format(new Date(), "MM/dd/yyyy");
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <>
      <h1 className="page-title">Calendar</h1>
      <main className="page">
        <div className="calendar-container">
          <div className="calendar-header">
            <h2 className="current-date">{format(date, "yyyy")}</h2>
            <h3>{format(date, "MMMM d")}</h3>
          </div>
          <div className="calendar-grid">
            {days.map((day) => {
              return (
                <p className="day-of-week" key={day}>
                  {day}
                </p>
              );
            })}
            {Array.from({ length: startingDayIndex }).map((_, index) => {
              return <div className="empty-tiles" key={`empty-${index}`} />;
            })}
            {daysInMonth.map((day, index) => {
              return (
                <div className="tile" key={index}>
                  {format(day, "d")}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default CalendarPage;
