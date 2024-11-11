// // components/Navbar.jsx
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav className="w-full py-4 px-6 bg-white border-b">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link href="/" className="flex items-center">
//           <Image 
//             src="/logo.png" 
//             alt="Logo" 
//             width={150} 
//             height={40}
//             className="cursor-pointer"
//           />
//         </Link>
        
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-gray-600 hover:text-purple-600">Home</Link>
//           <Link href="/Components/Portfolio" className="text-gray-600 hover:text-purple-600">Portfolio</Link>
//           <Link href="/about-me" className="text-gray-600 hover:text-purple-600">About me</Link>
//           <Link href="/testimonials" className="text-gray-600 hover:text-purple-600">Testimonials</Link>
//           <Link href="/contact" 
//             className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
