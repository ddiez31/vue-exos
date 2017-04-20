var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        phrase: '<h1>Salut</h1>',
        show: true,
        list: [
            { message: 'Printemps' },
            { message: 'Eté' },
            { message: 'Automne' },
            { message: 'Hiver' }
        ],
        display: true,
        activeColor: 'red',
        fontSize: 36,
        isActive: true
    }
})