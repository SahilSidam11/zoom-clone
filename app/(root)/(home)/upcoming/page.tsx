import CallList from "@/components/CallList";

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col text-white gap-10">
      <h1 className="text-3xl font-bold">
        <CallList type="upcoming" />
      </h1>
    </section>
  );
};

export default Upcoming;
