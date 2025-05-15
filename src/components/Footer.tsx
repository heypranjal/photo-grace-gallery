
const Footer = () => (
  <footer className="w-full border-t border-gray-100 bg-white py-6 animate-fade-in">
    <div className="container flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
      <span>&copy; {new Date().getFullYear()} Photoshoto. All rights reserved.</span>
      <div className="mt-2 md:mt-0 flex items-center gap-2">
        <span>Made with</span>
        <span className="text-accent font-bold">&hearts;</span>
        <span>by Photoshoto</span>
      </div>
    </div>
  </footer>
);

export default Footer;
