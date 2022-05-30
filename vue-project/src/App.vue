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
    <router-link to="/childcomponent">Child Compn</router-link> , 
    <router-link to="/parentcomponent">Parent Compn</router-link> |
    <router-link to="/childcomponent5">Child Compn5</router-link> , 
    <router-link to="/parentcomponent5">Parent Compn5</router-link> |
    <router-link to="/slotmodallayout">Slot</router-link> , 
    <router-link to="/slotusemodallayout">Slot Use</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link> , 
    <router-link to="/provideinjectchild">ProvideInjectChild</router-link><br>

    <router-link to="/calcultest">Calculator</router-link> , 
    <router-link to="/compositionapi">CompsAPI</router-link> , 
    <router-link to="/compositionapi2">CompsAPI2</router-link> , 
    <router-link to="/compositionapi3">CompsAPI3</router-link> , 
    <router-link to="/compositionapi4">CompsAPI4</router-link> |
    <router-link to="/compositionapiprovide">CompsAPIProvide</router-link> , 
    <router-link to="/compositionapiinject">CompsAPIInject</router-link> |
    <router-link to="/mixins">Mixins</router-link> , 
    <router-link to="/component">MixinsCheck</router-link> | 
    <router-link to="/customdirective">CustomDirective</router-link> | 
    <router-link to="/pluginstest">Plugins</router-link><br>
    
    <router-link to="/StoreAccess">StoreAccess</router-link>
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
