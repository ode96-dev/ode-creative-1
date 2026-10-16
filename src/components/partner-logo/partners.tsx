export const partners = [
  {
    name: "DocuSign",
    render: (
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-[#E82038] flex items-center justify-center text-white text-[10px] font-black">
          ✓
        </span>
        <span className="font-display font-extrabold text-xl tracking-tight text-slate-800">
          DocuSign
        </span>
      </div>
    ),
  },
  {
    name: "Maze",
    render: (
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 fill-current text-slate-900"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="font-display lowercase font-black text-2xl tracking-tight text-slate-900">
          maze
        </span>
      </div>
    ),
  },
  {
    name: "Culture Amp",
    render: (
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
        </span>
        <span className="font-display font-bold text-lg tracking-tight text-slate-800">
          Culture Amp
        </span>
      </div>
    ),
  },
  {
    name: "HelloSign",
    render: (
      <div className="flex items-center gap-1.5">
        <svg
          className="w-5 h-5 text-slate-900 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
        <span className="font-display tracking-widest uppercase text-sm font-black text-slate-900">
          HELLOSIGN
        </span>
      </div>
    ),
  },
  {
    name: "Attentive",
    render: (
      <div className="flex items-center gap-1">
        <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
          attentive
        </span>
        <span className="w-2 h-2 rounded-full bg-[#6236FF] mb-2" />
      </div>
    ),
  },
];
