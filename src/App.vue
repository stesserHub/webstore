<template>
<div>

<vue-header>

</vue-header>



<!-- <hero-media logo="meee" menu="supreme">
  thang
</hero-media> -->

<router-view class="article">
  
</router-view>

<!-- <email-form>
  
</email-form> -->


<!-- <campaign>
  
</campaign>

<testimonial name="Kebab">

</testimonial>-->

<vue-footer msg="get us on">
  
</vue-footer>

  </div>
</template>

<script>

import Header from "@/components/Header";
import HeroMedia from "@/components/HeroMedia";

import Campaign  from "@/components/Campaign";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

import EmailForm from '@/components/EmailForm'

export default {
  
  name: 'App',
  components: {
    "vue-header": Header,
    "hero-media": HeroMedia,
    "email-form": EmailForm,
    "campaign": Campaign,
    "testimonial": Testimonial,
    "vue-footer": Footer 
  }
}
</script>

<style lang="scss">
@import "./assets/style/Global.scss";
</style>
