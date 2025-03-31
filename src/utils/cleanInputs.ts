const inputs = document.getElementsByClassName("form-control") as HTMLCollectionOf<HTMLInputElement>;

export const cleanButtons = () => {
    Array.from(inputs).forEach(input => {
        input.value = "";
    });
}