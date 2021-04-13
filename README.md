<h2>📃 Sobre o DevNews:</h2>
- Aplicação web (front-end) denominado "DevNews". Foi utilizado o NextJS junto com o ReactJS para desenvolver uma plataforma de conteúdo de tecnologia com pagamento de assinatura mensal integrado com o meio de pagamento Stripe.
<br><br>
<!-- <img src="src/assets/devnews_reactjs.jpg" alt="Aplicação web desenvolvida com ReactJS e NextJS" />
<br><br> -->
<h2>⚙️ Tecnologias & Ferramentas:</h2>
<ul>
<li><strong>React JS:</strong> É uma biblioteca (librarie) javaScript utilizada para construir interfaces de usuário para sistemas web.</li>
<li><strong>Next JS:</strong> É um framework moderno de javascript que está se popularizando por ser um novo jeito de indexar conteúdos nos motores de buscas e por rodar em uma camada server e não no client (back-end no front-end).</li>
<li><strong>Stripe:</strong> É um gateway de pagamento que atua como um intermediário entre os comerciantes e as redes de cartão de crédito/instituições financeiras apropriadas para autorizar e aceitar pagamentos/transações online.</li>
<li>
<h2>O que o <strong>NextJS</strong> faz no front-end?</h2>
O ReactJS foi feito para rodar do lado do browser do usuário (Client) e carregar todo o código Javascript enquanto o usuário acessa a aplicação. Com isso demanda mais processamento, principalmente em celulares mais antigos. Já ao usarmos o NextJS, temos suporte para cerregar e renderizar o HTML do lado do servidor NodeJS, não gastando muito processamento no primeiro carregamento das páginas.
</li><br>
<li>
<h2>Visão geral do <strong>NextJS:</strong></h2>
- Agiliza o processo de construção de uma aplicação ReactJS oferecendo rotas automáticas, suporte a funcionalidades híbridas de SSR e SSG, suporte a Typescript, webpack já configurado e transpilação de ES6/ES7.<br>
- Não precisa de uma configuração manual das ferramentas como o Fast Refresh, Hot Code Reloading e o Code Splitting que já vem tudo configurado por padrão.<br><br>
</li>
<li>
<h2>Conceitos do <strong>Next JS</strong> de forma simples:</h2>
<strong>1 - Server Side Rendering (SSR):</strong> Quando precisamos mostrar dados e informações dinâmicas em tempo real no HTML. Com o SSR, antes desse conteúdo chegar ao usuário, ele será renderizado pelo NodeJS (server) e as informações do arquivo serão reconhecidas instantaneamente pelo Google ou outros motores de busca.<br>
<strong>2 - Static Site Generation (SSG):</strong> Quando precisamos gerar o HTML de uma página no lado do servidor e renderizar para vários usuários que estão acessando a aplicação. Em outras palavras, renderiza a página do lado do servidor a cada request já trazendo os conteúdos (html, css, javascript) todo pronto para um melhor SEO do site.<br>
<strong>3 - File System Routes:</strong> Por padrão, o NextJS usa um rotas automáticas pelo 'client' ao inserirmos arquivos dentro da pasta '/pages'. No conceito tradicional de SPA (Single Page Application) no ReactJS, não temos isso, precisamos fazer rotas manualmente.<br>
<strong>4 - API Routes:</strong> Utilizamos rotas automaticas pelo lado da API ao inserirmos arquivos dentro da pasta '/pages/api/'.
</li>
<br><br>
<pre>
<h2>🚀 Baixando aplicação:</h2><span class="pl-c"><span class="pl-c">#</span> Clone o projeto à partir do meu repositório GitHub:</span>
$ git clone https://github.com/josethiagodev/ignite_chapter3_fundamentos_nextjs.git<br>
<span class="pl-c"><span class="pl-c">#</span> Entre no diretório via terminal:</span>
$ <span class="pl-c1">cd</span> ignite_chapter3_fundamentos_nextjs
<span class="pl-c"><span class="pl-c">#</span> Para abrir o projeto no terminal, use o comando:</span>
$ <span class="pl-c1">code .</span>
<br>
<h2>🚀 Iniciando a aplicação:</h2><span class="pl-c">#</span> Instale todas as dependências do projeto com o seguinte comando via terminal:</span>
$ yarn
<span>
<span class="pl-c">#</span> Inicie a aplicação usando o seguinte comando no terminal:</span>
$ yarn dev<br>
# Se caso a aplicação não abrir automáticamente, copie e cole o link abaixo em qualquer navegador:<br>$ http://localhost:3000<br>
# Pronto, agora é só testar!
</pre>