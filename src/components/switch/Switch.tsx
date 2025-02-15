import './switch.css';

interface SwitchProps {
    isOn: boolean;
    onToggle: () => void;
    label?: string;
}

const Switch = ({ isOn, onToggle, label = "Label" }: SwitchProps) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isOn} role='switch' onChange={onToggle} aria-label={label} aria-checked={isOn} />
            <span className="slider"></span>
            <span className="switch-label">{label}</span>
        </label>
    );
};

export default Switch;



// Notes:

// 1. The Switch component is a simple component that takes two props: isOn and OnToggel. The isOn prop is a boolean that determines whether the switch is on or off. The OnToggel prop is a function that toggles the switch on or off.

// 2. In html any input control that we cerate we need to define it label . Because it is a good practice to define label for input control. So that it show the in screnn recorder. and if we not use label that use arial-label attribute.