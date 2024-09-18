<script lang="ts">
    import HomeBanner from "$lib/components/home-banner.svelte";
    import Sphere from "$lib/components/sphere.svelte";
</script>

<Sphere/>

<section class="full-width content-grid">
    <h2 class="large-header">DESIGN YOUR <br>BRAND</h2>
    <div class="cards-grid">
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
    </div>
</section>

<section class="full-width content-grid">
    <h2 class="large-header">CREATE AND<br>AUTOMATE YOUR<br>SYSTEM</h2>
    <div class="cards-grid">
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
    </div>
</section>

<section class="full-width content-grid margin-y">
    <div class="work-grid">
        <header>
            <h2 class="large-header">TOP<br>WORK</h2>
        </header>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <div class="card">
            <img src="/images/try.jpeg" alt="">
        </div>
        <footer>
            <a href="/portfolio" class="large-link glitch">PORTFOLIO</a>
        </footer>
    </div>
</section>

<section class="full-width content-grid margin-y">
    <div class="feedback-grid">
        <h2 class="large-header left">FEED<br>BACK</h2>
        <div class="content-container">
            <div class="card">
                <p class="feedback">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consequuntur voluptatum vel voluptas aspernatur, nesciunt nobis deserunt laborum velit veritatis. Assumenda consequatur reiciendis, corrupti nam commodi nostrum beatae! Aliquid, ipsam!
                </p>
                <span class="name">John Doe</span>
            </div>
        </div>
    </div>
</section>

<section class="full-width content-grid call-to-action">
    <h2 class="large-header">Interested?</h2>
    <p class="large-header">Get in touch with us</p>
    <a href="#" class="button">Contact Options</a>
</section>


<style lang="scss">
    section {
        margin-bottom: 10rem;

        &.margin-y{
            margin: 10rem 0;
        }
    }
    .cards-grid{
        display: grid;
        grid-template-columns: 1fr 1.2fr 1.6fr 1.2fr 1fr;
        gap: 4rem;
        width: 100%;
        place-items: center;
        justify-content: center;
        
        .card {
            width: 100%;
            // height: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 1rem;
            overflow: hidden;
            transform-origin: center;
            transition: width .25s cubic-bezier(0.075, 0.82, 0.165, 1);
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:last-child, &:first-child {
                transform: translateY(-160%);
            }
            
            &:nth-child(2), &:nth-child(4) {
                transform: translateY(-60%);
            }

            &:hover {
                width: 125%;
            }
        }
    }

    .work-grid {
        display: grid;
        gap: 4rem;
        width: 100%;
        place-content: center;
        
        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(auto-fill, 1fr);
            text-align: left;
        }

        .large-header{
            margin: 0;
        }

        .card {
            width: 100%;
            // height: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 1rem;
            overflow: hidden;
            grid-row: span 2;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        footer{
            display: grid;
            place-content: center;
            padding: 2rem 0;

            .large-link{
                font-size: clamp(2rem, 5vw, 5rem);
                font-weight: 800;
                color: var(--clr-white);
            }
        }
    }

    .feedback-grid{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 4rem;

        .content-container{
            .card{
                padding: 2.8rem;
                background-color: var(--clr-dark-900);
                border-radius: 1rem;

                .feedback{
                    font-size: 1.4rem;
                }

                .name{
                    font-style: italic;
                    font-weight: 600;
                    &::before{
                        content: "~ ";
                    }
                }
            }
        }
    }

    .call-to-action{
        display: grid;
        place-content: center;
        place-items: center;
        
        .large-header{
            margin: 0;

            &:first-child{
                background: linear-gradient(to right, var(--clr-primary-600), blue);
                background-clip: text;
                color: transparent;
            }
        }
    }
</style>