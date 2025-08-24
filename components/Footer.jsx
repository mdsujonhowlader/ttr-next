import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card py-8 border-t border-t-primary shadow-primary px-4 md:px-0 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-green-400">Menu</h2>
          <ul className="space-y-2">
            <li className="hover:underline">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Testimonial</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">FaQ</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold text-green-400">Menu2</h2>
          <ul className="space-y-2">
            <li className="hover:underline">
              <Link href="#">Blogs</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Contacts</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Agrements</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start space-y-4">
          <h2 className="text-lg font-semibold text-green-400">
            Office Location
          </h2>
          <div className="flex flex-col space-y-4">
            <address className="not-italic  text-sm leading-relaxed">
              The Tech Resolver
              <br />
              2nd Floor, Banasree Block-D,
              <br />
              Dhaka-1219, Bangladesh.
            </address>
          </div>
        </div>
        <div className="flex flex-col space-y-3 w-full">
          <h2 className="text-lg font-semibold text-green-400">Subscribe</h2>
          <input
            type="email"
            className="border border-primary bg-background text-foreground  px-4 py-3 outline-none rounded-lg w-full"
            placeholder="Enter your email"
          />
          <button className="px-5 py-3 text-sm font-medium text-background bg-button rounded-lg hover:bg-button/90 transition">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center text-xs  mt-10">
        &copy; {new Date().getFullYear()} All rights reserved by The Tech
        Resolver.
      </div>
    </footer>
  );
}
