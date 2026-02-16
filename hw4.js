const checkProbabilityTheory = (count) => {
    if (typeof count !== 'number' || count <= 0 || !Number.isInteger(count)) {
        console.error('Помилка: Параметр count має бути цілим позитивним числом.');
        return;
    }

    const MIN_RANGE = 100;
    const MAX_RANGE = 1000;

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE + 1)) + MIN_RANGE;
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const evenPercentage = ((evenCount / count) * 100).toFixed(2);
    const oddPercentage = ((oddCount / count) * 100).toFixed(2);

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage}% / ${oddPercentage}%`);
    
    console.log('---');
};

checkProbabilityTheory(100);
checkProbabilityTheory(1000);
checkProbabilityTheory(1000000);