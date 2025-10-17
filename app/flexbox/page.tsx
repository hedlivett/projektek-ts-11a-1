{
  /* //szegély:border */
}

export type AlignOptions = {
  label: string;
  value: string; //Tailwind classname
};
export default function FlexboxDemo() {
  const verticalAlign: AlignOptions[] = [
    { label: "Top", value: "items-start" },
    { label: "Center", value: "items-center" },
    { label: "Bottom", value: "items-end" },
  ];
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center bg-yellow-100">
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        1
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        2
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        3
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        4
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        5
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        6
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        7
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        8
      </div>
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-black bg-blue-300 text-3xl text-white shadow-xl">
        9
      </div>
    </div>
  );
}
