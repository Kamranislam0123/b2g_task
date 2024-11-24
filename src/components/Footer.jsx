import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
            <Image
              src="/logowhite.png"
              alt="Logo"
              width={161}
              height={40}
              className="w-[161px] h-[40px] object-contain"
              priority={true}
            />
              
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Sign Up For Our Newsletter!
            </h2>
            <p className="text-gray-300 mb-6">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-2 rounded bg-white text-black"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm">support@we5ive.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social Link</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-500">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-purple-600 py-4 text-center text-sm">
        <div className="container mx-auto px-4">© 2024 | We5ive</div>
      </div>
    </footer>
  );
}
