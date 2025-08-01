import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
    try {
        let contacts = await readContacts();
        
        for (let i = 0; i < number; i++) {
            const newContact = createFakeContact();
            contacts.push(newContact);
        }
        await writeContacts(contacts);
    } catch (error) {
        console.error('Помилка генерації контактів:', error);
    }
};

generateContacts(5);
