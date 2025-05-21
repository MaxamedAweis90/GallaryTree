export default function Footer() {
  return (
    <footer className="border-t border-gray-700/50 bg-black/30 py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h3 className="font-semibold text-lg text-white">GalleryTree</h3>
          <p className="mt-2">Bringing your memories to life.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">DEVELOPER</h4>
          <a
            href="https://engaweis.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            @EngAweis
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">CONNECT</h4>
          <div className="flex space-x-4">
            {/* social icons */}
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GalleryTree. All rights reserved.
      </div>
    </footer>
  );
}
