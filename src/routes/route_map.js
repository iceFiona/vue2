
export default [
    { 
        path: '/order', 
        name: 'order', 
        component (resolve) {
            require(['view/order/'], resolve)
        },
        children: [{
            path: '/order/detail',
            name: 'orderDetail',
            component (resolve) {
                require(['view/order/detail'], resolve)
            },
        }]
    }

]
