<template>
  <div id="filterHeader" class="filterHeader">
    <div class="container">
      <div class="headerr">
        <ul class="filtersHeader">
          <li>
            <button class="createListing" @click="isOpen = true">Create listing</button>
          </li>
          <li>
            <img src="./assets/filter.svg" class="filterImg">
          </li>
          <li>
            <button id="connect" class="buttonPriceFilter">Price: Low to high
              <img src="./assets/arrow.svg" class="arrow">
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <Modal :open="isOpen" @close="isOpen = !isOpen">
      <h1 class="createListingH">Create listing</h1>
  </Modal>
</template>
<script>
  import { ref } from 'vue'
  import Modal from "./create_listing_modal.vue"
  export default{
      components: { Modal },
      setup() {
        const isOpen = ref(false)

        return { isOpen }
      }
  }
</script>