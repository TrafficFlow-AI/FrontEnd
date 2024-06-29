"use client";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SpeedData {
  track_id: number;
  speed: number;
}

export function Rt_Speed_Tracker() {
  const [data, setData] = useState<SpeedData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("http://127.0.0.1:5000/get_speed_data");

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
        } else {
          console.error("Expected valid data but got:", rawData);
        }
      } catch (error) {
        console.error("Error parsing or transforming data:", error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Real-time Speed Tracker</h1>
      <img src="http://127.0.0.1:5000/speed_estimation" alt="Real-time Speed Tracker" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Track ID</TableHead>
            <TableHead>Speed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.track_id}</TableCell>
              <TableCell>{item.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h1>Real-time Traffic Flow</h1>
      <img src="http://127.0.0.1:5000/queue_detection" alt="Real-time Traffic Flow" />
    </div>
  );
}
