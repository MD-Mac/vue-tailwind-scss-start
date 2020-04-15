<template>
  <div id="app">
    <Nav />
    <transition
        name="fade"
        mode="out-in"
    >
    	<router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from "./components/Navigation/Nav";
export default {
    name: "App",

    components: {
        Nav
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.page {
	min-height: calc(100vh - 65px);
}
</style>
