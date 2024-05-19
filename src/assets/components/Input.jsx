export default function Input({ type, placeholder, name, value }) {
  let style = null;
  if (type == "submit") {
    style = "bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-96 rounded-md text-white cursor-pointer hover:bg-slate-500 transition-all"
  } else {
    style = "bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-96 rounded-md text-white"
  }

  return (
    <div className="">
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        value={value}
        className={style}
      />
    </div>
  );
}
