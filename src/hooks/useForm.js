import { useState } from "react";

export const useForm = (initialForm={}) => {

    const [formData,setFormData] = useState(initialForm);
    const [character, setCharacter] = useState(null);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return {
        formData,
        onInputChange
    }
}