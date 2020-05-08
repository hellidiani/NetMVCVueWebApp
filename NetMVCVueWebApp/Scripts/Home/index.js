import Vue from 'vue';
import HomeComponent from './home.vue';
import ContactUsComponent from './contactus.vue';
import AboutUsComponent from './aboutus.vue';

new Vue({
    el: "#app",
    components: {
        HomeComponent,
        ContactUsComponent,
        AboutUsComponent
    }
})