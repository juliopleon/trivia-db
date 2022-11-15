import { appState } from "../AppState.js";

class TriviasService {

    async getTrivia() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
        console.log('trivia data', response.data);
        appState.trivias = response.data.map(triviaData => new card(triviaData))
    }




}

export const triviasService = new TriviasService