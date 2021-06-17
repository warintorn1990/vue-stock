<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img
          class="white--text align-end"
          src="@/assets/4584343.jpg"
          height="200px"
        >
          <v-card-title primary-title> Login </v-card-title>
        </v-img>

        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field name="username" label="Username" id="username"  v-model="account.username" />
            <v-text-field
              name="password"
              :type="isShowPassword ? 'text' : 'password'"
              label="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              id="password"
              v-model="account.password"
            />
            <v-row class="justify-space-between px-2 pt-5 pb-3">
              <v-btn @click.prevent="$router.push('/register')" text
                >Register</v-btn
              >
              <v-btn type="submit" color="success">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: "",
      },
      usernameRules: [v1=>!!v1 || "Username is required",],
      passwordRules:[v1=>!!v1 || "Password is required", v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters, at least one letter and one number"]
    };
  },

  mounted() {},

  methods: {
    submit() {
    //   this.$route.push('/stock');
      this.$router.push("/stock");
      this.$store.dispatch({
        type: "doLogin",
        username: this.account.username,
        password: this.account.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
