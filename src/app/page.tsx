import PayPalDonation from "@/components/paypal-donation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Ayuda a Alimentar Sueños
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Tu donación puede cambiar la vida de un niño. Cada contribución es una oportunidad para un futuro mejor.
            </p>
            <PayPalDonation />
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Niño y dos hombres ayudándole"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
