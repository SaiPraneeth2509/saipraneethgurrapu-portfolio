export default function Footer() {
  return (
    <footer className="py-6 bg-black/80 backdrop-blur-md text-white text-center border-t border-white/20">
      <p className="text-gray-300">
        &copy; 2024 Sai Praneeth Gurrapu. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="https://github.com/SaiPraneeth2509"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-500 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/saipraneethgurrapu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-500 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
