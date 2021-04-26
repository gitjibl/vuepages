<template>
    <div>
        <img :src="imgsrc" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgsrc:require('@/assets/cli2.png')
        }
    }
}
</script>

