import { Check, ArrowRight, Star } from 'lucide-react';
import Button from '@/components/ui/Button';

const Planos = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 197',
      period: '/mês',
      description: 'WhatsApp + CRM integrado para pequenas empresas',
      highlight: false,
      features: [
        'WhatsApp Business API',
        'CRM Operacional básico',
        'Até 3 usuários',
        '1.000 contatos',
        'Chatbot básico',
        'Respostas rápidas',
        'Relatórios básicos',
        'Suporte por email',
        'Integração Combo Customer Trail'
      ]
    },
    {
      name: 'Profissional',
      price: 'R$ 397',
      period: '/mês',
      description: 'Automações e dashboards para empresas em crescimento',
      highlight: true,
      features: [
        'Tudo do plano Básico',
        'Até 10 usuários',
        '10.000 contatos',
        'Chatbot com automações',
        'Dashboard gerencial',
        'Campanhas em massa',
        'Kanban avançado',
        'Gestão de projetos',
        'Tags e segmentação',
        'Agendamento de mensagens',
        'Relatórios avançados',
        'Suporte prioritário',
        'Integração WooCommerce'
      ]
    },
    {
      name: 'Corporativo',
      price: 'R$ 797',
      period: '/mês',
      description: 'IA, campanhas em massa e integrações API completas',
      highlight: false,
      features: [
        'Tudo do plano Profissional',
        'Usuários ilimitados',
        'Contatos ilimitados',
        'Chatbot com IA (OpenAI)',
        'Flow Builder avançado',
        'Integrações via API',
        'Typebot, n8n, DialogFlow',
        'Webhooks personalizados',
        'Chat interno empresarial',
        'Múltiplos chips WhatsApp',
        'Relatórios personalizados',
        'Suporte 24/7',
        'Gerente de conta dedicado',
        'Onboarding personalizado'
      ]
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Planos flexíveis para empresas que desejam{' '}
            <span className="text-primary">automatizar atendimento e vendas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a transformar seu atendimento hoje mesmo.
            Todos os planos incluem integração automática WhatsApp + CRM Operacional.
          </p>
          <div className="bg-gradient-primary text-white p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              🎯 Todos os planos incluem integração automática WhatsApp + CRM Operacional via Combo Customer Trail
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl p-8 shadow-soft border-2 transition-shadow hover:shadow-medium ${
                plan.highlight 
                  ? 'border-primary shadow-large' 
                  : 'border-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star size={16} />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <div className="border-t border-border pt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="text-primary" size={12} />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button 
                    className={`w-full ${plan.highlight ? '' : 'variant-outline'}`}
                    variant={plan.highlight ? 'default' : 'outline'}
                    size="lg"
                  >
                    Escolher {plan.name}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Garantia de 30 dias
            </h2>
            <p className="text-xl text-muted-foreground">
              Teste o Fastalk por 30 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento.
              Sem perguntas, sem complicações.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Setup Gratuito</h3>
                <p className="text-muted-foreground text-sm">Configuramos tudo para você começar vendendo no primeiro dia</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Treinamento Incluído</h3>
                <p className="text-muted-foreground text-sm">Sua equipe aprende a usar todas as funcionalidades</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Suporte Especializado</h3>
                <p className="text-muted-foreground text-sm">Equipe dedicada para garantir seu sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa saber sobre nossos planos
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-background p-6 rounded-lg shadow-soft border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Posso mudar de plano a qualquer momento?
            </h3>
            <p className="text-muted-foreground">
              Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
              As mudanças são aplicadas no próximo ciclo de cobrança.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-soft border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              O que está incluído no Combo Customer Trail?
            </h3>
            <p className="text-muted-foreground">
              É nossa integração exclusiva que conecta completamente o WhatsApp Business 
              com o CRM Operacional, permitindo histórico unificado e automações avançadas.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-soft border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Existe período de fidelidade?
            </h3>
            <p className="text-muted-foreground">
              Não há período de fidelidade. Você pode cancelar a qualquer momento, 
              mas recomendamos usar pelo menos 30 dias para ver os resultados.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-soft border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Oferecem treinamento para minha equipe?
            </h3>
            <p className="text-muted-foreground">
              Sim! Todos os planos incluem treinamento para sua equipe. Planos maiores 
              têm treinamentos mais personalizados e suporte dedicado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para escolher seu plano?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Fale com nossos consultores e descubra qual plano é ideal para sua empresa.
            Demonstração gratuita incluída!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Falar com Consultor
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Demonstração Gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planos;