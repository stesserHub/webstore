<template>
  <div class="meme">
    
<p>
  a
</p>

<form action="post">

<input type="text">

</form>

    <!-- <form @submit.prevent="submitForm" novalidate v-if="!isSubmitted">
     
      <div>
        <label for="email">Email</label>
        <input type="email" v-model.lazy="form.email" id="email" v-validate="'required'" name="email">
        <span v-show="errors.has('email')" class="help is-danger"> {{errors.first('email')}} </span>
      </div>

      <button type="submit" :disabled="errors.any()">Submit</button>

    </form>
    <div v-else>
      Thanks for submitting!
    </div> -->


  </div>
</template>


<script>
export default {
  name: 'email-form',
  data () {
    return {
      form: {
        email: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    submitForm: function() {
      this.isSubmitted = true;
      this.form = null;
    }
  }
}
</script>