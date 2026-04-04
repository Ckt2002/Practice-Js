import { createNewFile } from "../file_json.js";
import FileName from "../utils/File_name.js"

export default function saveBook(books) {
    const jsonContent = JSON.stringify(books, null, '\t');
    createNewFile(FileName.Books, jsonContent);
}