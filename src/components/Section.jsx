// export default function Section({ id, title, subtitle, children }) {
//   return (
//     <section id={id} className="py-12 sm:py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         {title && (
//           <div className="mb-6">
//             <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
//             {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
//           </div>
//         )}
//         {children}
//       </div>
//     </section>
//   )
// }

export default function Section({ id, title, subtitle, className, children, subtitleClassName }) {
  return (
    <section id={id} className={`py-16 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className={`mt-4 text-lg ${subtitleClassName || "text-gray-200"}`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
