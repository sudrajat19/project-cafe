export default function Drinks() {
  const drink = [
    {
      title: "Coffee - Latte",
      photo: "./images/empat.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Americano",
      photo: "./images/americano.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Nitro - coffee",
      photo: "./images/nitro.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Coffee - Latte",
      photo: "./images/empat.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Americano",
      photo: "./images/americano.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Nitro - coffee",
      photo: "./images/nitro.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Americano",
      photo: "./images/americano.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Nitro - coffee",
      photo: "./images/nitro.jpeg",
      price: "Rp.25.000",
    },
  ];
  return (
    <div className="px-[80px] md:px-[100px] lg:px-[200px] pt-8 ">
      <h1 className="font-bold text-4xl ">Drinks</h1>
      <div className="border-t-4 border-yellow-700 w-[80px]"></div>
      <div className="pt-8">
        <p>
          Providing a variety of coffee and non-coffee drinks, with quality
          coffee beans and also coffee adds energy, caffeine in coffee
          stimulates the central nervous system, thus fighting fatigue and
          increasing energy.
        </p>
        <div className=" pt-14 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {drink.map((dr, index) => (
            <div key={index} className="bg-slate-200 rounded">
              <div className=" bg-yellow-700 rounded">
                <img
                  src={dr.photo}
                  alt=""
                  className="mx-auto w-[246px] h-[164px] rounded"
                />
              </div>
              <div className="mx-auto border">
                <h1 className="text-center font-semibold capitalize">
                  {dr.title}
                </h1>
                <p className="text-center">{dr.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
