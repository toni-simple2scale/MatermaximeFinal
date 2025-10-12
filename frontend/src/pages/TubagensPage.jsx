import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// WhatsApp removed

const TubagensPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Tubagens',
    quantity: '',
    message: ''
  });

  const tubagens = [
    {
      name: 'Tubo PVC Águas',
      description: 'Tubos de PVC para instalações de água potável.',
      specs: 'Vários diâmetros disponíveis | Cor azul',
      applications: ['Água potável', 'Redes prediais', 'Irrigação', 'Piscinas']
    },
    {
      name: 'Tubo PVC Esgotos',
      description: 'Tubos de PVC para redes de esgotos e águas pluviais.',
      specs: 'Vários diâmetros disponíveis | Cor laranja/cinza',
      applications: ['Esgotos domésticos', 'Águas pluviais', 'Drenagem', 'Coletores']
    },
    {
      name: 'Tubo Corrugado',
      description: 'Tubo corrugado flexível para proteção de cabos.',
      specs: 'Vários diâmetros disponíveis | Dupla parede | Flexível',
      applications: ['Proteção cabos', 'Instalações elétricas', 'Telecomunicações', 'Enterramento']
    },
    {
      name: 'Tubo Multicamadas',
      description: 'Tubo compósito para instalações de aquecimento e águas.',
      specs: 'Vários diâmetros disponíveis | PEX-Al-PEX | 95°C máx',
      applications: ['Aquecimento central', 'Águas quentes', 'Ar condicionado', 'Radiadores']
    },
    {
      name: 'Tubo Polietileno PE100',
      description: 'Tubo de polietileno para redes de distribuição de água.',
      specs: 'Vários diâmetros disponíveis | PE100',
      applications: ['Redes públicas', 'Grandes caudais', 'Condutas adutoras', 'Indústria']
    }
  ];

  const acessorios = [
    'Cotovelos 90°',
    'Tês de derivação',
    'Reduções',
    'Uniões',
    'Tampões',
    'Válvulas',
    'Abraçadeiras',
    'Juntas de estanqueidade'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pedido de orçamento para Tubagens enviado com sucesso!');
    setQuoteForm({ name: '', phone: '', email: '', product: 'Tubagens', quantity: '', message: '' });
  };

  const handleInputChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Tubagens</span> e Acessórios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Tubos para águas, esgotos e instalações diversas com todos os acessórios necessários.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 mb-12">
              {tubagens.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="text-sm text-gray-500 mb-4">{product.specs}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicações:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Accessories Section */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Acessórios Disponíveis</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {acessorios.map((acessorio, index) => (
                  <div key={index} className="bg-white/70 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-700 font-medium">{acessorio}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Todos os acessórios disponíveis nos diâmetros correspondentes aos tubos. 
                Contacte-nos para lista completa de acessórios específicos.
              </p>
            </div>

            {/* Technical Info */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Serviços Técnicos</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Projeto de instalações</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Cálculo de perdas de carga</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Seleção de diâmetros</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Apoio à instalação</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pressure Table */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Pressões Nominais</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-2">PN6 (6 bar)</div>
                    <div className="text-sm text-gray-600">Aplicações básicas</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-2">PN10 (10 bar)</div>
                    <div className="text-sm text-gray-600">Uso residencial</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-2">PN16 (16 bar)</div>
                    <div className="text-sm text-gray-600">Aplicações industriais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Especifique o tipo de instalação e diâmetros</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={quoteForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={quoteForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={quoteForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="quantity"
                  placeholder="Metragem total estimada"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Tipo de instalação (águas/esgotos), diâmetros necessários, acessórios..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
              </form>

              {/* Quick Guide */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Guia Rápido</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Águas: Ø16-25mm residencial</div>
                  <div>• Esgotos: Ø110mm mínimo</div>
                  <div>• Aquecimento: Multicamadas</div>
                  <div>• Proteção: Corrugado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TubagensPage;