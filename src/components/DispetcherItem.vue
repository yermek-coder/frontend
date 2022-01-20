<template>
  <tr @click="$router.push(`dispetchers/${dispetcher.id}`)" class="dispetcher">
		<td style="width: 50px">{{dispetcher.id}}</td>
		<td>{{dispetcher.Name}}</td>
		<td>{{dispetcher.Sure_name}}</td>
		<td>{{dispetcher.Date_of_birth}}</td>
		<td>{{dispetcher.Number}}</td>
		<td>{{dispetcher.Created}}</td>
		<td>{{dispetcher.Email}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    dispetcher: {
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


