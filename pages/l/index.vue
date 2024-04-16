<template>
    <div></div>
</template>

<script>
export default {
    name: 'Redirect',
    setup(){
        const router = useRouter();

        router.push({
            path: '/'
        })
    }
}
</script>