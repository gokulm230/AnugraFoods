import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold">ANUGRA</h3>

            <p className="text-gray-400 mt-4">
              Pure Organic. Authentic Taste. Delivered To Your Door.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>+91 86675 91396</li>
              <li>anugrafoodproducts@gmail.com</li>
              <li>Sivakasi, Tamil Nadu</li>
            </ul>
          </div>

          {/* FSSAI */}
          <div className="mt-6">
            <img
              src="/fssai_logo.png"
              alt="FSSAI Certified"
              className="h-10 w-auto mb-2"
            />

            <p className="text-sm text-gray-300">License No.</p>

            <p className="font-medium text-white">22426380000049</p>
          </div>

          {/* Policies */}

          <div>
            <h4 className="font-semibold mb-4">Policies</h4>

            <ul className="space-y-3">
              <li>
                <Link href="/policies">Terms & Conditions</Link>
              </li>

              <li>
                <Link href="/policies">Privacy Policy</Link>
              </li>

              <li>
                <Link href="/policies">Shipping Policy</Link>
              </li>

              <li>
                <Link href="/policies">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 Anugra Food Products. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
