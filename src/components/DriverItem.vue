<template>
  <tr @click="$router.push(`drivers/${driver.id}`)" class="driver">
		<td style="width: 50px">{{driver.id}}</td>
		<td>{{driver.Name_vod}}</td>
		<td>{{driver.Date_of_birth}}</td>
		<td>{{driver.number}}</td>
		<td>{{driver.Created}}</td>
		<td>{{driver.Auto}}</td>
		<td>{{driver.Auto_number}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    driver: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
table.GeneratedTable td{
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  padding: 16px;
}
table.GeneratedTable tr:hover{
	background-color: #d1d1d1;
}
</style>


