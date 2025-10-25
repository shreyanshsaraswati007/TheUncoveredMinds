export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6];
  return (
    <div className="min-h-screen py-20 px-8 bg-gray-50">
      <h2 className="text-3xl text-center font-bold text-primary mb-10">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((i) => (
          <img key={i} src={`/gallery/${i}.jpg`} alt={`Gallery ${i}`} className="rounded-lg shadow-lg object-cover w-full h-64" />
        ))}
      </div>
    </div>
  );
}