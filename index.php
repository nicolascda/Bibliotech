<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="./img/Logo.png">
        <link rel="stylesheet" href="./CSS/style.css">
        <link rel="stylesheet" href="./CSS/footer.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
        <title>Bibliotech</title>
    </head>

    <body>
        <header>

            <div class="LogoDiv">
                <img class="HeaderImg" src="./img/Logo.png">
                <h2 class="Logo">Bibliotech</h2>
            </div>
            
            <!-- <div class="HeaderTextDiv">
                <a href="#" class="HeaderText"> Quem somos</a>
                <a href="logado.html" class="HeaderText"> Nosso Acervo</a>
                <a class="HeaderText" href="login.html">Login</a>
            </div> -->

            <a href="QuemSomos.html" class="HeaderText HeaderTextGrid1"> Quem somos</a>
            <a href="logado.html" class="HeaderText HeaderTextGrid2"> Nosso Acervo</a>
            <a class="HeaderText HeaderTextGrid3" href="login.html">Login</a>

            <input type="text" class="HeaderInput HeaderSearchButton" placeholder="Pesquisar"></input>

            
        </header>

        <main>
            <section class="MainSection">
                <img class="MainImg" src="./img/Mulher.png">
                <!-- <div class="MainImg ImgDivChange" id="view"> -->

                </div>

                <div class="MainGroupFirst">
                    <h2 class="MainTitleText">Bem vindo a Bibliotech!</h2>
                    <h3 class="MainText">O Bibliotech é um site especializado na experiência do usuário, uma biblioteca virtual, que facilita o acesso a reserva de livros mesmo a uma longa distância, se junte a nossa jornada</h3>

                </div>

                <button type="button" class="MainButton"><a class="LinkBotao"href="./logado.html"> Acessar</a></button>
                
            </section>

            <section class="MainSecondSection"> 
                <h1 class="Main_S_Text"> Porque usar o Bibliotech?</h1>

                <div class="CardsContainer">

        <div class="Card">
            <div class="CardIcon Lista"></div>
            <p class="CardText">Vizualize se seus livros estão disponíveis</p>
        </div>

        <div class="Card">
            <div class="CardIcon Coracao"></div>
            <p class="CardText">Favorite seus livros</p>
        </div>

        <div class="Card">
            <div class="CardIcon Livro"></div>
            <p class="CardText">Vizualize se seus livros estão disponíveis</p>
        </div>

            </section>
            
            
            <section class="MainThirdSection">
                
                <h2 class="ThirdTitleText">Totalmente Grátis</h2>

                
                <div class="MainThirdSectionDiv">
                    <h2 class="MainThirdTitleText">Acesse a nossa plataforma</h2>
                    <h3 class="MainText">Faça login ou solicite cadastro para a bibliotecário</h3>

                    <button type="button" class="ThirdMainButton"><a class="LinkBotao"href="./login.html"> Acessar</a></button>

                </div>
                
            </section>

            <br>

            <section>

                <h1 class="Main_S_Text"> Porque usar o Bibliotech?</h1>

                <br> 


                <div class="carousel"
                data-flickity='{ "wrapAround": true , "initialIndex": 2, "adaptiveHeight": true}'>
                    <div class="carousel-cell">
                        <div class="CarouselDiv">
                            <img class="CarouselImg" src="/img/FnafIntoThePit.jpg">

                            <hgroup class="HgroupCarousel">
                                <!-- <h2 class="CarouselTitle"> Five Nights at Freddy's Into the Pit</h2> -->
                                <h4 class="CarouselText"> Scott Cawthon</h4>
                            </hgroup>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="CarouselDiv">
                            <img class="CarouselImg" src="/img/GuerraDosTronos.jpg">

                            <hgroup class="HgroupCarousel">
                                <!-- <h2 class="CarouselTitle"> Guerra dos Tronos</h2> -->
                                <h4 class="CarouselText"> George R. R. Martin</h4>
                            </hgroup>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="CarouselDiv">
                            <img class="CarouselImg" src="/img/SenhorDosAneis.jpg">

                            <hgroup class="HgroupCarousel">
                                <!-- <h2 class="CarouselTitle"> Senhor dos Anéis</h2> -->
                                <h4 class="CarouselText"> J.R.R Tolkien</h4>
                            </hgroup>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="CarouselDiv">
                            <img class="CarouselImg" src="/img/OAlquimista.jpg">

                            <hgroup class="HgroupCarousel">
                                <!-- <h2 class="CarouselTitle"> O Alquimista</h2> -->
                                <h4 class="CarouselText"> Paulo Coelho</h4>
                            </hgroup>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="CarouselDiv">
                            <img class="CarouselImg" src="/img/OGuiaDoMochileiroDasGalaxias.jpg">

                            <hgroup class="HgroupCarousel">
                                <!-- <h2 class="CarouselTitle"> O Guia do Mochileiro das Galáxias</h2> -->
                                <h4 class="CarouselText"> Douglas Adam</h4>
                            </hgroup>
                        </div>
                    </div>

                </div>

            </section>
        </main>

        <br>

        <footer class="Footer">
            <div class="FooterDivTitle">
                <img class="FooterImg" src="./img/Logo.png">
                <h2 class="FooterTitle">Bibliotech</h2>
            </div>

            <img class="SenaiFooter" src="./img/SENAI.png">

            <hgroup class="HgroupBiblioteca">
                <h2 class="HgroupTitle"> Biblioteca</h2>
                <h3 class="HgroupText"> Baixar Aplicativo</h3>
                <h3 class="HgroupText"> Suporte ao usuário</h3>
            </hgroup>

            <hgroup class="HgroupQuemSomos">
                <h2 class="HgroupTitle"> Quem somos</h2>
                <h3 class="HgroupText"> Clientes</h3>
                <h3 class="HgroupText"> Benefícios</h3>
            </hgroup>

            <div class="DivAcesseNossasRedes">
                <h2 class="HgroupTitle">Acesse nossas redes</h2>
                <img class="FooterIcon" src="./img/Facebook.png">
                <img class="FooterIcon" src="./img/Linkedin.png">
                <img class="FooterIcon" src="./img/Instagram.png">
            </div>
            
        </footer>
            

        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        <!-- <script src="/js/carousel.js"></script> -->
    </body>
</html>