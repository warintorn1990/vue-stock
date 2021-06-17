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
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard.vue";
export default {
  name: "Stock",
  components: {
    StockCard,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
