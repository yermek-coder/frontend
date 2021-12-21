import {ref, computed} from 'vue'

export default function useSortedDrivers(sortedDrivers) {
    const searchQuery = ref('')

    const sortedAndSearchedDrivers = computed(() => {
        return sortedDrivers.value.filter(driver => driver.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedDrivers
    }
};
