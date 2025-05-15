
import { galleryImages } from "@/data/gallery-data";

const GalleryPreview = () => (
  <section id="gallery" className="container py-12 md:py-20" aria-label="Gallery preview">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Gallery Preview</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {galleryImages.map((img) => (
        <figure
          key={img.id}
          className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col animate-fade-in"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-52 object-cover"
            loading="lazy"
          />
          <figcaption className="p-4 text-center text-gray-700 text-md border-t border-gray-100 bg-white">
            {img.description}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default GalleryPreview;
