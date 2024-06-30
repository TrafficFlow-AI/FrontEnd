import Image from "next/image";
import { Rt_Speed_Tracker } from "@/components/Rt_Speed_Tracker"
import { Rt_Traffic_Flow } from "@/components/Rt_Traffic_Flow"
import { Story } from "@/components/Story"
import { About } from "@/components/About"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Rt_Speed_Tracker/>
      <Rt_Traffic_Flow/>
      <Story/>
      <About/>

    </main>
  );
}
