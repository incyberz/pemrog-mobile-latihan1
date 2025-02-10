"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Fungsi untuk mengecek ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Jalankan saat pertama kali dan setiap resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Data Dummy Mahasiswa
  const mahasiswa = [
    {
      id: 1,
      nim: "220101",
      nama: "Ahmad",
      gender: "L",
      prodi: "Informatika",
      kelas: "TI-1A",
      semester: 2,
      alamat: "Jakarta",
      hobby: "Coding",
      citaCita: "Software Engineer",
    },
    {
      id: 2,
      nim: "220102",
      nama: "Budi",
      gender: "L",
      prodi: "Sistem Informasi",
      kelas: "SI-2B",
      semester: 4,
      alamat: "Bandung",
      hobby: "Gaming",
      citaCita: "Game Developer",
    },
    {
      id: 3,
      nim: "220103",
      nama: "Cici",
      gender: "P",
      prodi: "Teknik Elektro",
      kelas: "TE-1C",
      semester: 2,
      alamat: "Surabaya",
      hobby: "Membaca",
      citaCita: "AI Researcher",
    },
    {
      id: 4,
      nim: "220104",
      nama: "Dini",
      gender: "P",
      prodi: "Manajemen",
      kelas: "MN-3D",
      semester: 6,
      alamat: "Yogyakarta",
      hobby: "Menulis",
      citaCita: "Entrepreneur",
    },
    {
      id: 5,
      nim: "220105",
      nama: "Erwin",
      gender: "L",
      prodi: "Akuntansi",
      kelas: "AK-4E",
      semester: 8,
      alamat: "Medan",
      hobby: "Olahraga",
      citaCita: "Akuntan Publik",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Data Mahasiswa
        </h1>
        <p className="mb-2 text-gray-600 text-center">
          Latihan Dual UI dengan CSS Media Query. Jika 1024px atau lebih maka
          tampilan memakai tag table, jika tidak maka UI memakai grid system
          tailwind
        </p>

        {/* UI Grid untuk Mobile */}
        {isMobile ? (
          <div className="space-y-4">
            {mahasiswa.map((mhs, index) => (
              <div
                key={mhs.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
              >
                <div className="grid grid-cols-2 gap-2 text-sm text-green-700">
                  <div className="font-bold text-gray-700">No</div>
                  <div>{index + 1}</div>

                  <div className="font-bold text-gray-700">NIM</div>
                  <div>{mhs.nim}</div>

                  <div className="font-bold text-gray-700">Nama</div>
                  <div>{mhs.nama}</div>

                  <div className="font-bold text-gray-700">Gender</div>
                  <div>
                    {mhs.gender === "L" ? "♂️ Laki-laki" : "♀️ Perempuan"}
                  </div>

                  <div className="font-bold text-gray-700">Prodi</div>
                  <div>{mhs.prodi}</div>

                  <div className="font-bold text-gray-700">Kelas</div>
                  <div>{mhs.kelas}</div>

                  <div className="font-bold text-gray-700">Semester</div>
                  <div>{mhs.semester}</div>

                  <div className="font-bold text-gray-700">Alamat</div>
                  <div>{mhs.alamat}</div>

                  <div className="font-bold text-gray-700">Hobby</div>
                  <div>{mhs.hobby}</div>

                  <div className="font-bold text-gray-700">Cita-cita</div>
                  <div>{mhs.citaCita}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // UI Table untuk Layar Besar
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">NIM</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Prodi</th>
                  <th className="px-4 py-2">Kelas</th>
                  <th className="px-4 py-2">Semester</th>
                  <th className="px-4 py-2">Alamat</th>
                  <th className="px-4 py-2">Hobby</th>
                  <th className="px-4 py-2">Cita-cita</th>
                </tr>
              </thead>
              <tbody>
                {mahasiswa.map((mhs, index) => (
                  <tr
                    key={mhs.id}
                    className="border-b hover:bg-gray-50 transition text-green-700"
                  >
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2">{mhs.nim}</td>
                    <td className="px-4 py-2">{mhs.nama}</td>
                    <td className="px-4 py-2 text-center">
                      {mhs.gender === "L" ? "♂️" : "♀️"}
                    </td>
                    <td className="px-4 py-2">{mhs.prodi}</td>
                    <td className="px-4 py-2">{mhs.kelas}</td>
                    <td className="px-4 py-2 text-center">{mhs.semester}</td>
                    <td className="px-4 py-2">{mhs.alamat}</td>
                    <td className="px-4 py-2">{mhs.hobby}</td>
                    <td className="px-4 py-2">{mhs.citaCita}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
