import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (contacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
        console.log('Дані успішно оновлені');
    } catch (error) {
        console.error('Помилка запису у файл:', error);
    }
};
