import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
    } catch (error) {
        console.error('Помилка видалення всіх контактів:', error);
    }
};

removeAllContacts();
