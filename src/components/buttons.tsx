import { ReactNode } from "react";

const Buttons = {
  primary_button: ({
    children,
    onClick,
  }: {
    children: ReactNode;
    onClick?: Function;
  }) => {
    return (
      <button
        // @ts-ignore
        onClick={() => (onClick != undefined ? onClick() : null)}
        className="sm:px-6 px-3 py-2 w-auto sm:w-full selection:pointer-events-none text-white duration-200 hover:cursor-pointer primary-bg-color whitespace-nowrap"
      >
        {children}
      </button>
    );
  },
  custom_button: (
    title: string,
    radius: number,
    color: string,
    width?: string,
    height?: string
  ) => {
    return <div></div>;
  },

  custom_outline_button: ({
    children,
    onClick,
    outline_color,
  }: {
    children: ReactNode;
    onClick?: Function;
    outline_color?: string;
  }) => {
    return (
      <button
        id="outline-btn"
        onClick={() => (onClick != undefined ? onClick() : null)}
        className={`sm:px-[1.5em] px-[0.3em] duration-100 py-[0.3em] w-full sm:py-[0.3em] selection:pointer-events-none hover:cursor-pointer bg-transparent border-2 ${
          outline_color != null
            ? outline_color
            : "border-[var(--primary-color)]"
        }`}
      >
        {children}
      </button>
    );
  },
};

export default Buttons;
