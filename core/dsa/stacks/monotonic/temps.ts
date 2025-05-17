function dailyTemperatures(temperatures: number[]): number[] {
    const dayIndexStack = [];
    const answer = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        if (dayIndexStack.length > 0) {
            let recentIndex = dayIndexStack[dayIndexStack.length - 1];
            let recentTemp = temperatures[recentIndex];
            let currTemp = temperatures[i];

            while(currTemp > recentTemp) {
                let daysWait =  i - recentIndex;
                answer[recentIndex] = daysWait;
                dayIndexStack.pop();
                recentIndex = dayIndexStack[dayIndexStack.length - 1];
                recentTemp = temperatures[recentIndex];
            }
        }
        dayIndexStack.push(i);
    }
    return answer;
};