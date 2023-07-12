import './App.css';
import './index.css';

export default function Item(props) {
    const listItems = props.filteredList.map(item =>
        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded" key={item.id}>
            <label className="custom-checkbox">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked={item.checked} onChange={() => props.handleToggleChecked(props.list, item.id)} />
                <span className={item.checked ? 'text-decoration-line-through' : ''}>{item.name}</span>
            </label>
            <span className='ms-auto'><i className="bi bi-trash" onClick={() => props.handleDelete(props.list, item.id)} /></span>
        </li>);
    return <ul className="list-group">{listItems}</ul>
}