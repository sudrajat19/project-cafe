export default function AddDrinks() {
  return (
    <div className="p-8 w-full">
      <h2 className="text-xl font-nunito">Managed Drinks</h2>
      <form className="mt-4 border p-8 grid gap-4">
        <div className="flex gap-4 mb-2">
          <label htmlFor="name product" className="w-24">
            Name Product:
          </label>
          <input
            className="p-2 border rounded-lg border-yellow-700 w-full h-8"
            id="name product"
            placeholder="Name Product"
            type="text"
            name="name product"
            required
          />
        </div>
        <div className="flex gap-4 mb-2">
          <label htmlFor="price" className="w-24">
            Price:
          </label>
          <input
            className="p-2 border rounded-lg border-yellow-700 w-full h-8"
            id="price"
            placeholder="Price"
            type="text"
            name="price"
            required
          />
        </div>
        <div className="flex gap-4 mb-2">
          <label htmlFor="photo" className="w-24">
            Photo:
          </label>
          <input
            className="border rounded-lg border-yellow-700 w-full h-8"
            id="photo"
            placeholder="URL photo"
            type="file"
            name="photo"
            required
          />
        </div>

        <div className="flex gap-8 justify-end text-white font-semibold">
          <button
            type="submit"
            className="bg-yellow-700 p-2 w-[100px] rounded-md"
          >
            Simpan
          </button>
          <button
            type="button"
            className="bg-yellow-700 w-[100px] p-2 rounded-md"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
