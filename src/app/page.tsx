export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          🚀 ZIMPORIUNS Platform
        </h1>
        <p className="text-gray-600 mb-8">
          Plataforma em construção! Login e dashboard em breve.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Ir para Login
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            Conectar Vercel
          </a>
        </div>
      </div>
    </div>
  )
}
