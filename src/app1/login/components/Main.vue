<template>
<div class="col-md-6">
<loginCampos />
</div>
</template>

<script>
import loginCampos from '../form/loginCampos.vue'

export default{
  name: 'Main',

  components: {
    loginCampos
  }
}
</script>
