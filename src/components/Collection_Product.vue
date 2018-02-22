<template>
  <div class="product">
     <div class="sale">
   sale
 </div>
    <img :src="product.img" :alt="product.title">
<div class="inspect">
  <ul>
    <li>
        <img src="http://via.placeholder.com/45x45" alt="Button">
        <figcaption>
          quick view
        </figcaption>
    </li>
    <li>
        <img src="http://via.placeholder.com/45x45" alt="Button">
        <figcaption>
          save
        </figcaption>
    </li>
  </ul>

</div>
      <h3>
        {{product.title}}
      </h3>
      <p>
        <b>
          ${{product.price}}
        </b>
      </p>
      <a href="#" class="add-to-bag">
        add to bag
      </a>
    
  </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>
