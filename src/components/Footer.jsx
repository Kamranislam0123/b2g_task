import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-purple-900 text-white py-8">
            <div className="container px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-4">About Us</h3>
                  <p className="text-purple-200 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-purple-200 text-sm">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Social Links</h3>
                  <div className="flex gap-4 text-purple-200">
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </div>
  )
}

export default Footer
