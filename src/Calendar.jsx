import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar.jsx";
import "./Calendar.css";

const API_KEY = "AIzaSyCs7QWetDO87E8_f1JrjKS5ThnnYjWI5Cg";
const CALENDAR_ID = "5cace666f13ff67ee72411bbf20f23c8847215cf15018f795a0b046664f866a2@group.calendar.google.com";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [displayDate, setDisplayDate] = useState(new Date());

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client
          .init({
            apiKey: API_KEY,
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            ],
          })
          .then(() =>
            window.gapi.client.calendar.events.list({
              calendarId: CALENDAR_ID,
              timeMin: new Date(2000, 0, 1).toISOString(), // way back so past events are included
              showDeleted: false,
              singleEvents: true,
              maxResults: 200,
              orderBy: "startTime",
            })
          )
          .then((response) => setEvents(response.result.items || []))
          .catch((err) => console.error("Error fetching events:", err));
      });
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const formatDateKey = (event) =>
    event.start.dateTime
      ? new Date(event.start.dateTime).toISOString().split("T")[0]
      : event.start.date;

  const eventsByDate = events.reduce((acc, event) => {
    const key = formatDateKey(event);
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {});

  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];

  const year = displayDate.getFullYear();
  const month = displayDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const prevMonthDaysCount = firstDayOfMonth.getDay();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  const daysArray = [];
  for (let i = prevMonthDaysCount; i > 0; i--) {
    daysArray.push({
      date: new Date(year, month - 1, prevMonthLastDate - i + 1),
      currentMonth: false,
    });
  }
  for (let d = 1; d <= lastDayOfMonth.getDate(); d++) {
    daysArray.push({
      date: new Date(year, month, d),
      currentMonth: true,
    });
  }
  const remaining = 7 - (daysArray.length % 7 || 7);
  for (let d = 1; d <= remaining; d++) {
    daysArray.push({
      date: new Date(year, month + 1, d),
      currentMonth: false,
    });
  }

  const goPrevMonth = () => setDisplayDate(new Date(year, month - 1, 1));
  const goNextMonth = () => setDisplayDate(new Date(year, month + 1, 1));

  return (
    <div style={{ maxWidth: "900px", margin: "auto", paddingTop: "20px", paddingBottom: "20px", color: "white" }}>
      <NavBar />
      <title>Calendar</title>
      <div style={{ marginTop: "33px" }}></div>

      {/* Header with arrows */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={goPrevMonth} className="arrow-btn"><i class="fa-solid fa-arrow-left"></i></button>
        <h2>{displayDate.toLocaleString("default", { month: "long" })} {year}</h2>
        <button onClick={goNextMonth} className="arrow-btn"><i class="fa-solid fa-arrow-right"></i></button>
      </div>

      {/* Days of week */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginTop: "10px",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>
            {day}
          </div>
        ))}

        {daysArray.map(({ date, currentMonth }) => {
          const key = date.toISOString().split("T")[0];
          const dayEvents = eventsByDate[key] || [];
          const isToday = key === todayKey;
          const isPast = date < today.setHours(0, 0, 0, 0);

          return (
            <div
              key={key}
              style={{
                border: "1px solid #ffffff",
                borderRadius: "0px",
                padding: "5px",
                minHeight: "100px",
                color: currentMonth ? "white" : "#aaa",
                backgroundColor: isToday ? "#404040" : "transparent",
              }}
            >
              {/* Day number */}
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{date.getDate()}</div>

              {/* Events */}
              {dayEvents.map((event) => {
                const start = event.start.dateTime
                  ? new Date(event.start.dateTime).toLocaleTimeString([], {
                      hour: "numeric",   // ✅ no leading zero
                      minute: "2-digit",
                    })
                  : "All day";

                return (
                  <div
                    key={event.id}
                    style={{
                      fontSize: "0.75rem",
                      marginBottom: "6px",
                      color: isPast ? "#aaa" : currentMonth ? "white" : "#aaa",
                    }}
                  >
                    {/* Title */}
                    <div style={{ fontFamily: "RionaSansBlack", marginBottom: "2px" }}>
                      {event.summary}
                    </div>

                    {/* Time */}
                    <div style={{ fontFamily: "RionaSansMedium", fontSize: "0.7rem", marginBottom: "2px" }}>
                      {start}
                    </div>

                    {/* Location */}
                    {event.location && (
                      <div style={{ fontFamily: "RionaSansMedium", fontSize: "0.7rem" }}>
                        {event.location}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
