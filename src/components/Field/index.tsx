import './field.css';

interface FieldProps {
    type?: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

const Field = ({ type = 'text', label, placeholder, value, onChange, required = false }: FieldProps) => {
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={event => onChange(event.target.value)} 
                required={required} 
                placeholder={placeholder} 
            /> 
        </div>
    );
};

export default Field;
