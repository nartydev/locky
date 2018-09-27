<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Locky - </title>
	<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,200i,300,400,500,600,700,800,900" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css?d=<?php echo rand(0,10000000000000000) ?>">
</head>
<body>
    <?php require('./header.php') ?>
    <div class="cursor"></div>
    <nav>
        <div class="group-link">
            <div class="round">
                <div class="overflow">
                    <span>Locky</span>
                </div>
            </div>
        </div>
        <div class="group-link">
            <div class="round">
                <div class="overflow">
                    <span>The key</span>
                </div>
            </div>
        </div>
        <div class="group-link">
            <div class="round">
                <div class="overflow">
                    <span>The app</span>
                </div>
            </div>
        </div>
        <div class="group-link">
            <div class="round">
                <div class="overflow">
                    <span>Team</span>
                </div>
            </div>
        </div>
    </nav>
    <!-- Home -->
    <section class="anchor-nav home" id="home">
        <div class="container-home">
            <div class="left">
                <h1 class="title"><div> Smart your key, </div> </h1>
                <h1 class="title"><div >Instead of lock </div></h1>
                <p class="description">
                    Locky is the middle ground between smart locks and key trackers, combining the best features of both. You don’t need to replace your lock and virtualize the key (which makes it hack-able) to check the door status anytime and anywhere, or to get unlocked door notifications. Locky is just a minimalist key overlay, but it tracks your key usage and sends the data to a dedicated mobile app, keeping you in control 24 hours a day. This is the world’s simplest home security system. Never again will you forget to close your door, nor will you lose your keys, thanks to the key finder function.
                </p>
                <div class="button"><a href="" target="_blank">Pre-order</a></div>
            </div>
            <div data-tilt>
                <img src="./assets/img/key.png" alt="Key" class="key-img" />
            </div>
        </div>
    </section>
    
    <!-- Features of key -->
    <section class="key key-spec anchor-nav" id="key">
        <div class="title-key">
            <h2>Key</h2>
        </div>
        <div class="content-anim">
            <div class="img-key-feature">
                <img src="./assets/img/key.png" class="key-feature"/>
                <div class="pulse"></div>
            </div>
            <div class="feature-key-1">
                <div class="container-anim">
                    <div class="anim-right" id="anim-right-1">
                        <h1 class="white"><div>Locate your keys anytime you need them </div></h1>
                        <p class="white">According to statistics, keys are the third most commonly lost item, and first most difficult to find. With Locky, finding them takes only a matter of seconds, because the overlay is always on your key, working as a key tracker.</p>
                    </div>
                </div>
                <div class="container-anim" id="container-anim-1">
                    <div class="anim-right" id="anim-right-2">
                        <div class="txt-center">
                            <p class="white">If you lost your key, you can buzz them !</p>
                            <img src="./assets/img/blackapp.svg" style="width:50%;"/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Additional aspect -->
    <section class="detail black-bg">
        <h1 class="white title txt-center marge-title">Technical detail</h1>
        <div class="content-center">
            <img src="./assets/img/detail/key.png" alt="key" class="detail-key"/>
            <img src="./assets/img/detail/top.png" alt="top" class="detail-top"/>
            <img src="./assets/img/detail/material.png" alt="material" class="detail-material"/>
            <img src="./assets/img/detail/component.png" alt="component" class="detail-component"/>
            <div class="detail-pulse" id="detail-key"></div>
            <div class="detail-pulse" id="detail-component-1"></div>
            <div class="detail-pulse" id="detail-component-2"></div>
            <div class="detail-pulse" id="detail-component-3"></div>
            <div class="detail-pulse" id="detail-material"></div>
        </div>
    </section>
    <!-- Features of app -->
    <section class="app white-bg anchor-nav" id="app">
        <h1 class="title txt-center marge-title">The app</h1>

    </section>
    <!-- Team -->
    <section class="app black-bg anchor-nav" id="">
        <h1 class="title txt-center marge-title">The team</h1>

    </section>
    <footer>
        lol
    </footer>
    <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
    <script src="https://unpkg.com/tilt.js@1.2.1/dest/tilt.jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
    <script src="./assets/js/app.js"></script>
</body>