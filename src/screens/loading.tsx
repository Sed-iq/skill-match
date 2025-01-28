import LoadingSpinner from "../assets/loader.gif";
export default () => {
  return (
    <div className="h-screen fixed top-0 flex z-50 flex-col justify-center items-center w-full bg-[#6363633b] backdrop-blur">
      <div className="w-[3.5em] h-[3.5em] flex items-center justify-center rounded bg-[#ffffffaf]">
        <img srcSet={LoadingSpinner} className="w-[1.9em]" />
      </div>
    </div>
  );
};
