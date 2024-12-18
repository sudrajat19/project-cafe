export default function Foods() {
  const foods = [
    {
      title: "Spaghetti",
      photo: "./images/spaghetti.jpeg",
      price: "Rp.25.000",
    },
    { title: "Rice Bowl", photo: "./images/ricebowl.jpeg", price: "Rp.25.000" },
    {
      title: "Fried rice",
      photo: "./images/friedrice.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Sushi",
      photo: "./images/sushi.jpeg",
      price: "Rp.25.000",
    },
  ];
  return (
    <div className="px-[80px] md:px-[100px] lg:px-[200px] pt-8 my-8 ">
      <h1 className="font-bold text-4xl ">Foods</h1>
      <div className="border-t-4 border-yellow-700 w-[80px]"></div>
      <div className="pt-8">
        <p>We provide a variety of foods</p>
        <div className=" pt-14 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foods.map((dr, index) => (
            <div key={index} className="bg-slate-200 rounded">
              <div className=" bg-yellow-700 rounded">
                <img
                  src={dr.photo}
                  alt=""
                  className="mx-auto w-[246px] h-[164px]"
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
