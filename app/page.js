import Image from "next/image";
import '../app/assets/globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 {inter.className}">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg flex flex-col">
          <div className="p-6 flex justify-center">
            <Image
              src="/images/austranet_logo.png"
              alt="Austranet Logo"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <nav className="flex-1 px-4 mt-6 space-y-2">
            {[
              { icon: "📄", label: "Subir archivo" },
              { icon: "📑", label: "Solicitudes" },
              { icon: "📚", label: "Documentos" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-blue-100 text-gray-700 transition-colors"
              >
                <span>{icon}</span> {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Gestor Documental</h1>
            <div>
              <input
                type="search"
                placeholder="Buscar..."
                className="border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </header>

          {/* Areas */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { name: "RRHH", bg: "bg-pink-100", text: "text-pink-800" },
              { name: "Proveedores", bg: "bg-yellow-100", text: "text-yellow-800" },
              { name: "Protocolos", bg: "bg-green-100", text: "text-green-800" },
              { name: "Clientes", bg: "bg-purple-100", text: "text-purple-800" },
            ].map(({ name, bg, text }) => (
              <div
                key={name}
                className={`${bg} rounded-xl shadow-md p-6 text-center font-semibold ${text}`}
              >
                {name}
              </div>
            ))}
          </section>

          {/* Gráficos y otros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Gráfico 1", "Gráfico 2", "Lista de documentos", "Ayuda"].map((title) => (
              <div key={title} className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="font-bold text-lg mb-4 text-gray-700">{title}</h2>
                {/* Aquí podrías agregar el contenido más adelante */}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
