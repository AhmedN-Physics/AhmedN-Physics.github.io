export function NoteGroupIllustration({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 180 88" className="h-24 w-full max-w-48 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "courses" ? <>
        <path d="M90 25C72 14 49 14 28 19v51c22-5 44-3 62 8 18-11 40-13 62-8V19c-21-5-44-5-62 6v53" />
        <path opacity=".45" d="M40 31c14-2 26-1 37 4m-37 8c14-2 26-1 37 4m-37 8c14-2 26-1 37 4m26-24c11-5 23-6 37-4m-37 16c11-5 23-6 37-4m-37 16c11-5 23-6 37-4" />
      </> : kind === "physics" ? <>
        <ellipse cx="90" cy="44" rx="62" ry="20" />
        <ellipse cx="90" cy="44" rx="62" ry="20" transform="rotate(32 90 44)" opacity=".6" />
        <ellipse cx="90" cy="44" rx="62" ry="20" transform="rotate(-32 90 44)" opacity=".6" />
        <circle cx="90" cy="44" r="4" fill="currentColor" /><circle cx="145" cy="35" r="3" fill="currentColor" />
      </> : <>
        <path opacity=".4" d="M25 71h132M45 80V10" /><path d="M29 66c19 0 25-48 46-48s26 48 46 48 24-22 34-37" />
        {[0,1,2,3].map(row => Array.from({length:4-row},(_,col)=><circle key={`${row}-${col}`} cx={112+col*11} cy={13+row*11} r="2" fill="currentColor" stroke="none" />))}
      </>}
    </svg>
  );
}
