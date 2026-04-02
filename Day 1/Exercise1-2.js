const inputMoney = 1123400000;

function formatMoneyInShorten(money) {
    let formatedMoney = money.toString();

    if (money - 1000000000 >= 0) {
        formatedMoney = `${formatDecimal(money / 1000000000)}B`;
    }
    else if (money - 1000000 >= 0) {
        formatedMoney = `${formatDecimal(money / 1000000)}M`;
    }
    else if (money - 1000 >= 0) {
        formatedMoney = `${formatDecimal(money / 1000)}K`;
    }
    console.log(formatedMoney);
}

function formatDecimal(convertedMoney) {
    if (convertedMoney * 10 % 10 === 0) {
        return Math.round(convertedMoney);
    }
    return convertedMoney.toFixed(2);
}

formatMoneyInShorten(inputMoney);