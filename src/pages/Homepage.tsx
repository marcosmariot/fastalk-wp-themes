import { Link } from 'react-router-dom';
import { MessageSquare, Users, BarChart3, Zap, Star, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const Homepage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Atendimento Rápido',
      description: 'Respostas automáticas e chatbot inteligente para atender seus clientes 24/7.'
    },
    {
      icon: Users,
      title: 'CRM 100% Integrado',
      description: 'Gestão completa de leads e clientes diretamente no WhatsApp.'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Automáticos',
      description: 'Dashboards e métricas em tempo real para acompanhar seu desempenho.'
    },
    {
      icon: Zap,
      title: 'Integração Fácil',
      description: 'Configure em minutos e comece a vender mais hoje mesmo.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Loja Fashion',
      content: 'Aumentamos 300% nossas vendas com o Fastalk. O CRM integrado é fantástico!',
      rating: 5
    },
    {
      name: 'João Santos',
      company: 'Tech Solutions',
      content: 'A automação do atendimento revolucionou nossa empresa. Recomendo!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'Beleza & Estilo',
      content: 'Nunca vi algo tão completo. WhatsApp + CRM em uma plataforma só!',
      rating: 5
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            O único <span className="text-primary">WhatsApp Empresarial</span> integrado a um{' '}
            <span className="text-primary">CRM Operacional</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatize seu atendimento, gerencie leads e aumente suas vendas com o Combo Customer Trail.
            Tudo integrado em uma plataforma única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Demonstração Gratuita
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Conhecer Planos
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Principais Soluções Automatizadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme seu atendimento com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-background rounded-lg shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              WhatsApp + CRM da Fastalk = Resultados Extraordinários
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Funil de Vendas Otimizado</h3>
                  <p className="text-muted-foreground">Acompanhe cada lead desde o primeiro contato até o fechamento da venda.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Atendimento 24/7</h3>
                  <p className="text-muted-foreground">Chatbot inteligente que nunca dorme e sempre converte.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Relatórios Inteligentes</h3>
                  <p className="text-muted-foreground">Métricas precisas para tomar decisões baseadas em dados.</p>
                </div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link to="/fastalk-web">
                Conhecer Fastalk Web
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Combo Customer Trail</h3>
              <p className="text-lg opacity-90">
                A única solução que integra completamente WhatsApp e CRM, 
                proporcionando uma experiência única para você e seus clientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare size={24} />
                  <span>WhatsApp Business API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={24} />
                  <span>CRM Operacional Completo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap size={24} />
                  <span>Automações Inteligentes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de sucesso com o Fastalk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-soft space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar seu atendimento?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já transformaram suas vendas com o Fastalk.
            Demonstração gratuita, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Solicitar Demonstração
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;