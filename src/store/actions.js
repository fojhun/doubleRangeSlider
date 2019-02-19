import * as types from './mutation-types'


export const setMinPrice = ({commit}, MinPrice) => {
  commit(types.SetMinPrice, MinPrice)
}
export const setMaxPrice = ({commit}, MaxPrice) => {
  commit(types.SetMaxPrice, MaxPrice)
}
