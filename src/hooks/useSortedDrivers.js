import {ref, computed} from 'vue'

export default function useSortedDrivers(drivers) {
    const selectedSort = ref('')
    const sortedDrivers = computed(() => {
        return [...drivers.value].sort((driver1, driver2) => driver1[selectedSort.value]?.localeCompare(driver2[selectedSort.value]))
    })

    return {
        selectedSort, sortedDrivers
    }
};
