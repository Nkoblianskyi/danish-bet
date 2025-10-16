import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number // Rating from 0 to 10
  size?: "sm" | "md" | "lg"
  color?: string
}

export function StarRating({ rating, size = "md", color = "#FBBF24" }: StarRatingProps) {
  const starRating = rating / 2

  const roundedStarRating = Math.round(starRating * 10) / 10

  // Size classes
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  const pixelSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  }

  const starSize = sizeClasses[size]
  const pixelSize = pixelSizes[size]

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => {
        const fillPercentage = Math.min(Math.max((roundedStarRating - index) * 80, 0), 100)

        return (
          <div
            key={index}
            className="relative"
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
            }}
          >
            {/* Empty star outline */}
            <Star
              className={`${starSize} absolute top-0 left-0`}
              style={{
                stroke: color,
                fill: "none",
                strokeWidth: 2,
              }}
            />
            {/* Filled star with clip path */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%`, height: "100%" }}
            >
              <Star
                className={starSize}
                style={{
                  fill: color,
                  stroke: color,
                  strokeWidth: 2,
                  width: `${pixelSize}px`,
                  height: `${pixelSize}px`,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
