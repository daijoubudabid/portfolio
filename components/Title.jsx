export const Title = ({ firstName, secondName, backgroundName }) => {
  return (
    <div className="relative mx-auto px-4 py-20 text-start sm:text-center lg:px-0">
      <h1 className="text-[2.2rem] font-black uppercase text-default dark:text-white sm:text-[3.5rem]">
        {firstName} <span className="text-primary">{secondName}</span>
      </h1>
      <span className="absolute end-0 start-0 top-1/2 -z-[1] -translate-y-[20%] text-[2.815rem] font-extrabold uppercase leading-3 tracking-[.64rem] text-[#EFF0F0] dark:text-white/10 md:-translate-y-1/2 md:text-[6.90rem]">
        {backgroundName}
      </span>
    </div>
  );
};
