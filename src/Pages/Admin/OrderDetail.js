
// OrderDetail.js

import React, { useState, useEffect } from 'react';
import "./OrderDetails.css"

const OrderDetail = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('name');
    const [searchDate, setSearchDate] = useState('');

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch('https://psk-backend.onrender.com/summary');
            if (!response.ok) {
                throw new Error('Failed to fetch order data');
            }
            const orderData = await response.json();
            setOrders(orderData);
            setFilteredOrders(orderData);
        } catch (error) {
            console.error('Error fetching order data:', error.message);
        }
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        filterOrders(e.target.value, searchCategory, searchDate);
    };

    const handleCategoryChange = (e) => {
        setSearchCategory(e.target.value);
        filterOrders(searchTerm, e.target.value, searchDate);
    };

    const handleDateChange = (e) => {
        setSearchDate(e.target.value);
        filterOrders(searchTerm, searchCategory, e.target.value);
    };

    const filterOrders = (term, category, date) => {
        const filtered = orders.filter(order => {
            const categoryValue = order[category].toLowerCase();
            const orderDate = new Date(order.date);
            const selectedDate = new Date(date);
            const searchTermMatch = categoryValue.includes(term.toLowerCase());
            const dateMatch = selectedDate.toDateString() === orderDate.toDateString();
            return searchTermMatch && dateMatch;
        });
        setFilteredOrders(filtered);
    };

    return (
        <div className="order-detail-container">
            <h2>Order Details</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <select value={searchCategory} onChange={handleCategoryChange}>
                    <option value="name">Name</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="address">Address</option>
                </select>
                <input
                    type="date"
                    value={searchDate}
                    onChange={handleDateChange}
                />
            </div>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{new Date(order.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetail;
