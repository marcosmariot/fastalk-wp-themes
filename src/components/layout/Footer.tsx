import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">Fastalk</span>
            </div>
            <p className="text-muted-foreground text-sm">
              O único WhatsApp Empresarial integrado a um CRM Operacional.
              Automatize seu atendimento e maximize suas vendas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Úteis</h3>
            <div className="space-y-2">
              <Link to="/fastalk-web" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Fastalk Web
              </Link>
              <Link to="/fastalk-crm" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Fastalk CRM
              </Link>
              <Link to="/planos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Planos
              </Link>
              <Link to="/aprenda" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Aprenda
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>contato@fastalk.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Fastalk. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;