import { Link } from 'react-router-dom';
import { 
  BarChart3, MessageSquare, Users, Zap, Tags, Calendar, 
  MessageCircle, Send, Bot, Brain, Code, ArrowRight 
} from 'lucide-react';
import Button from '@/components/ui/Button';

const FastalkWeb = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard Gerencial',
      description: 'Visão completa de métricas, conversões e performance em tempo real.'
    },
    {
      icon: MessageSquare,
      title: 'Múltiplos Chips WhatsApp',
      description: 'Integração com vários números e usuários simultâneos.'
    },
    {
      icon: Send,
      title: 'Respostas Rápidas com Mídia',
      description: 'Templates personalizados com imagens, vídeos e documentos.'
    },
    {
      icon: Users,
      title: 'Kanban Inteligente',
      description: 'Organize leads e negociações em funis visuais eficientes.'
    },
    {
      icon: Tags,
      title: 'Gestão de Leads com Tags',
      description: 'Categorize e segmente contatos para atendimento personalizado.'
    },
    {
      icon: Calendar,
      title: 'Agendamento de Mensagens',
      description: 'Programe envios automáticos no horário ideal.'
    },
    {
      icon: MessageCircle,
      title: 'Chat Interno Empresarial',
      description: 'Comunicação interna da equipe integrada ao sistema.'
    },
    {
      icon: Send,
      title: 'Campanhas em Massa',
      description: 'Disparos inteligentes para listas segmentadas.'
    },
    {
      icon: Zap,
      title: 'Flow Builder',
      description: 'Construtor visual de fluxos de automação.'
    },
    {
      icon: Bot,
      title: 'Chatbot Nativo',
      description: 'Atendimento automatizado 24/7 sem complicações.'
    },
    {
      icon: Brain,
      title: 'Chatbot com IA (OpenAI)',
      description: 'Inteligência artificial avançada para conversas naturais.'
    },
    {
      icon: Code,
      title: 'Integrações Avançadas',
      description: 'API, Typebot, n8n, DialogFlow, Webhooks e muito mais.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Soluções automatizadas para{' '}
            <span className="text-primary">atendimento e vendas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O único WhatsApp Empresarial integrado com CRM Operacional. 
            Otimize seu processo de vendas com um funil simples e eficiente. 
            Tenha controle máximo dos seus leads e carteira de clientes.
          </p>
          <div className="bg-gradient-primary text-white p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              ✨ Integração exclusiva com CRM Operacional via Combo Customer Trail
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Funcionalidades do Fastalk Web
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todas as ferramentas que você precisa em uma plataforma completa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-2xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Combo Customer Trail
            </h2>
            <p className="text-xl opacity-90">
              A única solução do mercado que integra completamente WhatsApp Business 
              com CRM Operacional, proporcionando uma experiência única e resultados extraordinários.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold">WhatsApp Empresarial</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• API Oficial WhatsApp Business</li>
                  <li>• Múltiplos atendentes</li>
                  <li>• Automações inteligentes</li>
                  <li>• Campanhas em massa</li>
                </ul>
              </div>
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold">CRM Operacional</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Gestão completa de leads</li>
                  <li>• Funil de vendas otimizado</li>
                  <li>• Relatórios avançados</li>
                  <li>• Gestão de projetos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Como funciona o processo
            </h2>
            <p className="text-xl text-muted-foreground">
              Funil simples e eficiente para maximizar suas conversões
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground">Captação</h3>
              <p className="text-muted-foreground text-sm">
                Lead entra em contato via WhatsApp e é automaticamente cadastrado no CRM
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground">Qualificação</h3>
              <p className="text-muted-foreground text-sm">
                Chatbot qualifica o lead e direciona para o atendente certo
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground">Atendimento</h3>
              <p className="text-muted-foreground text-sm">
                Atendente humano recebe lead qualificado com histórico completo
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-foreground">Conversão</h3>
              <p className="text-muted-foreground text-sm">
                Vendas acompanhadas no CRM até o fechamento do negócio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pronto para otimizar seu processo de vendas?
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja na prática como o Fastalk Web pode transformar seu atendimento e aumentar suas vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Demonstração Gratuita
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/planos">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastalkWeb;