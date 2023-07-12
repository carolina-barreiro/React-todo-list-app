import React from 'react';
import './App.css';
import './index.css';
import Item from './Item.js';

function GroupItem(props) {

    return (
            <Item list={props.list}
                handleDelete={props.handleDelete}
                filteredList={props.filteredList}
                handleToggleChecked={props.handleToggleChecked}
            />
    );
};

export default GroupItem;
