
"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SpeedData {
  track_id: number;
  speed: number;
}

const RECONNECT_INTERVAL = 5000; // 5 segundos

export function Rt_Speed_Tracker() {
  const [data, setData] = useState<SpeedData[]>([]);
  const [lastMessageTime, setLastMessageTime] = useState(Date.now());
  const eventSourceRef = useRef<EventSource | null>(null);

  const connectEventSource = () => {
    const eventSource = new EventSource("http://192.168.111.109:5033/get_speed_data");

    eventSource.onmessage = function(event) {
      try {
        const rawData = JSON.parse(event.data);
        console.log('Received raw data:', rawData);

        if (rawData && typeof rawData.track_id === 'object' && typeof rawData.speed === 'object') {
          const newData: SpeedData[] = Object.keys(rawData.track_id).map(key => ({
            track_id: rawData.track_id[key],
            speed: rawData.speed[key]
          }));

          console.log("Transformed data:", newData);
          setData(newData);
          setLastMessageTime(Date.now());
        } else {
          console.error("Expected valid data but got:", rawData);
        }
      } catch (error) {
        console.error("Error parsing or transforming data:", error);
      }
    };

    eventSource.onerror = function() {
      console.error("EventSource failed. Closing connection.");
      eventSource.close();
      eventSourceRef.current = null;
    };

    eventSourceRef.current = eventSource;
  };

  useEffect(() => {
    connectEventSource();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMessageTime > RECONNECT_INTERVAL) {
        console.warn("No messages received recently. Reconnecting...");
        if (eventSourceRef.current) {
          eventSourceRef.current.close();
        }
        connectEventSource();
      }
    }, RECONNECT_INTERVAL);

    return () => clearInterval(interval);
  }, [lastMessageTime]);

  const tableData = data.slice(0, 7);
  while (tableData.length < 7) {
    tableData.push({ track_id: -1, speed: -1 }); // Usar valores negativos o cualquier otro valor para indicar filas vacías
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="font-semibold mb-4 ">
        <h2 id="SpeedTracker" className="text-3xl font-bold mb-2">Real-time Speed Tracker</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-center items-center mb-4 sm:mb-0 sm:mr-8">
            <img src="http://192.168.111.109:5033/speed_estimation" alt="Real-time Speed Tracker" />
          </div>

          <div>
            <Table>

              <TableHeader>
                <TableRow>
                  <TableHead>Track ID</TableHead>
                  <TableHead>Speed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.track_id !== -1 ? item.track_id : '-'}</TableCell>
                    <TableCell>{item.speed !== -1 ? item.speed : '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

