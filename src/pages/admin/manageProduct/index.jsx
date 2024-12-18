import { useRouter } from "next/router";

export default function Product() {
  const { push } = useRouter();
  const Products = [
    {
      title: "americano",
      price: "Rp.25.000",
      photo: "../images/americano.jpeg",
    },
    {
      title: "Coffee - Latte",
      price: "Rp.25.000",
      photo: "../images/empat.jpeg",
    },
  ];
  return (
    <>
      <main className="p-4 md:p-8 font-nunito bg-white">
        <h2 className="text-xl md:text-2xl font-bold">Pengelolaan Product</h2>
        <div className="flex flex-col md:flex-row md:justify-between mt-6 gap-4">
          <form className="flex flex-col md:flex-row gap-2 items-stretch">
            <input
              className="p-2 border rounded-lg border-yellow-700 w-full md:w-96"
              placeholder="Search"
              type="text"
              id="search"
              name="search"
            />
            <button className="bg-yellow-700 p-2 rounded-lg flex items-center justify-center">
              <img src="/images/search.png" alt="search" className="w-4 h-4" />
            </button>
          </form>
          <div>
            <button
              className="bg-yellow-700 text-white font-semibold w-full md:w-32 h-10 rounded-lg text-base font-nunito"
              onClick={() => push("/admin/manageProduct/productDrinks")}
            >
              Tambah
            </button>
          </div>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-secondary-5">
              <tr>
                <th className="p-4 border-b">No</th>
                <th className="p-4 border-b">Name Product</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b">Photo</th>
                <th className="p-4 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((Product, index) => (
                <tr key={index} className={`hover:bg-gray-100`}>
                  <td className="p-4 border-b text-sm md:text-base">
                    {index + 1}
                  </td>
                  <td className="p-4 border-b text-sm md:text-base">
                    {Product.title}
                  </td>
                  <td className="p-4 border-b text-sm md:text-base">
                    {Product.price}
                  </td>
                  <td className="p-4 border-b text-sm md:text-base">
                    <img
                      src={Product.photo}
                      className="w-12 h-12 md:w-44 md:h-44 object-cover"
                      alt="error"
                    />
                  </td>
                  <td className="p-4 border-b flex flex-col md:flex-row gap-2 ">
                    <button className="text-blue-500 hover:underline mr-2 text-sm md:text-base">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline text-sm md:text-base">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="flex gap-4 w-full justify-around py-8">
                {totalPages > 1 && (
                  <button
                    className={`text-blue-500 hover:underline ${
                      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                )}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages || 1 }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-2 rounded py-1 ${
                        currentPage === index + 1 ? "bg-gray-300" : ""
                      }`}
                    >
                      {totalPages === 1 ? <div>1</div> : <div>{index + 1}</div>}
                    </button>
                  ))}
                </div>
                {totalPages > 1 && (
                  <button
                    className={`${
                      currentPage === totalPages ? "cursor-not-allowed" : ""
                    } text-blue-500 hover:underline`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                )}
              </div> */}
        </div>
      </main>
    </>
  );
}
