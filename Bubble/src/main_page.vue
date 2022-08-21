<template>
<body>
<section id="about" class="about">
    <div class="container">
      <p>Bubble is a web 3.0 protocol<br>
        Which allows you to unite venture investors<br> and create a trust liquidity pool
      </p>
    </div>
  </section>
</body>
</template>

<script>
    /* eslint-disable */
    export default {
      data() {
        return {
          wallet: 'connect wallet'
        }
      },
      methods: {
        async connect() {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
          const walletSlice1 = String(accounts).slice(0, 5)
          const walletSlice2 = String(accounts).slice(38)
          const adress = walletSlice1+'...'+walletSlice2
          this.wallet = adress
          }
      }
    }
</script>