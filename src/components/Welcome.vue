<template>

    <dir class="welcome">
        <section class="main-bg">
            <div class="header">
                <div class="container">
                    <div id="heading" class="col flex-column">
                        <div class="row col-md-9 my-5">
                            <h1 class="mr-5-5">Zero</h1>
                            <h1 class="">Artium</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="quote" class="d-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="mb-4">Art should comfort the disturbed and disturb the comfortable.</h3>
                        <p class="text-uppercase text-muted mt-4">&mdash; Banksy</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="classic-selection" class="d-relative classic-selection-bg">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-md-8 text-center">
                    <h2 class="mb-4">Classic Selection</h2>
                    <p class="text-white">0920</p>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
                    <a href="" data-toggle="modal" data-target="#artModal" onclick="setImageData('One', 'img/ArtOne.jpg')">
                        <img class="img-fluid mb-4 " src="../assets/img/ArtOne.jpg" alt="Picture one">
                    </a>
                    <h3 class="mb-3">I</h3>
                    <p class="text-white px-4">fill in text</p>
                </div>
                <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
                    <a href="" data-toggle="modal" data-target="#artModal" onclick="setImageData('Two', 'img/ArtTwo.jpg')">
                        <img class="img-fluid mb-4 " src="../assets/img/ArtTwo.jpg" alt="Picture two">
                    </a>
                    <h3 class="mb-3">II</h3>
                    <p class="text-white px-4">fill in text</p>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
                    <a href="" data-toggle="modal" data-target="#artModal" onclick="setImageData('Three', 'img/ArtThree.jpg')">
                        <img class="img-fluid mb-4 " src="../assets/img/ArtThree.jpg" alt="Picture three">
                    </a>
                    <h3 class="mb-3">III</h3>
                    <p class="text-white px-4">fill in text</p>
                </div>
                <div class="col-md text-center mx-8 mx-md-0 mx-lg-3 mb-5 mb-md-auto">
                    <a href="" data-toggle="modal" data-target="#artModal" onclick="setImageData('Four', 'img/ArtFour.jpg')">
                        <img class="img-fluid mb-4 " src="../assets/img/ArtFour.jpg" alt="Picture four">
                    </a>
                    <h3 class="mb-3">IV</h3>
                    <p class="text-white px-4">fill in text</p>
                </div>
            </div>
        </div>
    </section>

    <section id="vision" class="d-relative">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3 class="">Vision</h3>
                    <p>
                        We present new Artists like Dani D that generate Art beyond the standards.
                        Shaped by their individual character and extravagant nature. Our Artists are free from any boundaries
                        and push them to new horizons. Therefore their work is highly unpredictive, uncontrolled and
                        reaches places far beyond the norm.<br>
                        <br>More than Art.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" class="testimonials-bg d-relative">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <h3 class="text-center mb-5">Our Artists</h3>
                    <h3 class="text-center mb-5">Text/Caroussel of all artists from zeroArtium</h3>
                </div>
            </div>
        </div>
    </section>
    </dir>

</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<style>
    .welcome {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgb(1, 19, 31);
    }

    .main-bg {
        background: url('../assets/img/OldRomanianTemple.jpg') 50% 0 fixed no-repeat;
        background-size: cover;
        height: 100vh;
    }

    h1 {
        font-size: 80px !important;
    }

    h2 {
        font-size: 60px !important;
    }

    h3 {
        font-size: 40px !important;
    }
</style>
