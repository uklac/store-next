export const useUtil = () => {
  function getOrderNumber() {
    return localStorage.getItem('order_number');
  }

  function getGuestToken() {
    return localStorage.getItem('guest_token');
  }

  function getUserToken() {
    return localStorage.getItem('user_token');
  }

  function getUserId() {
    return localStorage.getItem('user_id');
  }

  return {
    getOrderNumber,
    getGuestToken,
    getUserToken,
    getUserId,
  };
};
