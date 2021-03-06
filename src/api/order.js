import { requestWithToken } from '@/utils/request'
/**
 * 生成订单
 * @return {AxiosPromise}
 */
export function createOrder () {
  return requestWithToken('/member/order/pre', 'get')
}
/**
 * 添加收货地址
 * @param address 收货地址信息对象
 * @return {AxiosPromise}
 */
export function addAddress (address) {
  return requestWithToken('/member/address', 'post', address)
}
/**
 * 获取收货地址列表
 * @return {AxiosPromise}
 */
export function getAddressList () {
  return requestWithToken('/member/address', 'get')
}

/**
 * 修改收货地址
 * @param id 收货地址id
 * @param address 新的收货地址
 * @return {AxiosPromise}
 */
export function updateAddressById (address) {
  return requestWithToken(`/member/address/${address.id}`, 'put', address)
}

/**
 * 提交订单
 * @param order 订单对象
 * @return {AxiosPromise}
 */
export function submitOrder (order) {
  return requestWithToken('/member/order', 'post', order)
}
/**
 * 根据订单id获取订单详情
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function getOrderInfoById (id) {
  return requestWithToken(`/member/order/${id}`, 'get')
}
/**
 * 取消订单
 * @param id 订单ID
 * @param cancelReason 取消原因
 * @return {AxiosPromise}
 */
export function cancelOrder ({ id, cancelReason }) {
  return requestWithToken(`/member/order/${id}/cancel`, 'put', {
    cancelReason
  })
}
/**
 * 删除订单
 * @param ids 订单ID集合
 * @return {AxiosPromise}
 */
export function deleteOrder (ids) {
  return requestWithToken('/member/order', 'delete', { ids })
}
/**
 * 确认收货
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function confirmReceiptGoods (id) {
  return requestWithToken(`/member/order/${id}/receipt`, 'PUT')
}
/**
 * 获取订单物流信息
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function getLogisticsByOrderId (id) {
  return requestWithToken(`/member/order/${id}/logistics`, 'get')
}
/**
 * 获取订单详情
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function getOrderDetail (id) {
  return requestWithToken(`/member/order/${id}`, 'get')
}
/**
 * 根据订单ID创建新的订单
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function createOrderById (id) {
  return requestWithToken(`/member/order/repurchase/${id}`, 'get')
}
