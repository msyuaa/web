const fileMask = `./greeting_`
const fileExt = `.js`

async function printGreeting(languageCode) {
    try {
        const greeting = await import(fileMask + languageCode + fileExt);
        console.log(greeting.default); 
    } catch (error) {
        console.error("Ошибка при загрузке файла:", error, "\nВозможно, вы передали неверный код языка");
    }
}

const language = process.argv[2];
printGreeting(language);