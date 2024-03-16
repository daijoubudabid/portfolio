export const Button = ({ name, icon, onClick, type }) => {
  return (
    <button type={type} className="after:translate-0 relative z-[1] inline-block select-none overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-primary bg-transparent py-[16px] pe-[70px] ps-[35px] text-center align-middle text-[15px] font-semibold uppercase leading-normal hover:text-white dark:text-white text-default outline-none transition-all duration-300 after:absolute after:inset-0 after:-z-[1] after:h-full after:origin-right after:translate-x-full after:bg-primary after:transition-transform after:duration-500 hover:after:w-full hover:after:translate-x-0" onClick={onClick}>
      <span className="z-[2]">{name}</span>
      <span className="absolute bottom-0 right-0 top-0 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-primary text-[19px] text-white">
        {icon}
      </span>
    </button>
  );
};
