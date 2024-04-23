<script>
    import LogoDot from "./components/logo-dot.svelte";

</script>

<header class="full-width content-grid">
    <nav>
        <a href="/">
            <LogoDot/>
        </a>
        <menu>
            <a href="#">SERVICES</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">ABOUT</a>
            <a href="#">GET IN TOUCH</a>
        </menu>
    </nav>
</header>

<style lang="scss">
    header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1000;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;

        menu{
            display: flex;
            gap: 1rem;

            a{
                font-weight: 500;
                color: var(--clr-white);

                &:hover{
                    color: var(--clr-primary-600);
                }
            }
        }
    }
</style>