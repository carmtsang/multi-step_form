export default function Form() {
  return (
    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <label for="name" className="block text-sm text-tan">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-transparent border border-gray-light text-gray text-sm rounded-lg focus:ring-purple-dark focus:border-purple-dark block w-full p-2.5"
          placeholder="enter your name"
          required
        />
      </div>
      <div>
        <label for="email" className="block text-sm text-tan">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="bg-transparent border border-gray-light text-gray text-sm rounded-lg focus:ring-purple-dark focus:border-purple-dark block w-full p-2.5"
          placeholder="example@gmail.com"
          required
        />
      </div>
    </form>
  );
}
