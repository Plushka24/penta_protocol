<template>
<head>
  <meta charset="UTF-8">
  <title>Bubble protocol</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <header id="header" class="header">
    <div class="container">
      <div class="nav">
        <a href="#/"><img src="./assets/bubbles.svg" alt="Bubble logo" class="logo"></a>
        <ul class="menu">
          <li>
            <h1 class="name">
              Bubble
            </h1>
          </li>
          <li>
            <a href="#/market">
              market
            </a>
          </li>
          <li>
            <a href="#/pools">
              pools
            </a>
          </li>
          <li>
            <button v-on:click="connect" id="connect" class="button">{{ wallet }}</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</body>
<router-view></router-view>
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