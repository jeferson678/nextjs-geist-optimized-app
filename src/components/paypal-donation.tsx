"use client"

import { useState } from "react"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const paypalOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  currency: "USD",
  intent: "capture",
  components: "buttons,funding-eligibility",
  "enable-funding": "card"
} as const

export default function PayPalDonation() {
  const [amount, setAmount] = useState("10")
  const [isLoading, setIsLoading] = useState(false)
  const [currency, setCurrency] = useState("USD")

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: currency,
          },
        },
      ],
    })
  }

  const onApprove = (data: any) => {
    setIsLoading(true)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsLoading(false)
        alert(`Gracias por tu donación!`)
        resolve()
      }, 1000)
    })
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-md mx-auto p-6 shadow-lg border-2 border-black/10 bg-white rounded-lg">
        <PayPalScriptProvider options={paypalOptions}>
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="amount" className="block font-semibold">
                Monto de la donación
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                step="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="currency" className="block font-semibold">
                Moneda
              </label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="USD">USD - Dólares</option>
                <option value="EUR">EUR - Euros</option>
                <option value="MXN">MXN - Pesos Mexicanos</option>
              </select>
            </div>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={createOrder}
              onApprove={onApprove}
              disabled={isLoading}
            />
          </div>
        </PayPalScriptProvider>
      </div>
    </section>
  )
}
