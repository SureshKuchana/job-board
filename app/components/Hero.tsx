export default function Hero() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br /> dream job
      </h1>
      <p className="text-center py-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi hic odit
        temporibus culpa sunt pariatur aperiam ipsa accusamus, cupiditate iste
        impedit explicabo similique quis eius quibusdam, sit, qui doloribus
        totam.
      </p>
      <form action="" className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          className="border border-gray-400 w-full rounded-md px-3 py-2"
          type="search"
          name="jobSearch"
          placeholder="Search phrase..."
        />
        <button className="bg-blue-600 text-white rounded-md py-2 px-4">
          Search
        </button>
      </form>
    </section>
  );
}
