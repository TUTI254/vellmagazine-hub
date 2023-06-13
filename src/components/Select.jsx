/* eslint-disable react/prop-types */
const fixedSelectClass =
  "rounded-md appearance-none font-serif relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm";
const userType = ["Admin", "Writer", "Editor"];

export default function Select({
  onChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  isRequired = false,
  customClass,
}) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <select
        onChange={onChange}
        id={id}
        name={name}
        required={isRequired}
        className={fixedSelectClass + customClass}
      >
        <option value={value}>Select a User Type</option>
        {userType.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
