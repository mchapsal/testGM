<template>
  <div>
  <v-container fluid>
    <v-switch :label="`Only alcool degree >7% : ${switchDegree.toString()}`" v-model="switchDegree" color="orange darken-3"></v-switch>
  </v-container>
    <v-data-table
    :headers="headers"
    :items="filteredItems"
    :loading="loading"
    :pagination.sync="pagination"
    hide-actions
    class="elevation-1">
      <template slot="headers" slot-scope="props">
       <tr>
       <th/>
         <th>Beer name</th>
         <th>Tagline</th>
         <th>Malt</th>
         <th>ABV</th>
       </tr>
      </template>
      <template slot="items" slot-scope="props">
        <td class="text-xs-center"><img :src="props.item.image_url" width="20" height="60"/></td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.tagline }}</td>
        <td class="text-xs-center">{{ props.item.ingredients.malt[0].name }}</td>
        <td class="text-xs-center">{{ props.item.abv }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center">
      <v-pagination v-model="pagination.page" :length="pages" color="orange darken-3"></v-pagination>
    </div>
  </div>
</template>


<script src="../api/punkapi.js"/>
