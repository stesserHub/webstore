<template>
  <div class="gallery-container">
    <ul class="product-gallery">
        <li v-for="product in products" :key="product.id">
          <collection-product :product="product"></collection-product>
        </li>
    </ul>
  </div>
</template>

<script>
import Collection_Product from '@/components/Collection_Product';
import axios from 'axios';

export default {
  name: 'Collection',
  components: {
    'collection-product': Collection_Product
  },
  data () {
    return {
      products: {}
    };
  },
  created: function() {
    this.getProducts()
  },
  methods: {
    getProducts: function() {
      axios
      .get("/static/products.json")
      .then(response => {this.products = response.data})
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>