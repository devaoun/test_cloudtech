const data = {
    "customers": [
        {
            "customerId": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "address": {
                "street": "123 Elm Street",
                "city": "Springfield",
                "state": "IL",
                "postalCode": "62701",
                "country": "USA"
            },
            "phone": "+1-555-1234"
        },
        {
            "customerId": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "address": {
                "street": "456 Oak Street",
                "city": "Metropolis",
                "state": "NY",
                "postalCode": "10001",
                "country": "USA"
            },
            "phone": "+1-555-5678"
        },
        {
            "customerId": 3,
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "address": {
                "street": "789 Pine Street",
                "city": "Gotham",
                "state": "NJ",
                "postalCode": "07001",
                "country": "USA"
            },
            "phone": "+1-555-7890"
        }
    ],
    //////////////////////////////////////////////////////////////////////////////// ORDER
    "orders": [
        {
            "orderId": 101,
            "customerId": 1,
            "orderDate": "2024-07-29T10:30:00Z",
            "status": "Processing",
            "items": [
                {
                    "itemId": 1,
                    "productName": "Wireless Mouse",
                    "quantity": 2,
                    "price": 25.99
                },
                {
                    "itemId": 2,
                    "productName": "Keyboard",
                    "quantity": 1,
                    "price": 45.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1001,
                "carrier": "FedEx",
                "trackingNumber": "1234567890",
                "estimatedDeliveryDate": "2024-08-02",
                "shippingAddress": {
                    "street": "123 Elm Street",
                    "city": "Springfield",
                    "state": "IL",
                    "postalCode": "62701",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 102,
            "customerId": 2,
            "orderDate": "2024-07-28T14:15:00Z",
            "status": "Shipped",
            "items": [
                {
                    "itemId": 3,
                    "productName": "Laptop",
                    "quantity": 1,
                    "price": 799.99
                },
                {
                    "itemId": 4,
                    "productName": "Laptop Sleeve",
                    "quantity": 1,
                    "price": 19.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1002,
                "carrier": "UPS",
                "trackingNumber": "0987654321",
                "estimatedDeliveryDate": "2024-08-01",
                "shippingAddress": {
                    "street": "456 Oak Street",
                    "city": "Metropolis",
                    "state": "NY",
                    "postalCode": "10001",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 103,
            "customerId": 3,
            "orderDate": "2024-07-29T08:45:00Z",
            "status": "Delivered",
            "items": [
                {
                    "itemId": 5,
                    "productName": "Smartphone",
                    "quantity": 1,
                    "price": 599.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1003,
                "carrier": "FedEx",
                "trackingNumber": "1234567891",
                "estimatedDeliveryDate": "2024-07-31",
                "shippingAddress": {
                    "street": "789 Pine Street",
                    "city": "Gotham",
                    "state": "NJ",
                    "postalCode": "07001",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 104,
            "customerId": 2,
            "orderDate": "2024-07-30",
            "status": "Cancelled",
            "items": [
                {
                    "itemId": 6,
                    "productName": "Tablet",
                    "quantity": 1,
                    "price": 299.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1004,
                "carrier": "UPS",
                "trackingNumber": "1234567892",
                "estimatedDeliveryDate": "2024-08-03",
                "shippingAddress": {
                    "street": "456 Oak Street",
                    "city": "Metropolis",
                    "state": "NY",
                    "postalCode": "10001",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 105,
            "customerId": 1,
            "orderDate": "2024-07-29T15:20:00Z",
            "status": "Processing",
            "items": [
                {
                    "itemId": 7,
                    "productName": "Monitor",
                    "quantity": 1,
                    "price": 199.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1005,
                "carrier": "FedEx",
                "trackingNumber": "1234567893",
                "estimatedDeliveryDate": "2024-08-04",
                "shippingAddress": {
                    "street": "123 Elm Street",
                    "city": "Springfield",
                    "state": "IL",
                    "postalCode": "62701",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 106,
            "customerId": 2,
            "orderDate": "2024-07-29T11:45:00Z",
            "status": "Processing",
            "items": [
                {
                    "itemId": 8,
                    "productName": "Headphones",
                    "quantity": 1,
                    "price": 49.99
                },
                {
                    "itemId": 9,
                    "productName": "Webcam",
                    "quantity": 1,
                    "price": 79.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1006,
                "carrier": "UPS",
                "trackingNumber": "1234567894",
                "estimatedDeliveryDate": "2024-08-02",
                "shippingAddress": {
                    "street": "456 Oak Street",
                    "city": "Metropolis",
                    "state": "NY",
                    "postalCode": "10001",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 107,
            "customerId": 3,
            "orderDate": "2024-07-28T10:00:00Z",
            "status": "Shipped",
            "items": [
                {
                    "itemId": 10,
                    "productName": "Smartwatch",
                    "quantity": 2,
                    "price": 199.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1007,
                "carrier": "FedEx",
                "trackingNumber": "1234567895",
                "estimatedDeliveryDate": "2024-08-01",
                "shippingAddress": {
                    "street": "789 Pine Street",
                    "city": "Gotham",
                    "state": "NJ",
                    "postalCode": "07001",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 108,
            "customerId": 1,
            "orderDate": "2024-07-28T08:30:00Z",
            "status": "Delivered",
            "items": [],
            "shippingDetails": {
                "shippingId": 1008,
                "carrier": "FedEx",
                "trackingNumber": "1234567896",
                "estimatedDeliveryDate": "2024-07-30",
                "shippingAddress": {
                    "street": "123 Elm Street",
                    "city": "Springfield",
                    "state": "IL",
                    "postalCode": "62701",
                    "country": "USA"
                }
            }
        },
        {
            "orderId": 109,
            "customerId": 2,
            "orderDate": "2024-07-30T09:15:00Z",
            "status": "Processing",
            "items": [
                {
                    "itemId": 12,
                    "productName": "Mouse Pad",
                    "quantity": 3,
                    "price": 9.99
                }
            ],
            "shippingDetails": {
                "shippingId": 1009,
                "carrier": "UPS",
                "trackingNumber": "1234567897",
                "estimatedDeliveryDate": "2024-08-04",
                "shippingAddress": {
                    "street": "456 Oak Street",
                    "city": "Metropolis",
                    "state": "NY",
                    "postalCode": "10001",
                    "country": "USA"
                }
            }
        }
    ]
}

function formatDate(dateString) {
    const parts = dateString.split('-')

    if (parts.length !== 3) return false

    const year = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1 // ใน javascript นับเดือนเป็น index
    const day = parseInt(parts[2], 10)

    if (isNaN(year) || isNaN(month) || isNaN(day)) return false

    if (month < 1 || month > 12 || day < 1 || day > 31) return false

    const date = new Date(year, month, day);
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
        return false
    }

    return true
}

function get_order_by_date(order_date, status = 'None') {

    if (!formatDate(order_date)) {
        throw new Error('Invalid date format!')
    }

    const ordersByDateAndStatus = data.orders.filter(order => {
        const isDateMatch = order.orderDate.split('T')[0] === order_date
        const isStatusMatch = order.status === status
        return isDateMatch && isStatusMatch
    });

    const totalPrice = ordersByDateAndStatus.reduce((sum, order) => {
        const sumPrice = order.items.reduce((sum, item) => {
            sum += (item.price * item.quantity)
            return sum
        }, 0)
        return sum + sumPrice
    }, 0)

    return { ordersByDateAndStatus, totalPrice }
}

// input สำหรับ filter order
const orderDate = '2024-07-28'
const status = 'Shipped' // Shipped , Processing , Delivered , Cancelled

console.log(get_order_by_date(orderDate, status))

// function display order ในรูปแบบ table
function display_orders_table(orders) {
    console.table(orders.ordersByDateAndStatus.map(order => ({
        OrderID: order.orderId,
        CustomerID: order.customerId,
        OrderDate: order.orderDate,
        Status: order.status,
        Quantity: order.items.length,
        TotalValue: order.items.reduce((sum, item) => {
            sum += item.quantity * item.price
            return sum
        }, 0)
    })))

    console.log('TotalPrice :', orders.totalPrice)
}

// เลือก display orders จาก orders ที่ return ใน function get_order_by_date
display_orders_table(get_order_by_date(orderDate, status))

function isValidOrder(order) {
    // เช็คว่า input ที่รับมาเป็น object มั้ย
    if (!order || typeof order !== 'object') return false;

    // เช็คโครงสร้างข้อมูล items
    if (!Array.isArray(order.items)) return false;
    for (const item of order.items) {
        if (!item.itemId || typeof item.itemId !== 'number' ||
            !item.productName || typeof item.productName !== 'string' ||
            !item.quantity || typeof item.quantity !== 'number' ||
            !item.price || typeof item.price !== 'number') {
            return false;
        }
    }
    // เช็คโครงสร้างข้อมูล shippingDetails
    if (!order.shippingDetails || typeof order.shippingDetails !== 'object') return false;
    const shippingDetails = order.shippingDetails;
    if (!shippingDetails.shippingId || typeof shippingDetails.shippingId !== 'number' ||
        !shippingDetails.carrier || typeof shippingDetails.carrier !== 'string' ||
        !shippingDetails.trackingNumber || typeof shippingDetails.trackingNumber !== 'string' ||
        !shippingDetails.estimatedDeliveryDate || typeof shippingDetails.estimatedDeliveryDate !== 'string' ||
        !shippingDetails.shippingAddress || typeof shippingDetails.shippingAddress !== 'object') {
        return false;
    }
    // เช็คโครงสร้างข้อมูล shippingAddress
    const address = shippingDetails.shippingAddress;
    if (!address.street || typeof address.street !== 'string' ||
        !address.city || typeof address.city !== 'string' ||
        !address.state || typeof address.state !== 'string' ||
        !address.postalCode || typeof address.postalCode !== 'string' ||
        !address.country || typeof address.country !== 'string') {
        return false;
    }
    return true;
}


// ตัวอย่างการใช้ function isValidOrder
function createOrder(input) {
    try {
        // ถ้า input ไม่ผ่านการ validate ก็ให้ throw error เลย
        if (!isValidOrder(input)) {
            throw new Error('Invalid order input!!');
        }
        // เขียน logic ในการสร้าง order ใหม่ข้างล่างได้เลยครับ
        console.log('Creating order with:', input);
    } catch (error) {
        console.error('Error creating order:', error.message);
    }
}

const newOrder = {
    orderId: 110,
    customerId: 1,
    orderDate: "2024-08-05T10:30:00Z",
    status: "Processing",
    items: [
        {
            itemId: 11,
            productName: "Tablet",
            quantity: 1,
            price: 300
        }
    ],
    shippingDetails: {
        shippingId: 1008,
        carrier: "FedEx",
        trackingNumber: "1234567898",
        estimatedDeliveryDate: "2024-08-07",
        shippingAddress: {
            street: "123 Elm Street",
            city: "Springfield",
            state: "IL",
            postalCode: "62701",
            country: "USA"
        }
    }
};

createOrder(newOrder);

