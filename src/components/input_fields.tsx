export default ({
  input_id,
  hint,
  type,
  required,
  value,
  onChanged,
}: {
  value?: string;
  required?: boolean;
  type: React.HTMLInputTypeAttribute;
  hint: string;
  input_id: string;
  onChanged?(value: string): void;
}) => {
  return (
    <div className="flex flex-col space-y-3 items-start">
      <input
        value={value}
        id={input_id}
        onChange={(event) =>
          onChanged != undefined ? onChanged(event.target.value) : null
        }
        type={type}
        required={required ?? true}
        placeholder={hint}
        className="w-full border-2 text-[0.8em] sm:text-sm outline-none px-[0.7em] focus:border-gray-500 py-[0.6em] sm:py-[0.8em] border-gray-300 rounded"
      />
    </div>
  );
};
