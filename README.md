<section style="text-align: center">

# Anotações sobre Angular e sua utilização na prática! 

## Teoria

---

![imagem para teoria](https://live.mrf.io/statics/i/ps/amenteemaravilhosa.com.br/wp-content/uploads/2019/01/teoria-da-carga-cognitiva-john-sweller.jpg)

</section>


>O que é o **Angular**?
>É uma plataforma e um framework para construção da interface de aplicações usando HTML, CSS e JavaScript(através do TypeScript que é transpilado para JS).


---

A estrutura básica do Angular é dividido em:

- **Componentes** ⤵️ 


>São itens de página completo (ou seja, um arquivo HTML, um arquivo CSS e um arquivo TypeScript), criado automáticamente pelo Angular. E são criados a partir de linhas de comando pela palavra reservada ng


- **Templates**
- **Diretivas**
- **Metadata**
- **Roteamento**
- **Data Binding**
- **Serviços**
- **Injeção Dependência**

---

<section style="text-align: center">

## Prática (SPA)

![imagem para prática](https://cio.com.br/wp-content/uploads/2019/11/por-que-a-linguagem-rust-esta-em-ascensao.jpg)

#### Criando um arquivo

</section>
<br>

Para **criar** um arquivo angular, basta entrar com a seguinte linha de comando no teminal:

➡️ *ng new* [nome do arquivo a ser criado]

>aparecerá a seguinte pergunta: Would you like to add Angular rounting? Sempre responda sim [y], pois isso irá criar as rotas na sua aplicação. E em seguida perguntará: Which stylesheet format would you like to use? responda CSS, pois essa é a a folha de estilo que utilizamos.

---
<section style="text-align: center">

#### Entendendo o arquivo gerado

</section>

Após o sistema processar e gerar o arquivo, aparececá uma pasta com o nome que foi definido e nela irá conter diveras outras pastas e arquivos, em especial, a src. Basicamente, é nela que toda a plicação será rodada e configurada.
Tanto o arquivo **index.html** e o **styles.css** que lá se encontram são globais, ou seja, tudo o que for colocado lá dentro será passado para toda a aplicação.
No **index.html** existe uma *tag*:

~~~
<body>
    <app-root><app-root>
</body>
~~~

Que não existe no HTML, e sim foi criada pelo Angular pois todo <em>**novo**</em> componente do Angular recebe o nome de uma *tag*, ou seja, esse \<app-root>\</app-root> é um componente.

<br>
<section style="text-align: center">

#### Subindo o servidor local da aplicação

</section>
<br>

Para **subir/ativar** o servidor da aplicação, basta rodar as seguintes linhas de comando:
<small><em>Obs: Lembrando sempre de, no terminal, estar dentro do arquivo criado</em></small>

~~~
ng serve -o
~~~

<br>
<section style="text-align: center">

#### Criando um componente

</section>
<br>

Para **criar** um componente, basta rodar as seguintes linhas de comando:

~~~
ng generate component [nome do componente]
~~~
<small><em>Dica: O comando curto é ➡ ng g c [nome do componente].</em></small>

E para desenvolvermos uma SPA, criaremos dois componentes, que no caso são: navbar e footer.

<br>
<section style="text-align: center">

#### Instalando e configurando o Bootstrap no projeto

</section>
<br>

Para **instalar** o Bootstrap no projeto basta rodarmos as seguintes linhas de códigos:

~~~
npm i bootstrap@4.1.1
~~~

Ao fazermos uso do Bootstrap, é **necessário** que façamos a instalação de outras aplicações que o auxiliam, até o momento. São elas, **Popper** e **Jquery**, e para instalarmos basta rodarmos as seguintes linhas de código:

~~~
npm i jquery@latest --save
npm i popper.js --save
~~~
<small><em>Obs: O termo (--save) significa que estamos pedindo para que salvem essa aplicação no projeto</em></small>

Após a instalação, é necessário a aconfiguração para a execução do Bootstrap no projeto. Para isso, basta entrar no arquivo **angular.json**, ir até a propriedade *styles* e acrescentar o caminho da página de estilo do Bootstrap, que no caso é ➡ "./node_modules/bootstrap/dist/css/bootstrap.min.css". Em seguida, encaminhar-se até a propriedade *scripts* e acrescentar os caminhos das aplicações que auxiliam na execução do Bootstrap, e que no caso seriam:

➡️"./node_modules/jquery/dist/jquery.js"

➡️"./node_modules/bootstrap/dist/js/bootstrap.js"

➡️"./node_modules/popper.js/dist/umd/popper.min.js"

<br>
<section style="text-align: center">

#### Instalando e configurando o Font-Awesome

</section>
<br>

O Font-Awesome é uma biblioteca de icones, e para **instalar** basta rodar as seguintes linhas de códigos:

~~~
ng add @fortawesome/angular-fontawesome
~~~

Após instalar, caso seja preciso fazer uso dos ícones, basta **importá-los** no arquivo TypeScript do componente e depois exportá-los. Em seguida, no HTML é necessário que seja feito uma interpolação para que se possa usar os ícones, nesse caso através da tag icon e fazendo uso de props. exemplo:

~~~
<fa-icon [icon]=[variavel que contêm a importação do ícone]></fa-icon>
~~~

<small><em>Para exportá-los é necessário atribuí-los a uma variavel, por exemplo: faInstagram = faInstagram</em></small>

<br>
<section style="text-align: center">

#### Funcionamento dos componentes criados

</section>
<br>

Para que os componentes realmente sejam mostrados e executados em tela, é necessário que sejam informados no arquivo **app.component.html**, já que ele é o nosso HMTL global e é através dele que executaremos nossa aplicação. Isso serve para o *CSS* também, já que que o arquivo **app.component.css** se refere ao CSS global da aplicação. 

>Afinal de contas, o arquivo que o servidor buscará assim que solicitado é o **index.html**, onde há o componente **\<app-root>\</app-root>** e é nesse componente que se encontra o *app.component.html* e os outros códigos que serão executados para toda a aplicação.

Para que os componentes criados realmente sejam executados, precisamos informá-los no *app.component.html* através de seu seletores (que são as tag a que foram atríbuidos), que por padrão sempre será:

~~~
 <app-[nome do componente criado]></app-[nome do componente criado]>
~~~

<em>No caso da SPA, iremos informar as tags do navbar e do footer.</em>

<br>
<section style="text-align: center">

#### Entendendo e implementando as rotas da aplicação

</section>
<br>

Para implementarmos rotas dentro da aplicação, é necessário irmos até o arquivo **app-routing.modules.ts** e dentro desse arquivo encontraremos uma constante *routes*, que por padrão do Angular já vem com um array de um módulo chamado <em>**Routes**</em>, e é nesse array que iremos implementar os objetos de rotas, através dos comando: 

~~~
{ path: '[nome do ambiente]', component: [nome do componente para onde se quer redirecionar]  }
~~~

<small><em>OBS: Path é onde definimos uma variavel de ambiente, ou seja, um endereço/local.</em></small>

Para setar uma variavel de ambiente como sendo a "página inicial" quando entrarem em sua aplicação, basta informar:

~~~
{ path: '', redirectTo: '[nome do path que deseja ser a "página inicial"]', pathMatch: 'full' }
~~~

Para que as rotas sejam ativadas e que realmente nos tragam os componentes que pedimos, precisamos informar lá no **arquivo app.component.html** entre as tags de *navbar* e *footer*, uma tag própria do angular que será responsável por essa ativação de rotas, e ela é:

~~~
<router-outlet></router-outlet>
~~~
<small><em>Fundamental para o dinâmismo do SPA</em></small>

Após isso as rotas estarão ativadas, entretanto, somente quando informarmos lá na URL o endereço da rota e não atráves do *navbar*. Para solucionarmos isso, basta encaminhar-se até o arquivo **navbar.component.html** e lá nos itens do navbar nas tags de link \<a>\</a> retiramos os href="#" e informamos:

~~~
routerLink='/[nome do path criado]'
~~~


---

<small>**O USO DE "[]", COM QUAISQUER COMENTÁRIOS DENTRO, NÃO FAZ PARTE DA INSTRUÇÃO DOS CÓDIGOS, SALVO AQUELE QUE POSSUI *[icon]*. SENDO ASSIM, DEVEM SER SUBSTÍTUIDOS PELA FINALIDADE DO USUÁRIO.**</small>