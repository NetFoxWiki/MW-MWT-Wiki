<script>
export default {
    data() {
        return {
            coin: 10000,
            lotteryList: [
                { name: 'FS Charles de Gaulle (R91)', probability: 0.0005 },
                { name: '5 艺术硬币', probability: 0.2325 },
                { name: '超级军旗', probability: 0.0053 },
                { name: '活动通行证积分加成', probability: 0.1 },
                { name: '15 遥控器', probability: 0.575 },
                { name: '1 天高级账户', probability: 0.015 },
                { name: '金顶', probability: 0.055 },
                { name: 'A-220M (57 mm)', probability: 0.0007 },
                { name: '阿卡亚(533 mm)', probability: 0.001 },
                { name: '灰青', probability: 0.015 },
            ],
            lotteryHistory: [],
            lotteryResults: '还没抽哦',
            lotteryTimes: 0,
            displayLotteryItems: [],
            lotteryShow: false,
            LotteryButton: false,
            LotteryButtonText: '开始抽奖',
            MaxLottery: '',
            whileList: 0,
        }
    },
    methods: {
        lotteryResult() {
            if (this.lotteryShow) {
                this.lotteryShow = false;
            } else {
                this.lotteryShow = true;
            }
        },
        beforeLottery() {
            this.LotteryButton = true;
            this.LotteryButtonText = '正在抽奖...';
            const displayInterval = 60;
            const randomIndex = Math.floor(Math.random() * this.lotteryList.length);
            if (this.whileList < 35) {
                setTimeout(this.beforeLottery, displayInterval);
                this.lotteryResults = this.lotteryList[randomIndex].name;
                this.whileList = this.whileList + 1;
            } else {
                this.whileList = 0;
                this.LotteryButton = false;
                this.LotteryButtonText = '开始抽奖';
                this.startLottery();
            };
            var number = {};
            var MaxNumber = [];
            var MaxNum = 0;
            for (var i = 0; i < this.lotteryHistory.length; i++) {
                if (!number[this.lotteryHistory[i]]) {
                    number[this.lotteryHistory[i]] = 1
                } else {
                    number[this.lotteryHistory[i]]++
                }
                if (number[this.lotteryHistory[i]] > MaxNum) {
                    MaxNum = number[this.lotteryHistory[i]]
                }
            }
            for (var item in number) {
                if (number[item] === MaxNum) {
                    MaxNumber.push(item)
                }
            }
            if (number[MaxNumber] == undefined) {
                this.MaxLottery = '有重复奖励/还未抽奖'
            } else {
                this.MaxLottery = MaxNumber + ' - 出现' + number[MaxNumber] + '次'
            }

        },
        startLottery() {
            this.coin -= 1;

            const randomNum = Math.random();

            let cumulativeProbability = 0;
            let selectedLotteryItem;

            for (let i = 0; i < this.lotteryList.length; i++) {
                cumulativeProbability += this.lotteryList[i].probability;
                if (randomNum <= cumulativeProbability) {
                    selectedLotteryItem = this.lotteryList[i].name;
                    break;
                }
            }
            this.lotteryHistory.push(selectedLotteryItem);
            this.lotteryResults = selectedLotteryItem;
            this.lotteryTimes++;

            this.displayLotteryItems = this.shuffleArray(this.lotteryList.map(item => item.name));
        },
        shuffleArray(array) {
            let currentIndex = array.length;
            let temporaryValue, randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },
    },
}
</script>

<template>
    <div class="lottery-main">
        <div class="lottery-show-user"><b>剩余币：{{ coin }}</b></div>
        <br>
        <div class="lottery-show-results"><b>抽到的奖励：{{ lotteryResults }}</b></div>
        <div class="lottery-control">
            <button class="lottery-button" @click="beforeLottery()" :disabled="LotteryButton">{{ LotteryButtonText
                }}</button>
            <button class="lottery-button" @click="lotteryResult()">抽奖总结</button>
        </div>
        <br>
        <div class="lottery-list-results-now" v-if="lotteryShow"><img
                src="https://statics.netfox.wiki/20240606/MWGame-Lottery.2dojjxnrfy.webp" width="100px"
                style="border-radius: 15px;">&emsp;总共抽奖：{{ 10000 - coin }} 次<br>&emsp;中奖最多：<br>&emsp;&emsp;{{ MaxLottery
            }}</div>
        <div class="lottery-list-h">==历史记录==</div>
        <div class="lottery-list-2" v-for="(item) in lotteryHistory.slice().reverse()">
            <b>{{ item }}</b>
        </div>
        <div class="lottery-list-h">==抽奖奖励==</div>
        <div class="lottery-list" v-for="(item, index) in lotteryList">
            <b>{{ index + 1 }}.</b> {{ item.name }}【概率：{{ item.probability * 10 * 10 + '%' }}】<br>
        </div>
    </div>
</template>

<style>
.lottery-main {
    height: auto;
    max-width: 100%;
    padding: 10px;
    box-shadow: 0 0 2px var(--theme-color-light);
    border-radius: 5px;
}

.lottery-main:hover {
    box-shadow: 0 0 3px 1px var(--theme-color-light);
}

.lottery-button {
    font-weight: bold;
    font-size: 20px;
    border: none;
    background-color: var(--theme-color-mask);
    color: var(--theme-color);
    padding: 7px 12px 9px 12px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    text-align: center;
}

.lottery-button:disabled {
    font-weight: bold;
    font-size: 20px;
    border: none;
    background-color: var(--theme-color-mask);
    color: var(--theme-color);
    padding: 7px 12px 9px 12px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    text-align: center;
}

.lottery-button:hover {
    background-color: var(--theme-color);
    color: #fff;
}

.lottery-button:disabled:hover {
    font-weight: bold;
    font-size: 20px;
    border: none;
    background-color: var(--theme-color-mask);
    color: var(--theme-color);
    padding: 7px 12px 9px 12px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    text-align: center;
}

.lottery-show-user {
    background-color: var(--theme-color-mask);
    border-radius: 5px;
    padding: 5px;
}

.lottery-list-h {
    max-width: 100%;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin: 2px 0 2px 0;
    border-radius: 5px;
    background-color: var(--theme-color);
}

.lottery-list-results-now {
    display: flex;
    max-width: 100%;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin: 2px 0 2px 0;
    border-radius: 5px;
    background-color: var(--theme-color);
}

.lottery-list-2 {
    max-width: 100%;
    font-size: 17px;
    padding: 5px;
    margin: 2px 0 2px 0;
    border-radius: 5px;
    background-color: var(--theme-color-mask);
}

.lottery-list {
    max-width: 100%;
    color: #fff;
    font-size: 17px;
    padding: 5px;
    margin: 2px 0 2px 0;
    border-radius: 5px;
    background-color: var(--theme-color);
}

.lottery-show-results {
    font-size: 25px;
    text-align: center;
}

.lottery-control {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 10px 0 0 0;
}
</style>
