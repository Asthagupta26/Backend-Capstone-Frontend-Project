function FormField({ name, type, placeholder, value, onChange, label }) {
  return;
  <>
    <input
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
    ;{label ? <label htmlFor={name}>{label}</label> : null}
  </>;
}

export default function Form({ formFields, onSubmit, error, errorMessages }) {
  return (
    <form onSubmit={onSubmit}>
      {formFields.map((field, index) => (
        <>
          <FormField
            value={field.value}
            onChange={field.onChange}
            label={field?.label}
            key={index}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
          {error[field.name] ? (
            <p>{errorMessages[field.name].message}</p>
          ) : null}
        </>
      ))}
      <button type="Submit"> Submit</button>
    </form>
  );
}
