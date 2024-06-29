"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Definir la interfaz
interface SpeedData {
  track_id: number;
  speed: number;
}

export function Rt_Speed_Tracker() {
  // Tipar correctamente el estado data
  const [data, setData] = useState<SpeedData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("http://127.0.0.1:5000/get_speed_data");

    eventSource.onmessage = function (event) {
      // Decodificar la respuesta del endpoint
      const decodedData = JSON.parse(event.data);
      const newData: SpeedData[] = JSON.parse(decodedData);
      setData(newData);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-semibold mb-4 text-center">
        Real Time Speed Tracker
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-center items-center mb-4 sm:mb-0 sm:mr-8">
          <img
            src="http://127.0.0.1:5000/speed_estimation"
            alt="Real time video"
            className="max-w-full"
          />
        </div>
        <div className="w-full sm:w-auto">
          <Table>
            <TableCaption>Live Speed Data</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Track ID</TableHead>
                <TableHead className="text-right">Speed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.track_id}</TableCell>
                  <TableCell className="text-right">{entry.speed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
