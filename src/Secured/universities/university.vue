<template>    
     <div class="divMargin">
        <div class="btn-toobar mb-2 mb-md-0">
        <router-link to="/universities/new" class="btn btn-outline-primary">Add University</router-link>
      </div><br>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>University Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th>Website</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="university in universities" :key="university.id">
              <td>{{university.universityName}}</td>
              <td>{{university.phone}}</td>
              <td>{{university.email}}</td>
              <td>{{university.country}}</td>
              <td>{{university.Website}}</td>
              <td>{{university.address}}</td>
              <td>
                  <router-link :to="`/universities/${university.id}/edit`" class="btn btn-sm btn-outline-secondary">edit</router-link>&nbsp;
                  <button class="btn btn-sm btn-outline-danger" @click="delteUniversity(university.id, university.universityName)">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'University',
    setup(){
        const universities = ref([]);

        onMounted(async () =>{
            const resp = await axios.get('university');
            universities.value = resp.data;
        });

    
    const delteUniversity = async (id, name) => {
      if (confirm(`Are you sure you want delete ${name}`)) {
          await axios.delete(`university/${id}`);
          universities.value = universities.value.filter((u) => u.id !== id);
      }
    }
        return{
            universities,
            delteUniversity
        }
    }
}
</script>
<style lang="scss">
.divMargin{
  margin: 5%;
}
</style>