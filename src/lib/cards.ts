import c from './cards.json';

interface Card {
	title: string;
	type: string;
	effect: string;
	body: string;
	phase: string;
	count: number;
}

export const cards: Card[] = c;
