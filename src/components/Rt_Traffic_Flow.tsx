"use client";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TFCard } from './cards';

interface QueueData {
    counts: number;
}

export function Rt_Traffic_Flow() {
  const [data, setData] = useState<QueueData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("http://10.0.2.52:5033/get_queue_data");

    eventSource.onmessage = function(event) {
      try {
        const rawData = JSON.parse(event.data);
        console.log('Received raw data:', rawData);

        if (rawData && typeof rawData.counts === 'object') {
          const newData: QueueData[] = Object.keys(rawData.counts).map(key => ({
            counts: rawData.counts[key]
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
  
  const count = data.length > 0 ? data[0].counts : 0;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="font-semibold mb-4 ">
        <h2 className="font-semibold mb-2 text-2xl">Real-time Traffic Flow</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center">
      <div>
        <TFCard count={count}/>
        <h1 className="text-3xl font-bold">Queue Count {data.map((item, index)=> <span key={index}>{item.counts}</span>)}</h1>
      </div>
      <div className="flex justify-center items-center mb-4 sm:mb-0 sm:mr-8">
        <img src="http://192.168.111.109:5033/queue_detection" alt="Real-time Traffic Flow" />
        </div>
      </div>
      </div>
    </div>
  );
}
