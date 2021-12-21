import axios from "axios";
import {ref, onMounted} from 'vue';

export function useDrivers(limit) {
    const drivers = ref([])
    const totalPages = ref(0)
    const isDriversLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/drivers', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            drivers.value = response.data;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isDriversLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        drivers, isDriversLoading, totalPages
    }
}
