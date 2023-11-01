const PageHeader = ({ title }) => {
  return (
    <header className="w-full h-[150px] md:h-[250px] bg-[#102630] flex justify-center items-center relative">
      <div>
        <h1 className="text-white font-black text-[14px] md:text-[20px] tracking-[7px] md:tracking-[10px] text-shadow">
          {title}
        </h1>
      </div>
      <div className="absolute top-[50%] left-[50%] border">
        <h1 className="absolute text-white font-black text-[28px] md:text-[40px] tracking-[14px] md:tracking-[20px] opacity-[0.1] translate-x-[-50%] translate-y-[-50%] w-fit">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
