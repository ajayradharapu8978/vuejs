<template>
    <div class="divMargin">
        <form action="" @submit.prevent="onSubmit">
        <div class="form-group">
            <label>University Name</label>
            <input type="text" class="form-control" name="universityName" v-model="universityName">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" name="email" v-model="email">
        </div>
        <div class="form-group">
            <label>Phone</label>
            <input type="number" class="form-control" name="phone" v-model="phone">
        </div>
        <div class="form-group">
            <label>Country</label>
            <input type="text" class="form-control" name="country" v-model="country">
        </div>
        <div class="form-group">
            <label>Website</label>
            <input type="text" class="form-control" name="Website" v-model="Website">
        </div>
        <div class="form-group">
            <label>Address</label>
            <textarea name="address" class="form-control" id="" cols="30" rows="10" v-model="address"></textarea>
        </div><br>
        <div class="btn-toobar mb-2 mb-md-0">
            <button type="reset" class="btn btn-outline-secondary">Clear</button>&nbsp;
            <button class="btn btn-outline-success">Add University</button>
        </div>

    </form>
    </div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    name: 'createUniversity',
    setup(){
        const universityName = ref('');
        const email = ref('');
        const phone = ref('');
        const country = ref('');
        const Website = ref('');
        const address = ref('');
        const router = useRouter();

        const onSubmit = async () => {
            await axios.post('university',{
                universityName: universityName.value,
                email: email.value,
                phone: phone.value,
                country: country.value,
                Website: Website.value,
                address: address.value
            })
            await router.push('/universities');
        }

        return{
            universityName,
            email,
            phone,
            country,
            Website,
            address,
            onSubmit
        }
    }
}
</script>
<style lang="scss">
.divMargin{
    margin: 3%;
}
</style>