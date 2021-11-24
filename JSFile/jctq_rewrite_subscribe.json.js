{
  "name": "晶彩天气重写订阅",
  "type": "rewrite",
  "note": "仅供参考",
  "author": "leaf",
  "resource": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_rewrite_subscribe.json",
  "mitmhost": [
    "tq.xunsl.com"
  ],
  "rewrite": [
    {
    "match": "https://tq.xunsl.com/v5/nameless/adlickstart.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqkkz.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v17/NewTask/getTaskListByWeather.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_today_score.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v5/article/info.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqwz.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v5/article/detail.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqwz.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v5/user/stay.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqwz.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v5/CommonReward/toGetReward.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqqd.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v5/CommonReward/toGetReward.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqbox.js",
    "enable": true
    },
    {
    "match": "https://tq.xunsl.com/v5/wechat/withdraw2.json",
    "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_withdraw.js",
    "enable": true
    }
  ],
  "task": {
    "type": "skip",
    "list": [
        {
            "name": "晶彩天气看看赚",
            "type": "cron",
            "time": "21 8,20 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqkkz.js"
            },
        },
        {
            "name": "晶彩天气每日收益",
            "type": "cron",
            "time": "18 22 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_today_score.js"
            },
        },
        {
            "name": "晶彩天气签到",
            "type": "cron",
            "time": "23 0,6 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqqd.js"
            },
        },
        {
            "name": "晶彩天气文章",
            "type": "cron",
            "time": "12 7,19 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqwz.js"
            },
        },
        {
            "name": "晶彩天气火爆转发",
            "type": "cron",
            "time": "12 6,12,18 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_share.js"
            },
        },
        {
            "name": "晶彩天气福利视频",
            "type": "cron",
            "time": "20 9,17 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_Adv_video.js"
            },
        },
        {
            "name": "晶彩天气抽奖",
            "type": "cron",
            "time": "31 8,16 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_Rotary.js"
            },
        },
        {
            "name": "晶彩天气每日宝箱",
            "type": "cron",
            "time": "24 21,22 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctqbox.js"
            },
        },
        {
            "name": "晶彩天气好友红包",
            "type": "cron",
            "time": "32 2,6,20 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_friendSign.js"
            },
        },
        {
            "name": "晶彩天气提现",
            "type": "cron",
            "time": "34 23 * * *",
            "job": {
                "type": "runjs",
                "target": "https://raw.githubusercontent.com/leafxcy/JavaScript/main/jctq/jctq_withdraw.js"
            },
        }
    ]
  }
}
