import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Hero />
      <Metrics />
    </div>
  );
}
