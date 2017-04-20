<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <input name="firstname" placeholder="Entrez votre prénom">
    <button v-on:click="hello">Valider</button>
  </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
                msg: 'About'
            }
        },
        methods: {
            hello: function() {
                const firstname = $('firstname').val()
                alert(firstname)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>