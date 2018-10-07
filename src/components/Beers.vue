<template>
  <div>
    <v-data-table
    :headers="headers"
      :items="beers"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
       <tr>
       <th/>
         <th>Beer name</th>
         <th>Tagline</th>
         <th>Malt</th>
       </tr>
      </template>
      <template slot="items" slot-scope="props">
        <td class="text-xs-center"><img :src="props.item.image_url" width="20" height="60"/></td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.tagline }}</td>
        <td class="text-xs-center">{{ props.item.ingredients.malt[0].name }}</td>


      </template>
    </v-data-table>
  </div>
</template>


<script src="../api/punkapi.js"/>
