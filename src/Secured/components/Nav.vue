<template>
     
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">ACA</a>
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="javascript:void(0)" @click="Logout">Sign out</a>
    </li>
  </ul>
</header>

</template>

<script>
import { useRouter } from 'vue-router'

export default {
    name: 'Nav',
    

  setup(){
    const router = useRouter();
    
    const Logout = async () => {
      localStorage.clear();
      await router.push('/login')
    }

    return{
      Logout
    }
  }
}
</script>
