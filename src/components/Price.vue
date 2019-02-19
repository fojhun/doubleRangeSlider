<template>
    <div class="range-slider">  
        <div class="title text-right">
            <h4>محدوده قیمت</h4>
        </div>
         <Slider></Slider>
          <div class="showNumber">
            <div class="maxNumber float-right text-right"><span> تومان</span> <span class="num">{{rangMax}}</span></div>
            <div class="minNumber float-left text-left"><span> تومان</span> <span class="num">{{rangMine}}</span></div>
          </div>
          <button class="sendPrice" type="button"> اعمال محدوده قیمت</button>
    </div>
</template>
<script>
import Slider from './Slider'
import {addSeperator} from "../index.js";
export default {
    data(){
        return{
        rangMine:addSeperator(this.$store.state.MinPrice*1000),
        rangMax:addSeperator(this.$store.state.MaxPrice*1000),
       
   }
    },

    mounted(){
        this.$root.$on('changeFilter',(event) => {
            var evtClass=event.target.className;
            this.checkPrice(evtClass);
           
           
    }) 
        
            
     
    },
    methods:{
       
        checkPrice(evtClass){
          
            var minVal=parseInt(this.$store.state.MinPrice),
            maxVal = parseInt(this.$store.state.MaxPrice);
    
            if(evtClass === 'min' && minVal > maxVal){
        
                this.$store.dispatch("setMinPrice",maxVal);
                this.$store.state.MinPrice=maxVal;
                 
           
            }
            var minVal =parseInt(this.$store.state.MinPrice);
           this.rangMine= addSeperator(minVal*1000);


            if(evtClass === 'max' && maxVal < minVal){
            this.$store.dispatch("setMaxPrice",minVal);
              this.$store.state.MaxPrice= minVal;
            }
            var maxVal = parseInt(this.$store.state.MaxPrice);
            this.rangMax=addSeperator(maxVal*1000);
        }
       
              
  },
  components:{
      Slider
  }
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

.showNumber{
    padding: 5px 0;
    width: 400px;
    overflow: hidden;
      margin:21px 0;

}
.maxNumber,.minNumber{
    width: 50%;
    box-sizing: border-box;
}
.display-inline-block{
    display: inline-block;
}
.float-right{
  float: right;  
}
.float-left{
    float: left;
}
.maxNumber span,.minNumber span{
    display: inline-block;
    box-sizing: border-box
}
.maxNumber span.num,.minNumber span.num{
       text-align: left;
}
.text-right{
    text-align: right;
}
.text-left{
    text-align: left;
}
.title{
    width: 400px;

}
.sendPrice{
    border: 1px solid #00e2aa;
    background: #00e2aa;
    color: #fff;
    width: 400px;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 7px;
}
</style>


