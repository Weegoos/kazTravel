<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="q-pa-md">
      <q-option-group
        v-model="separator"
        inline
        class="q-mb-md"
        :options="separatorOptions"
      />
  
      <q-markup-table :separator="separator" flat bordered>
        <thead>
          <tr>
            <th class="text-left">Время</th>
            <th class="text-right">Направление</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">6:15</td>
            <td class="text-right">{{ this.city }}</td>
          </tr>
          <tr>
            <td class="text-left">6:45</td>
            <td class="text-right">{{ this.city }}</td>
          </tr>
          <tr>
            <td class="text-left">7:15</td>
            <td class="text-right">{{ this.city }}</td>
          </tr>
          <tr>
            <td class="text-left">7:45</td>
            <td class="text-right">{{ this.city }}</td>
          </tr>
          <tr>
            <td class="text-left">8:15</td>
            <td class="text-right">{{ this.city }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
    data (){
      return {
        city: localStorage.getItem('flightCity'),
        separator: ref('vertical'),
        separatorOptions: [
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
          { label: 'Cell', value: 'cell' },
          { label: 'None', value: 'none' }
        ],
      }
    }
  }
  </script>
  
  <style>
  
  </style>
    