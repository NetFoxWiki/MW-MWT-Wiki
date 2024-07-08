<script setup>
import { useAuth, SignInButton } from 'vue-clerk'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AV from 'leancloud-storage'
import axios from 'axios'

const { isSignedIn, userId, isLoaded } = useAuth()
const route = useRoute()

const UpMath = ref(0)
const DownMath = ref(0)
const isDisableUp = ref()
const isDisableDown = ref()
const RPath = ref(route.fullPath)
const PollingINIT = ref(false)
const UserID = ref(userId)
const PollingText = ref()
const isLogin = ref(false)

if (isSignedIn) {
    isLogin.value = true
}

onMounted(() => {
    PollingStartAxios()
})

function PollingStartAxios() {
    axios.get('https://api.netfox.wiki/1.1/date').then(({ data }) => {
        IsPolling()
        if (data.__type == 'Date') {
            PollingINIT.value = true
            PollingText.value = ''
        }
        PollingStartInit()
        PollingStart()
    }).catch(console.error)
}

function PollingStartInit() {
    const queryUP = new AV.Query("UPTimes")
    queryUP.equalTo("path", RPath.value);
    queryUP.find().then((uptimes) => {
        UpMath.value = 1 * uptimes.length
    });

    const queryDown = new AV.Query("DownTimes")
    queryDown.equalTo("path", RPath.value);
    queryDown.find().then((downtimes) => {
        DownMath.value = 1 * downtimes.length
    });
}

function IsPolling() {
    const queryUP = new AV.Query("UPTimes")
    queryUP.equalTo("userid", UserID.value);
    queryUP.equalTo("path", RPath.value);
    queryUP.find().then((uptimes) => {
        if (uptimes.length !== 0) {
            isDisableDown.value = true
            isDisableUp.value = true
            PollingText.value = '您选择了好，感谢您的评价！'
        }
    });

    const queryDown = new AV.Query("DownTimes")
    queryDown.equalTo("userid", UserID.value);
    queryDown.equalTo("path", RPath.value);
    queryDown.find().then((downtimes) => {
        if (downtimes.length !== 0) {
            isDisableDown.value = true
            isDisableUp.value = true
            PollingText.value = '您选择了坏，感谢您的评价！'
        }
    });
}

function PollingStart() {
    if (isLogin.value) {
        if (PollingINIT.value) {
            isDisableDown.value = false
            isDisableUp.value = false
        } else {
            PollingText.value = '无法提供服务，请检查网络连接'
        }
    }
}

function UpM() {
    if (isLogin.value) {
        const UPTimes = AV.Object.extend("UPTimes");
        const upm = new UPTimes();
        upm.set("userid", UserID.value)
        upm.set("path", RPath.value)
        upm.set("time", 1)
        upm.save().then(
            (todo) => {
                IsPolling()
                UpMath.value++
            },
            (error) => {
                PollingText.value = '服务异常'
            }
        );
    }
}

function DownM() {
    if (isLogin.value) {
        const DownTimes = AV.Object.extend("DownTimes");
        const downm = new DownTimes();
        downm.set("userid", UserID.value)
        downm.set("path", RPath.value)
        downm.set("time", 1)
        downm.save().then(
            (todo) => {
                IsPolling()
                DownMath.value++
            },
            (error) => {
                PollingText.value = '服务异常'
            }
        );
    }
}
</script>

<template>
    <div class="polling-main" data-html2canvas-ignore>
        <div class="polling-h">玩家调查</div>
        <div class="polling-h-c">
            此调查将帮助此页面获得页面认证/顺序上升/特别推广
            <br>
            <Badge text="Tips: 一个用户只能选择一次，请慎重选择！" type="danger" />
        </div>
        <div class="polling-clicktext">{{ PollingText }}</div>
        <div v-if="isLoaded && isSignedIn" class="polling-c">
            <button class="polling-up" id="Up" @click="UpM()" :disabled="isDisableUp">
                <svg width="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#ffffff"
                        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
                <div class="polling-upMath">{{ UpMath }}</div>
            </button>
            <button class="polling-down" id="Down" @click="DownM()" :disabled="isDisableDown">
                <svg width="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#ffffff"
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
                <div class="polling-downMath">{{ DownMath }}</div>
            </button>
        </div>
        <div v-else class="polling-islogin">
            <div class="polling-islogin-h">登录后可参与</div>
            <SignInButton v-slot="{ handler }">
                <button @click="handler" class="clerk-button">
                    登录
                </button>
            </SignInButton>
        </div>
        <div class="polling-RPath">当前路径：{{ RPath }}</div>
    </div>
</template>

<style>
.polling-main {
    padding: 5px;
    margin: 5px 0;
    max-width: 100%;
    border: 2px var(--theme-color) solid;
    border-radius: 5px;
}

.polling-h {
    margin-top: -6px;
    font-size: 30px;
    font-weight: bold;
}

.polling-h-c {
    font-size: 15px;
}

.polling-c {
    display: flex;
    align-items: center;
}

.polling-clicktext {
    color: #ff4b2a;
}

.polling-up {
    background-color: rgb(88, 177, 255);
    border-radius: 5px;
    margin-top: 5px;
    margin-right: 5px;
    padding: 3px 15px 6px 15px;
    border: none;
}

.polling-down {
    background-color: rgb(255, 220, 65);
    border-radius: 5px;
    margin-top: 5px;
    padding: 3px 15px 6px 15px;
    border: none;
}

.polling-down:hover {
    background-color: rgb(253, 207, 2);
}

.polling-up:hover {
    background-color: rgb(0, 136, 255);
}

.polling-down:disabled {
    background-color: rgba(253, 207, 2, 0.4);
}

.polling-up:disabled {
    background-color: rgba(0, 136, 255, 0.4);
}

.polling-upMath {
    color: #ffffff;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
}

.polling-downMath {
    color: #ffffff;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
}

.polling-islogin {
    display: flex;
    align-items: center;
    border: 2px var(--theme-color) solid;
    padding: 3px;
    margin: 5px 0;
    border-radius: 5px;
}

.polling-islogin-h {
    font-size: 25px;
    font-weight: bold;
}

.polling-RPath {
    margin-top: 5px;
    font-size: 12px;
}
</style>