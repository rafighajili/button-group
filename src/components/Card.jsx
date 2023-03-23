export default function Card({ title, text }) {
  return (
    <div className="border border-neutral-500 rounded-3xl w-[720px] p-8 space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg">{text} </p>
    </div>
  );
}
