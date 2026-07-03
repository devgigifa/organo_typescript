import './dropdown.css';

interface DropdownProps {
    label: string;
    items: string[];
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

const Dropdown = ({ label, items, value, onChange, required = false }: DropdownProps) => {
    return (
        <div className="dropdown">
            <label>{label}</label>
            <select required={required} value={value} onChange={event => onChange(event.target.value)}>
                <option />
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default Dropdown;
