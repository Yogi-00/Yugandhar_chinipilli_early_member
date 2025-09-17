/*
  RichCard: A flexible card with variants, icon, title, description, and image grid.

  Props:
  - variant: 'highlight' | 'success' | 'default'
  - icon: ReactNode
  - title: string
  - description: string
  - imageData: Array<{ src: string, alt?: string, ratio?: '16:9' | '9:16' | '1:1' }>
*/
export default function RichCard({
  variant = "default",
  icon,
  title,
  description,
  imageData = [],
}) {
  const variantClasses = {
    highlight: "border-blue-200/60 hover:border-blue-400/70",
    success: "border-green-200/60 hover:border-green-400/70",
    default: "border-gray-200 hover:border-gray-300",
  };

  const badgeBg = {
    highlight: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    default: "bg-indigo-100 text-indigo-700",
  };

  const aspectClass = {
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16]",
    "1:1": "aspect-square",
  };

  return (
    <div
      className={`rounded-xl border bg-white shadow-sm p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${variantClasses[variant]}`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-xl ${badgeBg[variant]}`}>
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="space-y-4 mt-4">
            {imageData.length > 0 && (
              <div
                className={`grid gap-2 ${
                  imageData.length > 1 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {imageData.map((img, i) => (
                  <div
                    key={i}
                    className={`${
                      aspectClass[img.ratio || "16:9"]
                    } w-full overflow-hidden rounded-lg bg-gray-100`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || `${title} image ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
