"use client";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TFCard } from './cards';

interface QueueData {
    counts: number | undefined;
}

export function Rt_Traffic_Flow() {
  const [data, setData] = useState<QueueData>();

  useEffect(() => {
    const eventSource = new EventSource("http://127.0.0.1:5000/get_queue_data");

    eventSource.onmessage = function(event) {
      try {
        const rawData = JSON.parse(event.data);

        setData(rawData);
      } catch (error) {
        console.error("Error parsing or transforming data:", error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);
  const count =data?.counts;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="font-semibold mb-4 ">
        <h2 className="font-semibold mb-2 text-2xl">Real-time Traffic Flow</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center">
      <div>
        <TFCard count={count}/>
      </div>
      <div className="flex justify-center items-center mb-4 sm:mb-0 sm:mr-8">
        <img src="http://127.0.0.1:5000/queue_detection" alt="Real-time Traffic Flow" />
        </div>
      </div>
      </div>
    </div>
  );
}
