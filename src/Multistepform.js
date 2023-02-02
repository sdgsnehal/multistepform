import React, { useState } from "react";
import styles from "./Multistepform.module.css";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  function handleChange(e, id) {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, value: e.target.value };
      }
      return field;
    });
    setFields(newFields);
  }

  function handleAddField() {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  }

  function handleRemoveField(id) {
    setFields(fields.filter((field) => field.id !== id));
  }

  function handleNextStep() {
    setStep(step + 1);
  }

  function handlePreviousStep() {
    setStep(step - 1);
  }

  return (
    <div>
      {step === 1 && (
        <div>
          {fields.map((field) => (
            <div key={field.id}>
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleChange(e, field.id)}
                className={`${styles.input} ${styles.inputremove}`}
              />
              <button
                onClick={() => handleRemoveField(field.id)}
                className={`${styles.button} ${styles.inputremove}`}
              >
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleAddField} className={styles.button}>
            Add Field
          </button>
          <button onClick={handleNextStep} className={styles.button}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Step 2</p>
          <button onClick={handlePreviousStep} className={styles.button}>
            Previous
          </button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
