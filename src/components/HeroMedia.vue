<template>

<div>

    <p>
        {{logo}}
    </p>
    <p>
        {{menu}}
    </p>
  <p>Inside template</p>
  <slot></slot>

</div>

</template>

<script>

export default {
  name:"hero-media",
  props: [
      "logo",
      "menu"
  ]
}
</script>
