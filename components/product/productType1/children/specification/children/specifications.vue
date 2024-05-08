<template>
    <li>
        <section class="p-4 bg-stone-200 rounded-custom lg:px-8">
            <!-- title-->
            <div class="flex items-center justify-between cursor-pointer" @click="toggleDropdown">
                <h3 class="text-sm sm:text-base lg:lg font-medium"> {{ data.title }} </h3>
                <button :class="'size-8 duration-500 ' + (openDropdown ? 'rotate-180' : '')">
                    <i class="text-lg font-medium font-Icomoon icon-chevron-Down"></i>
                </button>
            </div>
            <!-- list-->
            <ul :class="'list-inside list-disc marker:text-stone-700 text-sm lg:text-base font-normal flex flex-col gap-2 duration-500 overflow-hidden lg:pr-2 ' + (openDropdown ? 'max-h-96 pb-4 mt-4' : 'max-h-0 pb-0 mt-0')">
                <li v-for="(item, index) in data.list" :key="index"> {{ item.key }} : {{ item.value }} </li>
            </ul>
        </section>
    </li>
</template>

<script>
export default {
    name: 'Specification Parent Type 1',
    props: {
        data: Object,
    },
    setup(){
        const openDropdown = ref(false);

        const toggleDropdown = () => {
            openDropdown.value = !openDropdown.value;
        }

        return {
            openDropdown,
            toggleDropdown,
        }
    }
}
</script>