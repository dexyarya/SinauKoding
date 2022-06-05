<template>
  <div class="container mt-5">
     <FormAdd/>
    <div class="card">
      <b-table :items="items" :fields="fields" responsive >
        <template #cell(actions)="row">
          <b-button-group class="mr-4 d-flex" >
            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-2" variant="info" title="View">
              <b-icon icon="eye" variant="light"></b-icon>
            </b-button>

            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-2" variant="warning" title="Edit">
              <b-icon icon="pencil-square" variant="light"></b-icon>
            </b-button>

            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-2" variant="danger" title="Delete">
              <b-icon icon="trash"></b-icon>
            </b-button>

          </b-button-group>
        </template>

      </b-table>
    </div>
  </div>
</template>

<script>

import FormAdd from "./FormAdd.vue";
export default {

  components:{
    FormAdd
  },
  data() {
    return {
      fields: [
        'no',
        'name',
        'email',
        'gender',
        'status',
        { key: 'actions', label: 'Actions' }
      ],

      items: [
        { no: 1, name: 'Dickerson', email: 'Macdonald@gmail.com', gender: 'Male', status: 'Active' },
        { no: 2, name: 'Larsen', email: 'Shaw@gmail.com', gender: 'Male', status: 'Inactive' },
        { no: 3, name: 'Geneva', email: 'Wilson@gmail.com', gender: 'Male', status: 'Active' },
        { no: 4, name: 'Jami', email: 'Carney@gmail.com', gender: 'Male', status: 'Inactive' }
      ]
    }
  }
}
</script>