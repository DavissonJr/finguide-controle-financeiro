const inputs = document.getElementsByClassName("form-control");
export const cleanButtons = () => {
    Array.from(inputs).forEach(input => {
        input.value = "";
    });
};
