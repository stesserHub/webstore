<template>
<div>

  <campaign-ribbon>
  50 % off summer collection
  </campaign-ribbon>

    <div>
      <h1>{{product.title}}</h1>
      <p>{{product.description}}</p>
      <p>{{product.price}}</p>
      <img :src="product.img" :alt="product.title">
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import CampaignRibbon from "@/components/CampaignRibbon";

export default {
  name: 'product',
  props: [
    '{{product.description}}'
  ],
  components: {
      "campaign-ribbon": CampaignRibbon
  },
    
  data () {
    return {
      product: ''
    }
  },
  created: function() {
    let id = this.$route.params.id;
    this.getProductById(id);
  },
  methods: {
    getProductById: function(id) {
      axios
      .get("/static/products.json")
      .then(response => {this.product = response.data.filter(product => product.id == id)[0]})
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>