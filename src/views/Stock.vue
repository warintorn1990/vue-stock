<template>
  <v-container>
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="TOTAL"
            subtitle="3,100"
            avatar_bg="#00a65a"
            avatar_ic="mdi-cart-outline"
          />
        </v-card>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="SOLD-OUT"
            avatar_ic="mdi-flask-empty-outline"
            avatar_bg="#f39c12"
            subtitle="12"
          />
        </v-card>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="RETURN"
            avatar_ic="mdi-keyboard-return"
            avatar_bg="#dd4b39"
            subtitle="2"
          />
        </v-card>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="DISCOUNT"
            avatar_ic="mdi-gift-outline"
            avatar_bg="#00c0ef"
            subtitle="101"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-text-field v-model="search"> </v-text-field>
    <v-card class="mt-2">
      <v-data-table :search="search" :headers="headers" :items="mDataArray">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stock-create')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New Product</span>
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-img
                :src="item.image | imageUrl"
                lazy-src="https://www.seekpng.com/png/detail/204-2049159_box-icon-png-product-and-services-icon.png"
                aspect-ratio="1"
                max-width="50"
                max-height="50"
              ></v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("฿") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>
              <v-icon class="mr-2" @click="editItem(item)"> edit </v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)"> delete </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard.vue";
import Axios from "axios";

export default {
  name: "Stock",
  components: {
    StockCard,
  },
  data() {
    return {
      search: "",
      mDataArray: [],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Action", value: "action" },
      ],
    };
  },

  mounted() {
    Axios.get("http://127.0.0.1:3000/product").then((response) => {
      this.mDataArray = response.data;
    });
  },

  methods: {
    editItem(item) {
      this.$router.push(`/stock-edit/${item.id}`);
    },
    deleteItem(item) {
      this.selectedProductId = item.id;
      this.confirmDeleteDlg = true;
    }
  },
};
</script>

<style lang="scss" scoped></style>
