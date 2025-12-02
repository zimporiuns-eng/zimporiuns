export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          🚀 ZIMPORIUNS Platform
        </h1>
        <p className="text-gray-700">
          Plataforma em construção! Login e dashboard em breve.
        </p>
        <div className="mt-8">
          <a 
            href="/login" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Ir para Login
          </a>
        </div>
      </div>
    </div>
  )
}
