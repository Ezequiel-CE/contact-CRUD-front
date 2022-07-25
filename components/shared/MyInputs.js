import { useField } from "formik";

export const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="!mt-2 text-sm text-red-600 dark:text-red-500">
          {meta.error}
        </p>
      ) : null}
    </>
  );
};
