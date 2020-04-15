<template>
    <nav id="navbar" class="py-5 px-10 bg-white dark:bg-black">
        <div class="nav-items">
            <router-link to="/">Homepage</router-link>
            <router-link to="/about">About Us</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style lang="scss" scoped>
    nav {
        border-bottom: 1px solid #000;

        a {
            margin: 0 1rem;
        }
    }
</style>
