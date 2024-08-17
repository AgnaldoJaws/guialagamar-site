import React, { useEffect } from "react";
import styles from "./SelectField.module.css"; // Import your CSS module

const SelectField = ({ options, label, selectedOption, onChange, disabled }) => {

    // Atualizar o valor do select quando selectedOption mudar
    useEffect(() => {
        const selectElement = document.getElementById(label);
        if (selectElement) {
            selectElement.value = selectedOption;
        }
    }, [selectedOption, label]);

    return (
        <div className={styles.selectField}>
            <label htmlFor={label} className={styles.label}>{label}</label>
            <select
                id={label}
                value={selectedOption}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className={styles.select} // Apply CSS class for styling
            >
                <option value="" disabled>Selecione</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.nome_subcategory}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
