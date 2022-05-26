<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/renderingvif">Rendering</router-link> |
    <router-link to="/eventvon">Event</router-link> |
    <router-link to="/computedtest">Computed</router-link> |
    <router-link to="/watchtest">Watch</router-link> |
    <router-link to="/databindinglist2">Table Data</router-link><br>
    <router-link to="/nestedcomponent">Component Data</router-link> |
    <router-link to="/childcomponent">Child Comp</router-link>&nbsp;
    <router-link to="/parentcomponent">Parent Comp</router-link> |
    <router-link to="/childcomponent5">Child Comp5</router-link>&nbsp;
    <router-link to="/parentcomponent5">Parent Comp5</router-link> |
    <router-link to="/slotmodallayout">Slot</router-link>&nbsp;
    <router-link to="/slotusemodallayout">Slot Use</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link>&nbsp;
    <router-link to="/provideinjectchild">ProvideInjectChild</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
