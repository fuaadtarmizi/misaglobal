/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';

const serviceItems = [
  {
    id: 1,
    letter: '54',
    text: 'Renewable Energy Technician Certificate',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc: [
      '📌 Sihat tubuh badan',
      '📌 Tiada rekod jenayah',
      '📌 Minimum SPM',
      '📌 Minat dalam bidang berkaitan',
    ],
  },
  // ...copy the rest from your array & tambah `desc` / syarat if needed
];

export default function CourseDetail({ params }) {
  const course = serviceItems.find((item) => item.id.toString() === params.id);
  if (!course) return notFound();

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{course.text}</h1>
        <img src={course.image} alt={course.text} className="rounded mb-4" />
        <p className="text-sm text-gray-500 mb-2">👤 {course.letter} peserta</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Syarat Kemasukan</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {course.desc?.map((syarat, index) => (
            <li key={index}>{syarat}</li>
          ))}
        </ul>

        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
