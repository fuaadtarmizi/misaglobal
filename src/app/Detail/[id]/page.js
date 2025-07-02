/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';

const serviceItems = [
  {
    id: 1,
    letter: '54',
    text: 'Renewable Energy Technician Certificate',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc: [
      // '📌 Sihat tubuh badan',
      // '📌 Tiada rekod jenayah',
      // '📌 Minimum SPM',
      // '📌 Minat dalam bidang berkaitan',
    ],
  },
  {
    id: 2,
    letter: '237',
    text: 'Certificate in Basic Scaffolding Erector in Oil & Gas Industry ',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc1: [
      '📌 BERUMUR 20 HINGGA 35 TAHUN',
      '📌 BERSTATUS BUJANG / KAHWIN (BOLEH BERJAUHAN DARI KELUARGA)',
      '📌 SIHAT TUBUH BADAN (TIDAK MEMPUNYAI MASALAH KESIHATAN YANG MENGHALANG UNTUK MELAKUKAN KEGIATAN BERAT',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌 LELAKI DAN PEREMPUAN',
      '📌 MEMILIKI 5M (MEMBACA, MENGIRA, MENULIS, MINAT & MAMPU)',
    ],
    desc2: [
      '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      '📌 PERCUMA MAKAN DAN MINUM TIGA KALI SEHARI',
      '📌 PERCUMA BASIC UNIFORM PPE',
      '📌 SIJIL SCAFFOLDING ERECTOR',
      '📌 OIL & GAS SAFETY PASSPORT (OGSP)',
      '📌 CIDB GREENCARD',
      '📌 SIJIL PENYERTAAN',
    ],
  },
  {
    id: 3,
    letter: '985',
    text: 'Certificate in Fiber Optic Tecnician',
    image: 'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg',
    desc1: [
      '📌 MEMPUNYAI SIJIL SPM DAN KE ATAS',
      '📌 BERUMUR 20 HINGGA 40 TAHUN',
      '📌 TERBUKA KEPADA RAKYAT MALAYSIA',
      '📌 SIHAT TUBUH BADAN',
      '📌 OIL & GAS SAFETY PASSPORT (OGSP)',
      '📌 TIADA REKOD JENAYAH',
      '📌 LELAKI SAHAJA',
    ],
    desc2: [
      '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      '📌 PERCUMA MAKAN & MINUM 3 KALI SEHARI SEMASA LATIHAN',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA BASIC UNIFORM PPE',
      '📌 NIOSH TM SAFETY PASSPORT',
      '📌 AUTHORISED ENTRANT AND STANDBY PERSON FOR TM CONTRACTOR  (AESPTM)',
      '📌 TM – CA2C',
      '📌 TM – CA2A',
      '📌 POLE PROFICIENCY',
    ],
  },
  {
    id: 4,
    letter: '512',
    text: 'Certificate in Non-Destructive Testing – Radiography Testing (NDT-RT)',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc1: [
      '📌 BERUMUR 20 HINGGA 35 TAHUN',
      '📌 BERSTATUS BUJANG (BOLEH BERJAUHAN DARI KELUARGA)',
      '📌 SIHAT TUBUH BADAN',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌 MEMILIKI SIJIL PELAJARAN MALAYSIA SPM DAN KE ATAS',
    ],
    desc2: [
      '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      '📌 PERCUMA MAKAN & MINUM 3 KALI SEHARI SEMASA LATIHAN',
      '📌 PERCUMA PENGINAPAN',
      '📌 SET PERALATAN BELAJAR',
      '📌 NDT: COMBINED RADIOGRAPHY TESTING (RT) LEVEL 1 & 2 WITH JPK EXAMINATION',
    ],
  },
  {
    id: 5,
    letter: '672',
    text: 'Certificate in Pipe & Riger Fitter (3 Bulan)',
    image: 'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg',
    desc1: [
      '📌 BERUMUR 20 HINGGA 35 TAHUN',
      '📌 BERSTATUS BUJANG (BOLEH BERJAUHAN DARI KELUARGA)',
      '📌 SIHAT TUBUH BADAN',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌 MEMILIKI SIJIL PELAJARAN MALAYSIA SPM DAN KE ATAS',
    ],
    desc2: [
      '📌 PENGANGKUTAN DISEDIAKAN(DARI ASRAMA KE PUSAT LATIHAN)',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA UNIFORM PPE',
      '📌 NIOSH OIL & GAS SAFETY PASSPORT (OGSP)',
      '📌 KAD CIDB',
      '📌 LESEN OFFSHORE T-BOSIET OPITO',
      '📌 SIJIL BASIC FIRE WATCH',
      '📌 SIJIL BASIC RIGGING SLINGING',
      '📌 CONFINE SPACE ENTRY (AESP)',
      '📌 DIJAMIN PEKERJAAN',
    ],
  },
  {
    id: 6,
    letter: '634',
    text: 'Certificate in Fiber Optic Splicer Tecnician',
    image: 'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg',
    desc1: [
      '📌 MEMPUNYAI SIJIL SPM DAN KE ATAS',
      '📌 BERUMUR 20 HINGGA 40 TAHUN',
      '📌 TERBUKA KEPADA RAKYAT MALAYSIA',
      '📌 SIHAT TUBUH BADAN',
      '📌 OIL & GAS SAFETY PASSPORT (OGSP)',
      '📌 TIADA REKOD JENAYAH',
      '📌 LELAKI SAHAJA',
    ],
    desc2: [
      '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      '📌 PERCUMA MAKAN & MINUM 3 KALI SEHARI SEMASA LATIHAN',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA BASIC UNIFORM PPE',
      '📌 NIOSH TM SAFETY PASSPORT',
      '📌 AUTHORISED ENTRANT AND STANDBY PERSON FOR TM CONTRACTOR  (AESPTM)',
      '📌 TM – CA2C',
      '📌 TM – CA2A',
      '📌 POLE PROFICIENCY',
    ],
  },
  {
    id: 7,
    letter: '902',
    text: 'Certificate in Autorized Gas Tester Entry Supervisor',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc1: [
      // '📌 MEMPUNYAI SIJIL SPM DAN KE ATAS',
      // '📌 BERUMUR 20 HINGGA 40 TAHUN',
      // '📌 TERBUKA KEPADA RAKYAT MALAYSIA',
      // '📌 SIHAT TUBUH BADAN',
      // '📌 OIL & GAS SAFETY PASSPORT (OGSP)',
      // '📌 TIADA REKOD JENAYAH',
      // '📌 LELAKI SAHAJA',
    ],
    desc2: [
      // '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      // '📌 PERCUMA MAKAN & MINUM 3 KALI SEHARI SEMASA LATIHAN',
      // '📌 PERCUMA PENGINAPAN',
      // '📌 PERCUMA BASIC UNIFORM PPE',
      // '📌 NIOSH TM SAFETY PASSPORT',
      // '📌 AUTHORISED ENTRANT AND STANDBY PERSON FOR TM CONTRACTOR  (AESPTM)',
      // '📌 TM – CA2C',
      // '📌 TM – CA2A',
      // '📌 POLE PROFICIENCY',
    ],
  },
  {
    id: 8,
    letter: '871',
    text: 'Certificate in Protective Coating Technician',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc1: [
      // '📌 MEMPUNYAI SIJIL SPM DAN KE ATAS',
      // '📌 BERUMUR 20 HINGGA 40 TAHUN',
      // '📌 TERBUKA KEPADA RAKYAT MALAYSIA',
      // '📌 SIHAT TUBUH BADAN',
      // '📌 OIL & GAS SAFETY PASSPORT (OGSP)',
      // '📌 TIADA REKOD JENAYAH',
      // '📌 LELAKI SAHAJA',
    ],
    desc2: [
      // '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      // '📌 PERCUMA MAKAN & MINUM 3 KALI SEHARI SEMASA LATIHAN',
      // '📌 PERCUMA PENGINAPAN',
      // '📌 PERCUMA BASIC UNIFORM PPE',
      // '📌 NIOSH TM SAFETY PASSPORT',
      // '📌 AUTHORISED ENTRANT AND STANDBY PERSON FOR TM CONTRACTOR  (AESPTM)',
      // '📌 TM – CA2C',
      // '📌 TM – CA2A',
      // '📌 POLE PROFICIENCY',
    ],
  },
  {
    id: 9,
    letter: '667',
    text: 'Certificate in Site Safety Supervisor (15 Hari)',
    image: 'https://assets.nst.com.my/images/articles/21xxbangla1_1682663476.jpg',
    desc1: [
      '📌 BERUMUR 20 HINGGA 35 TAHUN',
      '📌 BERSTATUS BUJANG',
      '📌 LELAKI DAN PEREMPUAN',
      '📌 MINIMUM MEMPUNYAI DIPLOMA',
      '📌 SIHAT TUBUH BADAN',
      '📌 BEBAS PENYALAHGUNAAN DADAH DAN TIADA REKOD JENAYAH',
    ],
    desc2: [
      '📌 PENEMPATAN PEKERJAAN DAN LATIHAN DIBERIKAN',
      '📌 PERCUMA MAKAN & MINUM 3 KALI SEHARI SEMASA LATIHAN',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA BASIC UNIFORM PPE',
      '📌 OIL AND GAS SAFETY PASSPORT (OGSP)',
      '📌 CIDB GREENCARD',
      '📌 SIJIL OCCUPATIONAL SAFETY AND HEALTH COORDINATOR (OSHC)',
      '📌 SIJIL OSH SUPERVISOR',
      ],
  },
  {
    id: 10,
    letter: '994',
    text: 'Certificate in Pipe Gas Insulation (3 Bulan)',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg',
    desc1: [
      '📌 18 HINGGA 35 TAHUN',
      '📌 MEMILIKI SEKURANG-KURANGNYA PT3/PMR/UPSR/LEPASAN PONDOK',
      '📌 BOLEH MEMBACA, MENULIS, MENGIRA, MINAT DAN MAMPU (5M)',
      '📌 SIHAT TUBUH BADAN',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌  LELAKI SAHAJA',
    ],
    desc2: [
      '📌 PENGANGKUTAN DISEDIAKAN(DARI ASRAMA KE PUSAT LATIHAN)',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA BASIC UNIFORM PPE',
      '📌 OIL AND GAS SAFETY PASSPORT (OGSP)',
      '📌 KAD CIDB',
      '📌 LESEN OFFSHORE T-BOSIET OPITO',
      '📌 SIJIL BASIC FIRE WATCH',
      '📌 SIJIL WAH (WORK AT HIGH)',
      '📌 MEDICAL OHD',
      '📌 CONFINED SPACE ENTRY (AESP)',
      '📌 GAS PIPE INSTALLATION (ABM) (HIGH PRESSURE)',
      '📌 DIJAMIN PEKERJAAN',
      ],
  },
  {
    id: 11,
    letter: '783',
    text: 'Certificate in Drone Pilot Programme - Basic Remote Pilot',
    image: 'https://gaotek.com/wp-content/uploads/elementor/thumbs/Applications-of-Payload-Drones-in-the-Environmental-Monitoring-IndustryBy-Sibgha-qsy4fyhsyzmvu9tl2heexk23r75avx6rkn13q8pyc0.jpg',
    desc1: [
      '📌 18 HINGGA 35 TAHUN',
      '📌 MEMILIKI SEKURANG-KURANGNYA PT3/PMR/UPSR/LEPASAN PONDOK',
      '📌 BOLEH MEMBACA, MENULIS, MENGIRA, MINAT DAN MAMPU (5M)',
      '📌 SIHAT TUBUH BADAN',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌  LELAKI SAHAJA',
    ],
    desc2: [
      '📌 MAKAN DAN MINUM DISEDIAKAN SEMASA LATIHAN',
      '📌 UNIFORM DISEDIAKAN',
      '📌 BANTUAN PENEMPATAN PEKERJAAN',
      '📌 MENDAPAT SIJIL BASIC REMOTE PILOT',
      '📌 PENGANGKUTAN LESEN D',
      '📌 EPF, INSURAN',
      '📌 ELAUN',
      ],
  },
  {
    id: 12,
    letter: '689',
    text: 'Certificate in Kursus Kelasi Katering',
    image: 'https://www.acclaindia.com/success-stories/wp-content/uploads/2019/03/Galley_prep.jpg',
    desc1: [
      '📌 18 HINGGA 35 TAHUN',
      '📌 MEMPUNYAI ASAS MEMASAK',
      '📌 BOLEH MEMBACA, MENULIS, MENGIRA, MINAT DAN MAMPU (5M)',
      '📌 TIDAK PERLU SEATIME',
      '📌 LELAKI SAHAJA',
      '📌 MEDICAL CHECK UP',
    ],
    desc2: [
      '📌 PENGANGKUTAN DISEDIAKAN(DARI ASRAMA KE PUSAT LATIHAN)',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA UNIFORM',
      '📌 BASIC TRAINING STCW',
      '📌 SHIP SECURITY AWARENESS (SSA)',
      '📌 DESIGNATED SECURITY AWARENESS (DSD)',
      '📌 SCMC SHIPBOARD CATERING MANAGEMENT COURSE',
      '📌 BTOCT BASIC TRAINING OIL CHEMICAL TANKER',
      '📌 FOOD HANDLER CERTIFICATE',
      '📌 DIJAMIN PEKERJAAN',
      ],
  },
  {
    id: 13,
    letter: '837',
    text: 'Certificate in Kursus Kulinari',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjT5coLkXMnDSSEjokCpExIgLImLbCE87IMSZs7hpMqiTeRI88kdzH4_D5rIJal4LiliNfa8xxKLAOQu8dWT3P3KOilJ0fY3mfJ_3jErG-91sBbnNM23HxvsGQeCI3jLnPm26uYG_luh0/s1600/2013-04-06_200108.png',
    desc1: [
      '📌 18 HINGGA 35 TAHUN',
      '📌 MEMILIKI SEKURANG-KURANGNYA PT3/PMR',
      '📌 BOLEH MEMBACA, MENULIS, MENGIRA, MINAT DAN MAMPU (5M)',
      '📌 SIHAT TUBUH BADAN (LULUS PANEL JABATAN LAUT)',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌 LELAKI SAHAJA',
    ],
    desc2: [
      '📌 PENGANGKUTAN DISEDIAKAN(DARI ASRAMA KE PUSAT LATIHAN)',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA UNIFORM PPE',
      '📌 SEAMAN CARD',
      '📌 SIJIL BASIC TRAIINING STCW',
      '📌 SIJIL WATCH KEEPING DECK/ENGINE',
      '📌 DESIGNATED SECURITY DUTIES STCW',
      '📌 SHIP SECURITY AWARENESS STCW',
      '📌 SIJIL SHIP SECURITY AWARENESS STCW',
      '📌 BASIC RIGGING SLINGING',
      '📌 DIJAMIN PEKERJAAN',
      ],
  },
  {
    id: 14,
    letter: '441',
    text: 'Certificate in Kursus Kulinari',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjT5coLkXMnDSSEjokCpExIgLImLbCE87IMSZs7hpMqiTeRI88kdzH4_D5rIJal4LiliNfa8xxKLAOQu8dWT3P3KOilJ0fY3mfJ_3jErG-91sBbnNM23HxvsGQeCI3jLnPm26uYG_luh0/s1600/2013-04-06_200108.png',
    desc1: [
      '📌 18 HINGGA 35 TAHUN',
      '📌 MEMILIKI SEKURANG-KURANGNYA PT3/PMR',
      '📌 BOLEH MEMBACA, MENULIS, MENGIRA, MINAT DAN MAMPU (5M)',
      '📌 SIHAT TUBUH BADAN (LULUS PANEL JABATAN LAUT)',
      '📌 BEBAS PENYALAHGUNAAN DADAH',
      '📌 LELAKI SAHAJA',
    ],
    desc2: [
      '📌 PENGANGKUTAN DISEDIAKAN(DARI ASRAMA KE PUSAT LATIHAN)',
      '📌 PERCUMA PENGINAPAN',
      '📌 PERCUMA UNIFORM PPE',
      '📌 SEAMAN CARD',
      '📌 SIJIL BASIC TRAIINING STCW',
      '📌 SIJIL WATCH KEEPING DECK/ENGINE',
      '📌 DESIGNATED SECURITY DUTIES STCW',
      '📌 SHIP SECURITY AWARENESS STCW',
      '📌 SIJIL SHIP SECURITY AWARENESS STCW',
      '📌 BASIC RIGGING SLINGING',
      '📌 DIJAMIN PEKERJAAN',
      ],
  },
];

export default function CourseDetail({ params }) {
  const course = serviceItems.find((item) => item.id.toString() === params.id);
  if (!course) return notFound();

  return (
    <div className="min-h-screen mt-24 p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{course.text}</h1>
        <img src={course.image} alt={course.text} className="rounded mb-4" />
        <p className="text-sm text-gray-500 mb-2">👤 {course.letter} peserta</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Syarat Kemasukan</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {course.desc1?.map((syarat, index) => (
            <p className="py-1" key={index}>{syarat}</p>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Kelebihan</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {course.desc2?.map((syarat, index) => (
            <p className="py-1" key={index}>{syarat}</p>
          ))}
        </ul>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
