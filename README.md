<h2>📃 Sobre o DevNews:</h2>
- Aplicação web (front-end) denominado "DevNews". Foi utilizado o NextJS junto com o ReactJS para desenvolver uma plataforma de conteúdo de tecnologia com pagamento de assinatura mensal integrado com o meio de pagamento Stripe.
<br><br>
<!-- <img src="src/assets/devnews_reactjs.jpg" alt="Aplicação web desenvolvida com ReactJS e NextJS" />
<br><br> -->
<h2>⚙️ Tecnologias & Ferramentas:</h2>
<ul>
<li><strong>React JS:</strong> Biblioteca JavaScript utilizada para construir interfaces de usuário para sistemas web.</li>
<li><strong>Next JS:</strong> Framework moderno de javascript que está se popularizando por ser um novo jeito de indexar conteúdos nos motores de buscas e por rodar em uma camada server e não no client (back-end no front-end).</li>
<li><strong>Stripe:</strong> Gateway de pagamento que atua como um intermediário entre os comerciantes e as redes de cartão de crédito/instituições financeiras apropriadas para autorizar e aceitar pagamentos e transações online.</li>
<li><strong>Prismic CMS:</strong> Plataforma de gerenciamento de conteúdo online que fornece um back-end do CMS para sites. Sua abordagem baseada em API concentra-se na liberdade de design e tecnologia para desenvolvedores.</li><br>
<li>

<h2>O que o <strong>NextJS</strong> ajuda no front-end?</h2>
Todos nós que somos programadores, sabemos que o ReactJS foi criado para rodar do lado do browser (Client) e carregar a página para o usuário. Porém, neste modo de SPA, enfrentamos alguns problemas, como por exemplo:<br>
<strong>01 -</strong> Ao darmos um inspecionar, o browser interpreta o código JS à partir de um seletor "#root" e não direto no código-fonte;<br>
<strong>02 -</strong> Os buscadores ignoram o conteúdo da páginae não identificam o que está carregando da página que vem da div '#root';<br>
<strong>03 -</strong> Demanda mais processamento ao acessar a aplicação, principalmente em celulares com versões mais antigas.<br><br>

<h2>Como resolvemos esses problemas?</h2>
É aqui que mora o "pulo do gato"! Ao usarmos o NextJS para construir nossas aplicações, ele envia todo o conteúdo normalmente para o browser e a renderização fica na camada do servidor (via NodeJS), sendo assim:<br>
- As páginas são pré-carregadas para não gastar muito processamento;<br>
- A experiência do usuário ao compararmos com o ReactJS como SPA fica muita mais rápida;<br>
- Os buscadores conseguem achar e interpretar todo o conteúdo da aplicação comod everia ser;<br>
</li>
<li>
<h2>Visão geral do <strong>NextJS:</strong></h2>
- Agiliza o processo de construção de uma aplicação ReactJS oferecendo rotas automáticas, suporte a funcionalidades híbridas de SSR e SSG, suporte a Typescript, webpack já configurado e transpilação de ES6/ES7.<br>
- Não precisa de uma configuração manual das ferramentas como o Fast Refresh, Hot Code Reloading e o Code Splitting que já vem tudo configurado por padrão.<br><br>
</li>
<li>
<h2>Conceitos do <strong>Next JS</strong> de forma simples:</h2>
<strong>1 - Server Side Rendering (SSR):</strong> Quando precisamos mostrar dados e informações dinâmicas em tempo real no HTML. Com o SSR, antes desse conteúdo chegar ao usuário, ele será renderizado pelo NodeJS (server) e as informações do arquivo serão reconhecidas instantaneamente pelo Google ou outros motores de busca.<br>
<strong>2 - Static Site Generation (SSG):</strong> Quando precisamos gerar o HTML de uma página no lado do servidor e renderizar para vários usuários que estão acessando a aplicação. Em outras palavras, renderiza a página do lado do servidor a cada request já trazendo os conteúdos (html, css, javascript) todo pronto para um melhor SEO do site.<br>
<strong>3 - File System Routes:</strong> Por padrão, usa-se um roteamento baseado em sistema de arquivos para as rotas na aplicação, que permite criar arquivos e pastas dentro do '/pages/'.<br>
<strong>4 - API Routes:</strong> Utilizamos rotas automáticas pelo lado da API ao inserirmos arquivos dentro da pasta '/pages/api/'.
</li>
<br><br>
<pre>
<h2>🚀 Baixando aplicação:</h2><span class="pl-c"><span class="pl-c">#</span> Clone o projeto à partir do meu repositório GitHub:</span>
$ git clone https://github.com/josethiagodev/ignite_chapter3_backend_no_frontend<br>
<span class="pl-c"><span class="pl-c">#</span> Entre no diretório via terminal:</span>
$ <span class="pl-c1">cd</span> ignite_chapter3_backend_no_frontend
<span class="pl-c"><span class="pl-c">#</span> Para abrir o projeto no terminal, use o comando:</span>
$ <span class="pl-c1">code .</span>
<br>
<h2>🚀 Iniciando a aplicação:</h2><span class="pl-c">#</span> Instale todas as dependências do projeto com o seguinte comando via terminal:</span>
$ yarn
<span>
<span class="pl-c">#</span> Inicie a aplicação usando o seguinte comando no terminal:</span>
$ yarn dev<br>
# Se caso a aplicação não abrir automáticamente, copie e cole o link abaixo em qualquer navegador:<br>$ http://localhost:3000<br>
<h2>🚀 Rodando os webhook events do Stripe:</h2><span class="pl-c">#</span> Rode os seguintes comando em outro terminal:</span><br>
# 01 - Ouvindo e listando os eventos
$ stripe listen<br>
# 02 - Encaminhar eventos recebidos p/ o servidor
$ stripe listen --forward-to localhost:3000/api/webhooks<br>
# 03 - Acesse a aplicação, faça login via Github e faça um pagamento via Stripe
$ http://localhost:3000
</pre>
<span><strong>Observações:<strong> Se você for testar essa aplicação e enfrentar qualquer dificuldade ou tiver alguma dúvida, basta entrar em contato comigo pelo email "josethiagowd@gmail.com".</span>