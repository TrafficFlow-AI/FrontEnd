import Image from "next/image";
import { Rt_Speed_Tracker } from "@/components/Rt_Speed_Tracker"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Rt_Speed_Tracker/>

    </main>
  );
}
