import { Link } from "react-router";
import { Box } from "../Box";
import { Logo } from "../Logo";
import { FooterSection } from "./FooterSection";
import { FooterLink } from "./FooterLink";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-10 border-t-4 border-orange-500">
      <Box className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Column */}
        <FooterSection>
          <Logo />
          <p className="text-sm text-slate-400">
            Sua loja favorita com os melhores produtos e preços do mercado. Qualidade e confiança você encontra aqui.
          </p>

          <ul className="flex gap-4 mt-2">
            <FooterLink link="/">
              <i role="listitem" aria-label="Instagram" className="fa-brands fa-instagram text-xl"></i>
            </FooterLink>

            <FooterLink link="/">
              <i role="listitem" aria-label="Facebook" className="fa-brands fa-facebook text-xl"></i>
            </FooterLink>

            <FooterLink link="/">
              <i role="listitem" aria-label="Twitter" className="fa-brands fa-twitter text-xl"></i>
            </FooterLink>
          </ul>
        </FooterSection>

        {/* Links Column */}
        <FooterSection>
          <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-2 w-fit">Navegação</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
            <li><Link to="/carrinho" className="hover:text-orange-500 transition-colors">Meu Carrinho</Link></li>
            <li><Link to="#" className="hover:text-orange-500 transition-colors">Produtos</Link></li>
            <li><Link to="#" className="hover:text-orange-500 transition-colors">Ofertas</Link></li>
          </ul>
        </FooterSection>

        {/* Categories Column */}
        <FooterSection>
          <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-2 w-fit">Categorias</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="#" className="hover:text-orange-500 transition-colors">Eletrônicos</Link></li>
            <li><Link to="#" className="hover:text-orange-500 transition-colors">Moda</Link></li>
            <li><Link to="#" className="hover:text-orange-500 transition-colors">Casa e Decoração</Link></li>
            <li><Link to="#" className="hover:text-orange-500 transition-colors">Esportes</Link></li>
          </ul>
        </FooterSection>

        {/* Contact Column */}
        <FooterSection>
          <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-2 w-fit">Atendimento</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-orange-500"></i> (11) 99999-9999</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-envelope text-orange-500"></i> contato@shoptrix.com</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-orange-500"></i> Rua Exemplo, 123 - SP</li>
          </ul>
        </FooterSection>

      </Box>

      {/* Copyright Bar */}
      <article className="bg-slate-900 py-4 text-center text-xs text-slate-500">
        <Box>
          <p>© {new Date().getFullYear()} Shoptrix. Todos os direitos reservados.</p>
        </Box>
      </article>
    </footer>
  );
}
