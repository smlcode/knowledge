function minimumCardPickup(cards: number[]): number {
    const cardFirstSeenIndexMap = new Map<number, number>();
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (cardFirstSeenIndexMap.has(cards[i])) {
            const firstSeenIndex = cardFirstSeenIndexMap.get(cards[i]);
            // Calculate distance including both cards
            const currDistance = i - firstSeenIndex + 1;
            minDistance = Math.min(minDistance, currDistance);
        }
        // Always update the most recent position
        cardFirstSeenIndexMap.set(cards[i], i);
    }

    return minDistance === Infinity ? -1 : minDistance;
}