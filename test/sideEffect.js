var users = {};
var userOrders = {};

function fetchUserData(userId) {
  ajax("http://some.api/user/" + userId, function onUserData(userData) {
    users[userId] = userData;
  });
}

function fetchOrders(userId) {
  ajax("http://some.api/orders/" + userId, function onOrders(orders) {
    for (let i = 0; i < orders.length; i++) {
      users[userId].latestOrder = orders[i];
      userOrders[orders[i].orderId] = orders[i];
    }
  });
}

function deleteOrder(orderId) {
  var user = users[userOrders[orderId].userId];
  var isLatestOrder = userOrders[orderId] == user.latestOrder;

  // 删除用户的最新订单？
  if (isLatestOrder) {
    hideLatestOrderDisplay();
  }

  ajax("http://some.api/delete/order/" + orderId, function onDelete(success) {
    if (success) {
      // 删除用户的最新订单？
      if (isLatestOrder) {
        user.latestOrder = null;
      }

      userOrders[orderId] = null;
    } else if (isLatestOrder) {
      showLatestOrderDisplay();
    }
  });
}
