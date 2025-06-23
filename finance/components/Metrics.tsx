import Image from "next/image";

const metrics = [
  {
    img: "/images/customers.svg",
    value: "10k+",
    label: "Customers",
  },
  {
    img: "/images/users.svg",
    value: "15k+",
    label: "Active Users",
  },
  {
    img: "/images/downloads.svg",
    value: "30k+",
    label: "Total Downloads",
  },
];

const Metrics = () => {
  return (
    <div className="py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
          >
            <Image src={metric.img} alt={metric.label} width={80} height={80} />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {metric.value}
              </h2>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
