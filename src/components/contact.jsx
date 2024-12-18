export default function Contact() {
  const foods = [
    {
      src: "./images/instagram.png",
      alt: "instagram",
      username: "@coffeyourself",
    },
    {
      src: "./images/facebook.png",
      alt: "facebook",
      username: "@coffeyourself",
    },
    {
      src: "./images/emaill.png",
      alt: "email",
      username: "@coffeyourself",
    },
    {
      src: "./images/tiktok.png",
      alt: "tiktok",
      username: "@coffeyourself",
    },
  ];
  return (
    <div className="">
      <div className="px-[50px] md:px-[100px] lg:px-[200px] text-white bg-yellow-700">
        <div className=" py-6">
          <p className="text-center text-sm my-4 font-semibold uppercase">
            get up close and personal
          </p>
          <h2 className="text-center font-bold font-display text-4xl">
            CONTACT US
          </h2>
          <div className="border-t-8 mt-4 border-white-700 w-[80px] mx-auto"></div>
        </div>
      </div>
      <div className=" pt-14 gap-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-[10px] sm:px-[30px] md:px-[200px]">
        {foods.map((dr, index) => (
          <div key={index} className=" p-2 border-r-4 border-yellow-700 ">
            <div className=" rounded">
              <img
                src={dr.src}
                alt={dr.alt}
                className="mx-auto w-[44px] h-[50px]"
              />
              <p className="text-center font-bold capitalize">{dr.alt}</p>
              <a href={dr.username}>
                <p className="text-center font-bold capitalize">
                  {dr.username}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
