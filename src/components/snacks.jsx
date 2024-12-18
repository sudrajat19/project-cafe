export default function Snacks() {
  const snacks = [
    {
      title: "Stick shrimp",
      photo: "./images/stickshrimp.jpeg",
      price: "Rp.25.000",
    },
    { title: "Pempek", photo: "./images/pempek.jpeg", price: "Rp.25.000" },
    {
      title: "Batagor",
      photo: "./images/batagor.jpeg",
      price: "Rp.25.000",
    },
    {
      title: "Dimsum",
      photo: "./images/dimsum.jpeg",
      price: "Rp.25.000",
    },
  ];
  return (
    <div className="px-[80px] md:px-[100px] lg:px-[200px] pt-8 my-8 ">
      <h1 className="font-bold text-4xl ">Snacks</h1>
      <div className="border-t-4 border-yellow-700 w-[80px]"></div>
      <div className="pt-8">
        <p>We also provide snacks to accompany your cup of coffee.</p>
        <div className=" pt-14 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {snacks.map((dr, index) => (
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
