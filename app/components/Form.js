function TextInput({
  name,
  value,
  placeholder,
  required = false,
  handleChange,
}) {
  return (
    <div className="mb-6">
      <label for={name} className="block text-xs text-tan py-1 capitalize">
        {name}
      </label>
      <input
        type="text"
        id={name}
        value={value}
        className="bg-transparent border-2 border-gray-light text-tan text-xs rounded-xl focus:ring-purple-dark focus:border-purple-dark block w-full p-3.5 my-1"
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </div>
  );
}

export default function Form({ registrant, email, handleRegistrantInfo }) {
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      className="shadow-md rounded px-9 pt-6 pb-5 mb-4"
    >
      <TextInput
        name="name"
        type="text"
        placeholder="enter your name"
        required="true"
        id="name"
        value={registrant}
        handleChange={handleRegistrantInfo}
      />
      <TextInput
        name="email"
        placeholder="example@gmail.com"
        required="true"
        id="name"
        value={email}
        handleChange={handleRegistrantInfo}
      />
    </form>
  );
}
