import { Link } from 'react-router-dom';
import { 
  BookOpen, Play, FileText, MessageSquare, 
  Users, Kanban, Bot, ArrowRight, Youtube 
} from 'lucide-react';
import Button from '@/components/ui/Button';

const Aprenda = () => {
  const tutorials = [
    {
      icon: MessageSquare,
      title: 'Início Rápido',
      description: 'Configure sua conta e faça os primeiros atendimentos em 15 minutos.',
      content: [
        'Como criar sua conta no Fastalk',
        'Conectando seu WhatsApp Business',
        'Configurações básicas essenciais',
        'Primeiro atendimento prático'
      ]
    },
    {
      icon: Users,
      title: 'Filas de Atendimento',
      description: 'Organize sua equipe e distribua atendimentos de forma eficiente.',
      content: [
        'Criando e configurando filas',
        'Definindo regras de distribuição',
        'Gerenciando equipes de atendimento',
        'Monitorando performance da equipe'
      ]
    },
    {
      icon: Kanban,
      title: 'Gestão com Kanban',
      description: 'Domine o funil de vendas visual e aumente suas conversões.',
      content: [
        'Entendendo o Kanban de vendas',
        'Personalizando etapas do funil',
        'Movendo leads entre etapas',
        'Relatórios do funil de vendas'
      ]
    },
    {
      icon: Bot,
      title: 'Automações Inteligentes',
      description: 'Crie fluxos automatizados que trabalham 24/7 para você.',
      content: [
        'Configurando chatbot básico',
        'Criando respostas automáticas',
        'Flow Builder avançado',
        'Integrações com IA (OpenAI)'
      ]
    }
  ];

  const videoTutorials = [
    {
      title: 'Como configurar seu primeiro chatbot',
      duration: '12:30',
      views: '15.2k',
      thumbnail: '/placeholder-video-1.jpg'
    },
    {
      title: 'Integrando WhatsApp com CRM - Passo a passo',
      duration: '18:45',
      views: '8.7k',
      thumbnail: '/placeholder-video-2.jpg'
    },
    {
      title: 'Campanhas em massa que convertem',
      duration: '22:15',
      views: '12.4k',
      thumbnail: '/placeholder-video-3.jpg'
    },
    {
      title: 'Relatórios avançados e métricas',
      duration: '16:20',
      views: '6.3k',
      thumbnail: '/placeholder-video-4.jpg'
    }
  ];

  const articles = [
    {
      category: 'Estratégia',
      title: '10 técnicas para aumentar conversões no WhatsApp',
      excerpt: 'Aprenda as estratégias mais eficazes para transformar conversas em vendas.',
      readTime: '5 min'
    },
    {
      category: 'Automação',
      title: 'Como criar fluxos de chatbot que realmente funcionam',
      excerpt: 'Guia completo para desenvolver automações inteligentes e eficientes.',
      readTime: '8 min'
    },
    {
      category: 'CRM',
      title: 'Gestão de leads: da captura ao fechamento',
      excerpt: 'Processo completo para nunca mais perder uma oportunidade de venda.',
      readTime: '6 min'
    },
    {
      category: 'Métricas',
      title: 'KPIs essenciais para atendimento via WhatsApp',
      excerpt: 'Indicadores que você deve acompanhar para otimizar resultados.',
      readTime: '4 min'
    }
  ];

  const quickTips = [
    'Configure respostas rápidas para perguntas frequentes',
    'Use tags para organizar e segmentar seus contatos',
    'Agende mensagens para horários de maior engajamento',
    'Monitore métricas de conversão semanalmente',
    'Treine sua equipe nas melhores práticas de atendimento',
    'Personalize seu chatbot com a linguagem da sua marca'
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Aprenda a usar o Fastalk e{' '}
            <span className="text-primary">maximize seus resultados</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centro de conhecimento completo com tutoriais, vídeos e dicas práticas 
            para você dominar todas as funcionalidades e vender mais.
          </p>
        </div>
      </section>

      {/* Text Tutorials */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tutoriais Essenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda passo a passo as principais funcionalidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tutorial.icon className="text-primary" size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{tutorial.title}</h3>
                      <p className="text-muted-foreground">{tutorial.description}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <ul className="space-y-2">
                      {tutorial.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2" size={16} />
                    Ler Tutorial Completo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Vídeos Tutoriais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda visualmente com nossos especialistas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTutorials.map((video, index) => (
            <div key={index} className="bg-background rounded-lg shadow-soft overflow-hidden hover:shadow-medium transition-shadow cursor-pointer">
              <div className="relative bg-muted aspect-video flex items-center justify-center">
                <Youtube className="text-primary" size={48} />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground text-sm leading-tight">{video.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{video.views} visualizações</span>
                  <Play size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">
            <Youtube className="mr-2" size={20} />
            Ver Todos os Vídeos
          </Button>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Artigos e Dicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo especializado para aprimorar suas estratégias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime} leitura</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground leading-tight">{article.title}</h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span className="text-sm">Ler artigo</span>
                    <ArrowRight className="ml-1" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dicas Rápidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pequenas ações que fazem grande diferença
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-soft">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de ajuda personalizada?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe de suporte está pronta para ajudar você a aproveitar ao máximo o Fastalk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contato">
                Falar com Suporte
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Agendar Treinamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aprenda;