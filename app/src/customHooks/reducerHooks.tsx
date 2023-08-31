import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { cartObject } from "../types/types";

export const UseOpen = () => {
  return useSelector<RootState>(state => state.cart.open) as boolean
}

export const UseItems = () => {
  return useSelector<RootState>(state => state.cart.items) as cartObject[]
}

export const UseSubTotal = () => {
  return useSelector<RootState>(state => state.cart.subTotal) as number
}

export const UseTotalQuantity = () => {
  return useSelector<RootState>(state => state.cart.totalQuantity) as number
}

