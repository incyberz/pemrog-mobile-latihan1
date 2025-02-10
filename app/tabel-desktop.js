"use client";

export default function Home() {
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Data Mahasiswa
        </h1>
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
                  className="border-b hover:bg-gray-50 transition text-black"
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
      </div>
    </div>
  );
}
