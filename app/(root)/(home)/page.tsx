"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const getUser = useUser();
  const { user } = getUser;
  const now = new Date();

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex size-full flex-col text-white gap-10">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="text-xl glassmorphism max-w-fit rounded px-4 font-normal">
            {now.getHours() < 12
              ? `Good Morning ${user?.firstName}`
              : `Good Afternoon ${user?.firstName}`}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
