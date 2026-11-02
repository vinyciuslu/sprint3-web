
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className="login-page min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#F9F8F5]">

      {/* Painel de apresentação */}
      <section className="login-panel relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#202122] p-12 text-white">

        <div className="relative z-10">
          <Link to="/" className="text-3xl font-bold tracking-tight">
            InterGuide<span className="text-gray-400">.</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-xl">
          <span className="mb-5 block text-sm uppercase tracking-[0.3em] text-gray-400">
            Sua jornada universitária
          </span>

          <h1 className="text-5xl font-semibold leading-tight xl:text-6xl">
            Conectando você ao seu próximo destino.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-300">
            Informações, orientações e suporte para uma experiência
            universitária mais completa.
          </p>
        </div>

        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full border border-white/10" />

        <p className="relative z-10 text-sm text-gray-500">
          InterGuide © 2026
        </p>

      </section>

      {/* Área de login */}
      <section className="flex min-h-screen items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          <div className="mb-10 text-center lg:hidden">
            <Link to="/" className="text-3xl font-bold text-[#202122]">
              InterGuide.
            </Link>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm sm:p-10">

            <div className="mb-9 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#202122] text-2xl font-bold text-white">
                I.
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#202122]">
                Bem-vindo de volta!
              </h2>

              <p className="mt-2 text-gray-500">
                Entre na sua conta InterGuide.
              </p>
            </div>

            <form className="space-y-5">

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#202122]"
                >
                  E-mail institucional
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 outline-none transition focus:border-[#202122] focus:ring-2 focus:ring-[#202122]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#202122]"
                >
                  Senha
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 outline-none transition focus:border-[#202122] focus:ring-2 focus:ring-[#202122]/10"
                />
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-[#202122]" />
                  Lembrar de mim
                </label>

                <button
                  type="button"
                  className="font-medium text-[#202122] underline underline-offset-4"
                >
                  Esqueceu a senha?
                </button>

              </div>

              <button
                type="submit"
                className="login-submit w-full rounded-full bg-[#202122] px-6 py-3.5 font-medium text-white transition hover:bg-black"
              >
                Entrar →
              </button>

            </form>

            <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
              Ainda não tem uma conta?

              <Link
                to="/"
                className="ml-1 font-semibold text-[#202122] underline underline-offset-4"
              >
                Entre em contato
              </Link>
            </div>

          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Uma experiência universitária mais conectada.
          </p>

        </div>

      </section>

    </main>
  )
}

export default Login
