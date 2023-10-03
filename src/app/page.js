'use client'
import Button from "@/components/Button"

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50">
      <div className="p-5 shadow-md bg-white rounded-sm w-1/3">
        <h2 className="text-2xl font-semibold mb-6 text-center pb-3">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electrónico</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="password" id="password" name="password" placeholder="Tu contraseña" required />
          </div>
          <div className="flex items-center justify-center">
            <Button color1="indigo-500" color2="indigo-600" texto="Iniciar sesión" />
            <Button color1="indigo-900" color2="indigo-950" texto="Registrarse" />
          </div>
          <div className="flex items-center justify-between">
            <a className="text-gray-600 hover:underline text-sm mx-auto pt-3" href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

