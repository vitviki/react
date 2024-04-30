import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiBriefcase,
  HiChartPie,
  HiUserGroup,
  HiShoppingCart,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

export const GRID_CARD_ITEMS = [
  {
    key: "sales",
    label: "Total Sales",
    path: "/total-sales",
    icon: <HiBriefcase />,
    figures: "$54232",
    addons: "+343",
    bgColor: "bg-blue-500",
  },
  {
    key: "expenses",
    label: "Total Expenses",
    path: "/total-expenses",
    icon: <HiChartPie />,
    figures: "$3423",
    addons: "-150",
    bgColor: "bg-red-500",
  },
  {
    key: "customers",
    label: "Total Customers",
    path: "/total-customers",
    icon: <HiUserGroup />,
    figures: "12313",
    addons: "+500",
    bgColor: "bg-yellow-500",
  },
  {
    key: "orders",
    label: "Total Orders",
    path: "/total-orders",
    icon: <HiShoppingCart />,
    figures: "16432",
    addons: "+845",
    bgColor: "bg-green-500",
  },
];

export const TRANSACTIONS = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 3500,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 3000,
  },
  {
    name: "Apr",
    Expense: 2750,
    Income: 2400,
  },
  {
    name: "May",
    Expense: 1899,
    Income: 2700,
  },
  {
    name: "Jun",
    Expense: 2533,
    Income: 2200,
  },
  {
    name: "Jul",
    Expense: 1999,
    Income: 2800,
  },
  {
    name: "Aug",
    Expense: 3200,
    Income: 3000,
  },
  {
    name: "Sep",
    Expense: 2900,
    Income: 3200,
  },
  {
    name: "Oct",
    Expense: 2200,
    Income: 3100,
  },
  {
    name: "Nov",
    Expense: 2500,
    Income: 3500,
  },
  {
    name: "Dec",
    Expense: 4000,
    Income: 3800,
  },
];

export const USER_PROFILES = [
  {
    name: "Male",
    value: 540,
  },
  {
    name: "Female",
    value: 620,
  },
  {
    name: "Other",
    value: 210,
  },
];

export const RECENT_ORDER_DATA = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "6",
    product_id: "5162",
    customer_id: "97963",
    customer_name: "Varun Tyagi",
    order_date: "2022-05-21T05:58:00",
    order_total: "$296.35",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "Dehradun, UK 248001",
  },
  {
    id: "7",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "8",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

export const POPULAR_PRODUCTS = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail: "https://source.unsplash.com/100x100?macbook",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail: "https://source.unsplash.com/100x100?earbuds",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail: "https://source.unsplash.com/100x100?laptop",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail: "https://source.unsplash.com/100x100?smartphone",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail: "https://source.unsplash.com/100x100?touchpad",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail: "https://source.unsplash.com/100x100?earphone",
    product_price: "$399.00",
    product_stock: 453,
  },
];
