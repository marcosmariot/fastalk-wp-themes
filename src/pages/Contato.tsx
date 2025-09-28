import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const faqs = [
    {
      question: 'Quanto tempo leva para configurar o Fastalk?',
      answer: 'A configuração básica leva cerca de 15 minutos. Nossa equipe oferece suporte completo durante todo o processo de setup.'
    },
    {
      question: 'Posso integrar com meu sistema atual?',
      answer: 'Sim! O Fastalk oferece integrações via API, webhooks e conectores nativos com os principais sistemas do mercado.'
    },
    {
      question: 'Existe limite de mensagens?',
      answer: 'Os limites variam por plano. Entre em contato para discutirmos suas necessidades específicas de volume.'
    },
    {
      question: 'Oferecem suporte técnico?',
      answer: 'Sim! Todos os planos incluem suporte técnico. Planos maiores têm suporte prioritário e gerente de conta dedicado.'
    },
    {
      question: 'Como funciona a garantia de 30 dias?',
      answer: 'Se não ficar satisfeito em 30 dias, devolvemos 100% do valor investido, sem perguntas ou complicações.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Fale com a equipe Fastalk –{' '}
            <span className="text-primary">estamos prontos para ajudar</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe de especialistas está aqui para esclarecer suas dúvidas, 
            apresentar soluções personalizadas e ajudar você a começar.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Entre em contato</h2>
              <p className="text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Conte-nos sobre sua empresa e como podemos ajudar..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2" size={20} />
                Enviar mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Informações de contato</h2>
              <p className="text-muted-foreground">
                Outras formas de entrar em contato com nossa equipe.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">E-mail de suporte</h3>
                  <p className="text-muted-foreground">contato@fastalk.com.br</p>
                  <p className="text-sm text-muted-foreground">Respondemos em até 2 horas úteis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                  <p className="text-sm text-muted-foreground">Segunda à sexta, 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">WhatsApp Empresarial</h3>
                  <p className="text-muted-foreground">wa.me/5511999999999</p>
                  <p className="text-sm text-muted-foreground">Atendimento direto via WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Endereço comercial</h3>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Conjunto 1001<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Quer uma demonstração gratuita?</h3>
              <p className="text-sm opacity-90 mb-4">
                Agende uma apresentação personalizada e veja o Fastalk funcionando na prática.
              </p>
              <Button variant="secondary" className="w-full">
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre o Fastalk
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-soft border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="text-primary" size={16} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Não encontrou sua dúvida?</p>
            <Button variant="outline" size="lg">
              Ver todas as perguntas frequentes
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossa equipe está esperando para apresentar a melhor solução para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Falar com Especialista
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Demonstração Gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;