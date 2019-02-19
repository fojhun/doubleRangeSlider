<template> 
       <div class="rangeslider">
            <input class="min" value="num.minNumber"  type="range" min="1" @change="updateNumber($event)" max="100" v-model="num.minNumber" />
            <input class="max" value="num.maxNumber" type="range" min="1" @change="updateNumber($event)" max="100" v-model="num.maxNumber" />     
        </div>
       
      

</template>
<script>
export default {
    data(){
        return{
        num:{
        minNumber:this.$store.state.MinPrice,
        maxNumber:this.$store.state.MaxPrice
        }
   }
    },
    
    methods:{     
            updateNumber(event){ 
              
            this.$store.dispatch("setMinPrice", this.num.minNumber);
            this.$store.dispatch("setMaxPrice",this.num.maxNumber);
            this.$root.$emit("changeFilter",event);
            this.num.minNumber=this.$store.state.MinPrice
            this.num.maxNumber=this.$store.state.MaxPrice 
        
            }
    },
 
}

</script>
<style>
.range-slider{
    height: 480px;
    width: 480px;
    display: flex;
    border:1px solid #ddd;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0px 15px;
    flex-direction: column;
}


.rangeslider{
        position: relative;
    height: 32px;
    width: 400px;
    display: inline-block;
    margin: 30px 0px;

}
.rangeslider input{
    position: absolute;
}
input[type='range'] {
  width: 400px;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
    outline: none;
}
input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
    background: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 400px;
  height: 3px;
  background:  #00e2aa;
}



input[type='range']:nth-child(2)::-webkit-slider-runnable-track{
  background: none;
}

input[type='range']::-webkit-slider-thumb {
  position: relative;
  height: 20px;
  width: 20px;
  margin-top: -9px;
  background:  #00e2aa;
  border: 1px solid  #00e2aa;
  border-radius: 25px;
  z-index: 1;
}
input[type='range']:nth-child(1)::-webkit-slider-thumb{
  z-index: 2;
}
.rangeslider span{
    position: absolute;
    margin-top: 30px;
    left: 0;
}

.rangeslider .right{
   position: relative;
   float: right;
   margin-right: -5px;
}


</style>


