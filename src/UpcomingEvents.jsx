import React, { useEffect, useState } from "react";
import "./Calendar.css";

const API_KEY = "AIzaSyCs7QWetDO87E8_f1JrjKS5ThnnYjWI5Cg";
const CALENDAR_ID = "5cace666f13ff67ee72411bbf20f23c8847215cf15018f795a0b046664f866a2@group.calendar.google.com";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

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
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 4, // fetch 4
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

  const today = new Date();

  // ✅ Only show 3 events if on mobile (CSS handles layout)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const visibleEvents = isMobile ? events.slice(0, 3) : events;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "10px",
        color: "white",
      }}
    >
      <div className="events-container">
        {visibleEvents.map((event) => {
          const startDate = event.start.dateTime
            ? new Date(event.start.dateTime)
            : new Date(event.start.date);

          const dateString = startDate.toLocaleDateString([], {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          const timeString = event.start.dateTime
            ? startDate.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })
            : "All day";

          const isToday = startDate.toDateString() === today.toDateString();

          return (
            <React.Fragment key={event.id}>
              {/* Block */}
              <div
                className="event-block"
                style={{
                  backgroundColor: "#404040",
                  border: isToday ? "2px solid white" : "none",
                }}
              >
                <div className="event-title">{event.summary}</div>
                <div className="event-date">{dateString}</div>
                <div className="event-time">{timeString}</div>
                {event.location && (
                  <div className="event-location">{event.location}</div>
                )}
              </div>

              {/* Connector line */}
              <div className="connector-line" />
            </React.Fragment>
          );
        })}
      </div>

      {/* View Full Calendar link */}
      <div className="viewfull" style={{ textAlign: "right", marginTop: "15px" }}>
        <a href="#/calendar" rel="noopener noreferrer">
          View full calendar →
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
