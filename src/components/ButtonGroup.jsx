export default function ButtonGroup({ children, className }) {
  return <div className={`bg-neutral-700 rounded-xl p-2 space-x-4 ${className ?? ''}`}>{children}</div>;
}
