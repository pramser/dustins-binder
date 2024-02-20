export default function LoadingSkeleton() {
  return (
    <div className="flex flex-row flex-wrap">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-fill h-fit md:w-1/4 md:h-1/4 lg:w-1/6 lg:h-1/6 relative">
          <div className="bg-gray-200 animate-pulse w-full h-full"></div>
        </div>
      ))}
    </div>
  )
}
