import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SelectField from "./SelectField";
import styles from "./MainFilterSearchBox.module.css";

const MainFilterSearchBox = () => {
  const firstFieldOptions = [
    { id: 1, nome_subcategory: "CANANEIA" },
    { id: 2, nome_subcategory: "ILHA COMPRIDA" },
    { id: 3, nome_subcategory: "IGUAPE" },
    { id: 4, nome_subcategory: "PARIQUERA AÇU" },
  ];

  const secondFieldOptions = [
    { id: 1, nome_subcategory: "ATRATIVOS" },
    { id: 3, nome_subcategory: "ROTEIROS E PASSEIOS" },
    { id: 4, nome_subcategory: "ONDE SE HOSPEDAR" },
    { id: 5, nome_subcategory: "ONDE COMER" },
    { id: 6, nome_subcategory: "AGENDA DE EVENTOS" },
    { id: 8, nome_subcategory: "SERVIÇOS" },
    { id: 11, nome_subcategory: "NATUREZA E CULTURA" },
  ];

  const [thirdFieldOptions, setThirdFieldOptions] = useState([]);
  const [selectedFirstField, setSelectedFirstField] = useState("");
  const [selectedSecondField, setSelectedSecondField] = useState("");
  const [selectedThirdField, setSelectedThirdField] = useState("");
  const [thirdFieldData, setThirdFieldData] = useState([]);
  const router = useRouter();

  const handleFirstFieldChange = (selectedId) => {
    setSelectedFirstField(selectedId);
    setSelectedSecondField(""); // Limpar seleção do segundo campo
    setSelectedThirdField(""); // Limpar seleção do terceiro campo
  };

  const handleSecondFieldChange = (selectedId) => {
    setSelectedSecondField(selectedId);
    setSelectedThirdField(""); // Limpar seleção do terceiro campo
  };

  const handleThirdFieldChange = (selectedId) => {
    setSelectedThirdField(selectedId);
  };

  useEffect(() => {
    if (selectedFirstField && selectedSecondField) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/subCategories/${selectedSecondField}/${selectedFirstField}`)
          .then((response) => response.json())
          .then((data) => {
            setThirdFieldOptions(data.subcategories); // Atualizar opções do terceiro campo
          })
          .catch((error) => {
            console.error("Error fetching third field options:", error);
            setThirdFieldOptions([]);
          });
    } else {
      setThirdFieldOptions([]);
    }
  }, [selectedFirstField, selectedSecondField]);

  // Você pode usar o terceiro campo para qualquer outra finalidade aqui

  const handleSearch = () => {
    console.log('aqui',selectedSecondField)
    if (selectedFirstField && selectedSecondField) {
      router.push(`/content-list/list-v1?firstField=${selectedThirdField}&secondField=${selectedFirstField}`);
    } else {
      alert("Por favor, selecione os campos primeiro e segundo antes de pesquisar.");
    }
  };

  return (
      <div className={styles.mainFilterSearchBox}>
        <div className={styles.mainFilterSearchBox__container}>
          <SelectField
              options={firstFieldOptions}
              label="Destinos"
              selectedOption={selectedFirstField}
              onChange={handleFirstFieldChange}
              disabled={false}
          />
          <SelectField
              options={secondFieldOptions}
              label="Experiências"
              selectedOption={selectedSecondField}
              onChange={handleSecondFieldChange}
              disabled={!selectedFirstField}
          />
          <SelectField
              options={thirdFieldOptions}
              label="Atrativos"
              selectedOption={selectedThirdField}
              onChange={handleThirdFieldChange}
              disabled={!selectedSecondField}
          />
          <div className={styles.mainFilterSearchBox__button}>
            <button
                className={styles.mainFilterSearchBox__submitButton}
                onClick={handleSearch}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
  );
};

export default MainFilterSearchBox;
