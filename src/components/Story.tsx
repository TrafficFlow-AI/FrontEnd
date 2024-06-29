import { FlaskCard, NextjsCard, UltralyticsCard } from "./cards";

export function Story() {
    return (
      <div className="my-4">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <h3 className="text-xl font-semibold">What are we trying to solve</h3>
        <p className="">
          As we all know, Barcelona is not known as a good traffic handler. This
          is the reason behind our main idea. Basically, the idea is to help
          Barcelona regulate the traffic flow of vehicles on the rush hours of
          the day
        </p>
        <h3 className="">What we solve</h3>
        <p className="">
          <p>
            Creating an effective solution for traffic jams is a challenging and
            expensive task. However, with our proposal, we will achieve a
            high-quality and cost-effective solution, significantly improving
            vehicle flow during rush hours in Barcelona.
          </p>
        </p>
        <h3 className="text-xl font-semibold">Stack</h3>
        <p className="text-xl font-semibold"></p>
        <div className="flex flex-row justify-between">
          <FlaskCard />
          <UltralyticsCard />
          <NextjsCard />
        </div>
      </div>
    );
}