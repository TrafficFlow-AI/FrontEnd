"use client";
import React, { useEffect, useState } from 'react';
import { TFCard } from './cards';

interface QueueData {
    counts: number | undefined;
}

export function Rt_Traffic_Flow() {
  const [data, setData] = useState<QueueData>();

  useEffect(() => {
    const eventSource = new EventSource("http://192.168.111.109:5033/get_queue_data");

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

  const count = data?.counts;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className=" mb-4">
        <h2 id="TrafficFlow" className="text-3xl font-bold mb-2">Real-time Traffic Flow</h2>
        <div className="flex flex-col  justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
            <TFCard count={count} />
          </div>
          <div className="flex justify-center items-center">
            <img src="http://192.168.111.109:5033/queue_detection" alt="Real-time Traffic Flow" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
