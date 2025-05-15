
import { Upload, FileText, Folder } from "lucide-react";

const FEATURES = [
  {
    icon: Upload,
    title: "Upload Photos",
    text: "Easily add your special moments in just a click.",
  },
  {
    icon: FileText,
    title: "Add Descriptions",
    text: "Describe every memory for a richer experience.",
  },
  {
    icon: Folder,
    title: "Organize Albums",
    text: "Sort your photos into beautiful, custom albums.",
  },
];

const Features = () => (
  <section id="features" className="container py-12 md:py-20" aria-label="Features">
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {FEATURES.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md px-8 py-8 max-w-xs animate-fade-in hover:shadow-lg transition-shadow"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-accent/10 mb-4">
            <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-md">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
