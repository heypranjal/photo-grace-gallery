
import { galleryImages } from "@/data/gallery-data";

const GalleryPreview = () => (
  <section id="gallery" className="container py-12 md:py-20" aria-label="Gallery preview">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Gallery Preview</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {galleryImages.map((img) => (
        <figure
          key={img.id}
          className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col min-h-[340px] h-full animate-fade-in transform-gpu group transition-all duration-400 hover:scale-[1.04] hover:shadow-xl"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="gallery-morph-img w-full h-52 object-cover group-hover:liquid-morph transition-all duration-400"
            loading="lazy"
            draggable={false}
            style={{ userSelect: "none" }}
          />
          <figcaption className="flex-1 p-4 flex items-center justify-center text-center text-gray-700 text-md border-t border-gray-100 bg-white">
            {img.description}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default GalleryPreview;
