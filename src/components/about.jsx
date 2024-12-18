export default function About() {
  return (
    <div className="bg-slate-50 px-[50px] md:px-[100px] lg:px-[200px]">
      <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 py-6 px-[10px] sm:px-[30px] md:px-[50px]">
        <div className=" py-6">
          <h4 className=" text-4xl my-5 font-semibold font-display text-yellow-700">
            About Me
          </h4>
          <p>
            Starting from a small outlet in front of a minimarket in the city of
            Surabaya, we have grown into a national coffee shop chain with
            branches spread across many cities in Indonesia. In 2012, we were
            the pioneers and initiators of the movement to be proud of
            Indonesian coffee with the campaign "Yes I Drink Indonesian Coffee."
            In 2017, we received the Indonesia Franchise Award from the Ministry
            of Trade as the National Winner. This award was also presented
            directly by the President of the Republic of Indonesia, Joko Widodo.
          </p>
        </div>
        <div className="bg-custom w-full bg-cover rounded h-[500px] "></div>
      </div>
    </div>
  );
}
