import React from 'react';
import './ExpenseEntryItemList.css';

function ExpenseEntryItemList(props) {
    const lists = props.item.map((item) =>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
        </tr>
    );
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseEntryItemList