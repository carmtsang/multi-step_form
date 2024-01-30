export default function Form({ registrant, email }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="shadow-md rounded px-9 pt-6 pb-5 mb-4"
    >
      <div className="min-w-9">
        <label for="name" className="block text-xs text-tan py-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={registrant}
          className="bg-transparent border-2 border-gray-light text-gray text-xs rounded-xl focus:ring-purple-dark focus:border-purple-dark block w-full p-2.5"
          placeholder="enter your name"
          required
        />
      </div>
      <div>
        <label for="email" className="block text-xs text-tan py-1">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          className="bg-transparent border-2 border-gray-light text-gray text-xs rounded-xl focus:ring-purple-dark focus:border-purple-dark block w-full p-2.5"
          placeholder="example@gmail.com"
          required
        />
      </div>
    </form>
  );
}
