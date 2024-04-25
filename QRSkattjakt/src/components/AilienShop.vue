<template>
    <div class="backgrounddiv">
        <div class="header">
            <div class="headertext">
                Exclusive Alien Shop
            </div> 
        </div>

        <div>
            <div class="moneytext">
                Your Money: {{ this.cookies.get('money') }}$
            </div>
        </div>


        <div class="boxcollection ">
            <div class="box">
                <div>
                    <div class="boxtext">
                        Death Ray
                    </div>
                    <div class="boximg">
                        <img src="../assets/raygun.png" alt="">
                    </div>
                </div>
                <div class="buy">
                    <button class="buybutton" @click="takeMoney10">
                        10$
                    </button>
                </div>
            </div>
            <div class="box">
                <div>
                    <div class="boxtext">
                        Friend
                    </div>
                    <div class="friendimg">
                        <img src="../assets/friend.png" alt="">
                    </div>
                </div>
                <div class="buy">
                    <button class="buybutton" @click="takeMoney01">
                        1$
                    </button>
                </div>
            </div>
            <div class="box">
                <div>
                    <div class="boxtext">
                        UFO
                    </div>
                    <div class="boximg">
                        <img src="../assets/UFO.png" alt="">
                    </div>
                </div>
                <div class="buy">
                    <button class="buybutton" @click="takeMoneyflag">
                        100000000$
                    </button>
                </div>
            </div>
        </div>

        <ul v-if="purchases.length > 0">
      <li v-for="(purchase, index) in purchases" :key="index">
        {{ purchase.text }}: {{ purchase.amount }}$
      </li>
    </ul>
        <p class="hej" v-else>No purchases yet</p>

    </div>
  </template>
<script>
import { defineComponent } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

export default defineComponent({
  setup() {
    const cookies = useCookies(['money'])
    cookies.set('money', 700)
    return {
      cookies,
    }
  },
  data() {
    return {
      totalAmount: 500, // Initial total amount
      purchases: [], // Array to store purchases
    };
  },
  methods: {
    takeMoney10() {
      if (this.cookies.get('money') >= 10) {
        this.cookies.set('money', this.cookies.get('money')-10)
        this.totalAmount = this.cookies.get('money')
        this.purchases.push(({ text: 'Death Ray', amount: 10 })); // Add the purchase amount to the purchases array
       
      } else {
        console.log('Insufficient funds!');
      }
    },
    takeMoney01() {
        if (this.cookies.get('money') >= 1) {
        this.cookies.set('money',this.cookies.get('money')-1); // Deduct $10 from the total amount
        this.totalAmount = this.cookies.get('money')
        this.purchases.push({ text: 'Friend', amount: 1 });
      } else {
        console.log('Insufficient funds!');
      }
    },
    takeMoneyflag() {
        if (this.cookies.get('money') >= 1000000) {
        this.cookies.set('money', this.cookies.get('money')-1000000); // Deduct $10 from the total amount
        this.totalAmount = this.cookies.get('money')
        this.purchases.push({ text: '210s{BreakingBadIsGood}', amount: 1000000 });
      } else {
        console.log('Insufficient funds!');
      }
    }

  }
});
</script>
<style>
    .hej {
        font-size: 25px;
        font-weight: bold;
        padding-bottom:1%;
    }
    .backgrounddiv {
        background-color:rgb(211, 17, 42);
        height:100%;
        margin-bottom:-10%;
    }
    .header {
        width: 100%;
        height: 100px;
        align-content: center;
        text-align: center;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3); /* Add shadow to the image */
        background-color: rgb(44, 66, 42);
    }
    .headertext {
        
        font-size: 30px;
    }
    .box {
        width: 30%;
        height: 500px;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3); /* Add shadow to the image */
        margin: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgb(58, 70, 137);
        border-radius: 15px;
    }
    .boxcollection{
        flex-direction: row;
        display: flex;
        }
    .friendimg img {
        height: 60%;
        width: auto;
    }
    .friendimg {
        display: flex;
        justify-content: center;
    }
    .boximg img {
        width: 60%;
        height: auto;

    }
    
    .boximg {
        display: flex;
        justify-content: center;
        margin-top: 15%;
    }
    .boxtext {
        font-size: 30px;
        text-align: center;
        margin: 20px;
        
    }
    .buybutton {
        width: 100px;
        height: 30px;
        background-color: rgb(161, 131, 154);
        border-radius: 7px;
    }
    .buy {
        display: flex;
        justify-content: center;
        margin-bottom: 5%;
    }
    .moneytext {
        text-align: center;
        font-size: 30px;
        margin: 1%;
       
    }
  
</style>