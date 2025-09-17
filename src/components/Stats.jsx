export default function Stats({ items = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-lg border border-gray-200 p-4 text-center bg-white"
        >
          <div className="text-2xl sm:text-3xl text-gray-600 font-bold">
            {it.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 mt-1">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
