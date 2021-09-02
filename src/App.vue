<template>
    <div id="app">
        <Navbar :open="openMenu" @close-menu="openMenu = false"></Navbar>
        <BurgerButton @Open-nav="openMenu = true"></BurgerButton>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import BurgerButton from "./components/BurgerButton";
import Footer from "./components/Footer.vue"

export default {
    components: {
        Navbar,
        BurgerButton,
        Footer
    },
    data (){
        return{
            openMenu: false,
        }
    },
}
</script>

<style lang="scss">
@import "scss/init";
</style>
