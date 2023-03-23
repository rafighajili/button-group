export default function Button({ active, children, onClick }) {
  return (
    <button
      className={`h-10 px-3 rounded-lg ${active ? 'bg-neutral-500' : 'bg-transparet hover:bg-black/10'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
