import React from "react";

const variantColors = {
  highlight: {
    icon: "bg-indigo-50 text-indigo-600",
    ring: "ring-indigo-100 hover:ring-indigo-200",
  },
  success: {
    icon: "bg-emerald-50 text-emerald-600",
    ring: "ring-emerald-100 hover:ring-emerald-200",
  },
  default: {
    icon: "bg-sky-50 text-sky-600",
    ring: "ring-sky-100 hover:ring-sky-200",
  },
};

const ratioClass = {
  "16:9": "aspect-video",
  "9:16": "aspect-[9/16]",
  "1:1": "aspect-square",
};

export default function FeatureCard({
  title,
  description,
  children,
  icon,
  variant = "default",
  imageData,
  image, // legacy single-image prop
  className = "",
}) {
  const colors = variantColors[variant] || variantColors.default;

  // Backward compatibility with old `image` prop and child description
  const desc =
    typeof description === "string"
      ? description
      : typeof children === "string"
      ? children
      : null;

  const images =
    Array.isArray(imageData) && imageData.length > 0
      ? imageData
      : image
      ? [{ src: image, alt: title, ratio: "16:9" }]
      : [];

  return (
    <div
      className={[
        "group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md",
        "ring-1 ring-transparent",
        colors.ring,
        className,
      ].join(" ")}
    >
      {/* Header: Icon and Title side by side */}
      <div className="flex items-center mb-4">
        {icon && (
          <div
            className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full mr-3 ${colors.icon}`}
          >
            {icon}
          </div>
        )}
        {title && <h3 className="text-xl font-bold text-slate-900">{title}</h3>}
      </div>

      {/* Description */}
      {desc ? (
        <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
      ) : (
        children && (
          <div className="text-slate-600 leading-relaxed mb-6">{children}</div>
        )
      )}

      {/* Images at the bottom */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 gap-3 mt-4">
          {images.map((img, i) => {
            const aspect = ratioClass[String(img.ratio)] || ratioClass["16:9"];
            return (
              <div
                key={i}
                className={[
                  aspect,
                  "w-full overflow-hidden rounded-lg bg-gray-100",
                  "flex items-center justify-center",
                ].join(" ")}
              >
                <img
                  src={img.src}
                  alt={img.alt || `${title || "card"} image ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
