// // components/Footer.jsx
// import Link from 'next/link';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <Link href="/">
//               <Image 
//                 src="/logo.png" // Replace with your logo path
//                 alt="Logo" 
//                 width={120} 
//                 height={30} 
//               />
//             </Link>
//           </div>
          
//           <div className="flex space-x-8 mt-6 md:mt-0">
//             <Link href="/" className="text-gray-600 hover:text-purple-600">Home</Link>
//             <Link href="/portfolio" className="text-gray-600 hover:text-purple-600">Portfolio</Link>
//             <Link href="/about-me" className="text-gray-600 hover:text-purple-600">About me</Link>
//             <Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
//             <Link href="/projects" className="text-gray-600 hover:text-purple-600">Projects</Link>
//           </div>
          
//           <div className="flex space-x-4 mt-6 md:mt-0">
//             <a href="https://facebook.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
//               <span className="text-gray-600">f</span>
//             </a>
//             <a href="https://twitter.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
//               <span className="text-gray-600">t</span>
//             </a>
//             <a href="https://instagram.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
//               <span className="text-gray-600">i</span>
//             </a>
//           </div>
//         </div>
        
//         <div className="mt-8 text-center text-gray-600 text-sm">
//           <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
