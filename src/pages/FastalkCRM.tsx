import { Link } from 'react-router-dom';
import { 
  Users, Kanban, FileText, ShoppingCart, 
  FolderOpen, Zap, ArrowRight, Target 
} from 'lucide-react';
import Button from '@/components/ui/Button';

const FastalkCRM = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestão de Leads',
      description: 'Cadastro automático e acompanhamento completo de cada potencial cliente.'
    },
    {
      icon: Kanban,
      title: 'Kanban de Vendas',
      description: 'Funil visual para acompanhar negociações em todas as etapas.'
    },
    {
      icon: FileText,
      title: 'Gestão de Propostas',
      description: 'Crie, envie e acompanhe propostas comerciais profissionais.'
    },
    {
      icon: ShoppingCart,
      title: 'Integração WooCommerce',
      description: 'Sincronização automática com sua loja virtual WooCommerce.'
    },
    {
      icon: FolderOpen,
      title: 'Gestão de Projetos',
      description: 'Organize e acompanhe projetos de clientes do início ao fim.'
    },
    {
      icon: Zap,
      title: 'Integração Fastalk Web',
      description: 'Conexão exclusiva via Combo Customer Trail para máxima eficiência.'
    }
  ];

  const benefits = [
    {
      title: 'Visão Unificada',
      description: 'Todo histórico do cliente em um só lugar: conversas do WhatsApp, propostas, projetos e vendas.',
      icon: Target
    },
    {
      title: 'Funil Padronizado',
      description: 'Processo de vendas estruturado que garante que nenhum lead seja perdido.',
      icon: Kanban
    },
    {
      title: 'Automação Inteligente',
      description: 'Leads do WhatsApp automaticamente organizados no CRM sem trabalho manual.',
      icon: Zap
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Controle máximo dos seus{' '}
            <span className="text-primary">leads e vendas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O único WhatsApp Empresarial integrado a um CRM Operacional. 
            Otimize o processo de vendas com funil padronizado e visão unificada 
            entre atendimento no WhatsApp e gestão no CRM Fastalk.
          </p>
          <div className="bg-gradient-primary text-white p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              🚀 Integração exclusiva com Fastalk Web via Combo Customer Trail
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar leads e fechar mais vendas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Por que escolher o Fastalk CRM?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A única solução que integra completamente WhatsApp e CRM
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-6 p-8 bg-background rounded-lg shadow-soft">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <benefit.icon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Flow */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Como funciona a integração
            </h2>
            <p className="text-xl text-muted-foreground">
              Fluxo automático do WhatsApp para o CRM
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cliente entra em contato</h3>
                    <p className="text-muted-foreground">Lead faz contato via WhatsApp Business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cadastro automático</h3>
                    <p className="text-muted-foreground">Sistema cria lead automaticamente no CRM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Histórico unificado</h3>
                    <p className="text-muted-foreground">Todas as conversas ficam registradas no CRM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Gestão completa</h3>
                    <p className="text-muted-foreground">Acompanhe o lead até o fechamento da venda</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Combo Customer Trail</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>WhatsApp Business API</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>CRM Operacional Completo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Sincronização em Tempo Real</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Histórico Unificado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Relatórios Integrados</span>
                  </div>
                </div>
                <p className="text-sm opacity-90 mt-6">
                  A única solução do mercado que oferece essa integração completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-background rounded-2xl p-12 shadow-large">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Resultados que você pode esperar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">+300%</div>
                <p className="text-muted-foreground">Aumento em conversões</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">-80%</div>
                <p className="text-muted-foreground">Redução em leads perdidos</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <p className="text-muted-foreground">Atendimento automatizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pronto para ter controle total dos seus leads?
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja como o Fastalk CRM pode transformar seu processo de vendas com a integração WhatsApp + CRM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Solicitar Demonstração
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/planos">Conhecer Planos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastalkCRM;