import * as types from './mutation-types'

export const mutations = {
  [types.SetMaxPrice] (state, setMax) {
    state.MaxPrice =setMax
  },
  [types.SetMinPrice] (state, SetMin) {
    state.MinPrice = SetMin
  },
 
}
