import { Link } from 'react-router-dom';
import {
  Upload, HardDrive, Link2, Shield, Zap, Settings,
  Monitor, Eye, MousePointer, List, Lock, Filter,
  ChevronRight, CheckCircle, Play
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-950 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-4 py-2 rounded-full mb-8">
            🌩 1TB de armazenamento gratuito
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Importe arquivos de{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              qualquer URL
            </span>{' '}
            diretamente para sua nuvem.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            1TB gratuito, integração com Dropbox e suporte a todos os formatos de vídeo.
          </p>
          <Link to="/sign-up" className="btn-primary text-lg px-8 py-4">
            Começar Grátis
            <ChevronRight className="w-5 h-5" />
          </Link>

          {/* Mock transfer card */}
          <div className="mt-16 max-w-lg mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-4 text-left">
            <div className="text-xs text-gray-500 mb-2">drive.imok.cloud/s/QKQKRfEekGZgjGjYckCKlbew</div>
            <div className="text-sm text-white mb-3">Transferindo arquivos...</div>
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>15 arquivos • 2.4 GB</span>
              <span>75% concluído • 45 MB/s</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recursos</h2>
          <p className="text-xl text-gray-400">Tudo que você precisa para gerenciar arquivos</p>
          <p className="text-gray-500 mt-2">Ferramentas poderosas para transferir, armazenar e organizar seus arquivos na nuvem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Upload, title: 'Transferência Remota', desc: 'Importe arquivos de qualquer URL diretamente para sua nuvem, sem baixar no seu dispositivo.' },
            { icon: HardDrive, title: '1TB de Armazenamento', desc: 'Comece com 1TB gratuito. Espaço suficiente para milhares de arquivos e vídeos.' },
            { icon: Link2, title: 'Integração Dropbox', desc: 'Conecte sua conta Dropbox e sincronize arquivos automaticamente entre as plataformas.' },
            { icon: Shield, title: 'Segurança Avançada', desc: 'Criptografia de ponta a ponta e proteção contra acesso não autorizado.' },
            { icon: Zap, title: 'Transferências Rápidas', desc: 'Servidores otimizados para velocidade máxima. Transfira gigabytes em minutos.' },
            { icon: Settings, title: 'Fácil Configuração', desc: 'Interface intuitiva. Cole a URL, escolha o destino e pronto. Simples assim.' },
          ].map((f) => (
            <div key={f.title} className="card hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browser Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Navegue e Capture Vídeos <span className="gradient-text">Automaticamente</span></h2>
            <p className="text-gray-400">Navegador integrado com detecção automática de vídeos. Encontre e baixe qualquer stream M3U8, HLS ou formato oculto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Eye, title: 'Detecção Automática', desc: 'Identifica M3U8, HLS e formatos ocultos automaticamente' },
              { icon: MousePointer, title: 'Captura com 1 Clique', desc: 'Transfere direto para sua nuvem pessoal' },
              { icon: List, title: 'Lista de Rastreamento', desc: 'Visualize todos os vídeos detectados organizados' },
              { icon: Lock, title: 'Navegação Segura', desc: 'Ambiente protegido com bloqueio de anúncios' },
              { icon: Filter, title: 'Filtros Inteligentes', desc: 'Filtre por qualidade, formato, tamanho e duração' },
              { icon: Monitor, title: 'Compatível', desc: 'Funciona com qualquer site de streaming' },
            ].map((f) => (
              <div key={f.title} className="card hover:border-gray-700 transition-colors">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold mb-1">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-2">Como Funciona</p>
          <h2 className="text-4xl font-bold mb-4">Três passos simples para começar</h2>
          <p className="text-gray-400">Transferir arquivos remotos nunca foi tão fácil. Configure em minutos e comece a usar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: '01', title: 'Cole a URL', desc: 'Copie o link do arquivo remoto que deseja transferir. Suportamos links de drives, servidores FTP, HTTP e muito mais.' },
            { num: '02', title: 'Escolha o Destino', desc: 'Selecione a pasta de destino na sua nuvem Cloudim ou conecte diretamente ao seu Dropbox.' },
            { num: '03', title: 'Pronto!', desc: 'O Cloudim transfere o arquivo diretamente para a nuvem. Sem downloads locais, sem espera.' },
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="text-6xl font-bold text-gray-800 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Player Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visualize qualquer vídeo <span className="gradient-text">direto na nuvem</span></h2>
              <p className="text-gray-400 mb-8">Player integrado com suporte completo a streaming M3U8 e HLS. Assista em qualquer dispositivo, sem downloads.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Qualidade até 8K', desc: 'Reprodução em ultra alta definição com qualidade adaptativa automática' },
                  { title: 'Player HTML5 Nativo', desc: 'Assista diretamente no navegador sem plugins ou downloads' },
                  { title: 'Zero Buffering', desc: 'Streaming otimizado com carregamento inteligente e pré-cache' },
                  { title: 'Legendas & Áudio', desc: 'Suporte a múltiplas faixas de áudio e legendas embutidas' },
                ].map((f) => (
                  <div key={f.title} className="card p-4">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card aspect-video flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-blue-400 ml-1" />
                </div>
                <p className="text-gray-500 text-sm">Streaming Adaptativo</p>
                <p className="text-xs text-gray-600 mt-1">+ mais de 50 formatos de vídeo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import from URL */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="card">
            <div className="text-xs text-green-400 mb-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Link Remoto Detectado — Pronto para transferir
            </div>
            <label className="block text-sm text-gray-400 mb-2">URL de Origem</label>
            <div className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-300 text-sm font-mono break-all">
              https://drive.imok.cloud/s/QKQKRfEekGZgjGjYckCKlbew
            </div>
            <Link to="/sign-up" className="btn-primary mt-4 w-full justify-center">
              Começar Transferência
            </Link>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Importe de <span className="gradient-text">qualquer URL</span></h2>
            <p className="text-gray-400 mb-8">Cole links de drives remotos como drive.imok.cloud, servidores FTP, ou qualquer URL pública. O Cloudim detecta automaticamente os arquivos e transfere direto para sua nuvem.</p>
            <div className="space-y-3">
              {[
                { title: 'Importação em Massa', desc: 'Transfira todos os arquivos de uma pasta remota de uma só vez' },
                { title: 'Conexão Segura', desc: 'Transferências via HTTPS com criptografia de ponta a ponta' },
                { title: 'Estrutura Preservada', desc: 'Mantém a organização de pastas do link original' },
                { title: 'Processo Automático', desc: 'Configure uma vez e deixe o Cloudim fazer o resto' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{f.title}</p>
                    <p className="text-gray-500 text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dropbox Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Conecte seu <span className="gradient-text">Dropbox</span></h2>
              <p className="text-gray-400 mb-8">Integração nativa com Dropbox. Transfira arquivos remotos diretamente para sua conta Dropbox ou sincronize pastas entre as duas plataformas automaticamente.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Sincronização automática bidirecional',
                  'Backup contínuo dos seus arquivos',
                  'Acesse de qualquer dispositivo',
                  'Compartilhamento simplificado',
                  'Histórico de versões mantido',
                  'Integração com apps Dropbox',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400 text-sm">Conectado e sincronizando</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'Sync Automático', desc: 'Alterações sincronizadas em tempo real' },
                  { title: 'Pastas Seletivas', desc: 'Escolha quais pastas sincronizar' },
                  { title: 'Compartilhamento', desc: 'Links compartilháveis instantâneos' },
                  { title: 'Histórico', desc: 'Recupere versões anteriores' },
                ].map((f) => (
                  <div key={f.title} className="bg-gray-800 rounded-xl p-3">
                    <p className="font-semibold text-sm mb-1">{f.title}</p>
                    <p className="text-gray-500 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para começar a transferir?
        </h2>
        <p className="text-gray-400 text-lg mb-4">Junte-se a milhares de usuários que já economizam tempo e espaço transferindo arquivos remotos diretamente para a nuvem.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            1TB de armazenamento gratuito
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Configuração em 2 minutos
          </div>
        </div>
        <Link to="/sign-up" className="btn-primary text-lg px-10 py-4">
          Criar Conta Grátis
          <ChevronRight className="w-5 h-5" />
        </Link>
        <p className="text-gray-600 text-sm mt-6 flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Seus dados estão seguros. Criptografia de ponta a ponta.
        </p>
      </section>

    </div>
  );
}
