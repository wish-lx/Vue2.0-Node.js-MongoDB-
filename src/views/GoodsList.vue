<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a href="javascript:void(0)" :class="{'cur':priceChecked =='all'}" @click="checkAll">All</a>
                </dd>
              <dd v-for="(price,index) in priceFilter" :key="price.id">
                <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="setPriceFilter " >{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="good in goods" :key="good.id">
                  <div class="pic">
                    <a href="#">
                      <img v-lazy="'/static/'+good.prodcutImg" alt="">
                      </a>
                  </div>
                  <div class="main">
                    <div class="name">{{good.productName}}</div>
                    <div class="price">{{good.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script type="text/ecmascript-6">
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import NavBread from './../components/NavBread'

import './../assets/css/base.css'
import './../assets/css/product.css'

export default {
  name: 'GoodsList',
  data () {
    return {
      goods: [],
      priceFilter: [
        {
          startPrice: 0.00,
          endPrice: 500.00
        },
        {
          startPrice: 500.00,
          endPrice: 1000.00
        },
        {
          startPrice: 1000.00,
          endPrice: 2000.00
        },
        {
          startPrice: 2000.00,
          endPrice: 3000.00
        }
      ],
      priceChecked: 'all',
      filterBy: false,
      overLayFlag: false
    }
  },
  methods: {
     checkAll () {
       this.priceChecked = 'all'
     },
     showFilterPop () {
       this.filterBy = true
       this.overLayFlag = true
     },
     setPriceFilter (index) {
      this.priceChecked = index
      this.closePop()
     },
     closePop () {
      this.filterBy = false
      this.overLayFlag = false
     }

  },
  created () {
    this.$ajax.get('/goods').then((res) => {
       const data = res.data
       this.goods = data.result
     })
  },
 components: {
    NavHeader,
    NavFooter,
    NavBread
  }
}
</script>
<style>

</style>
