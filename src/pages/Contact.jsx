import React from "react";

const Contact = () => {
  contact[(form, setForm)] = useState({ name: "", email: "", message: "" });

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container bg-white ">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <imput
              type="text"
              name="name"
              className="input"
              placeholder="Maria"
              requiered
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default Contact;
