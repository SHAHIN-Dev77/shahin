import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-white py-6">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-sm">© 2026 SHAHIN. All rights reserved.</p>

    
    <div className="mt-4">
      <a href="https://facebook.com" target="_blank" className="mx-4 text-blue-600 hover:text-blue-800">
        <i className="fab fa-facebook-f"></i> Facebook
      </a>
      <a href="https://twitter.com" target="_blank" className="mx-4 text-blue-400 hover:text-blue-600">
        <i className="fab fa-twitter"></i> Twitter
      </a>
      <a href="https://instagram.com" target="_blank" className="mx-4 text-pink-600 hover:text-pink-800">
        <i className="fab fa-instagram"></i> Instagram
      </a>
      <a href="https://linkedin.com" target="_blank" className="mx-4 text-blue-700 hover:text-blue-900">
        <i className="fab fa-linkedin-in"></i> LinkedIn
      </a>
    </div>
  </div>
</footer>

  )
}
