import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const Token = useSelector(selectCurrentToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your_api_endpoint' with your actual API endpoint
        const response = await axios.get(
          "http://54.237.124.13:8000/community/event/",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">EVENTS</h2>
      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Building</th>
            <th className="border border-gray-300 px-4 py-2">Club</th>
            <th className="border border-gray-300 px-4 py-2">Start Time</th>
            <th className="border border-gray-300 px-4 py-2">End Time</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {event.building}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.club}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.start_time}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.end_time}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.description}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-gray-300 px-4 py-2" colSpan="5">
                No events available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Events;
