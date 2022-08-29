export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxbc9f6ca3b61a6c92",
    // 公众号APP_SECRET
    APP_SECRET: "a0af75b0716087fb8208bcfeb6468e64",
    // 模板消息id
    TEMPLATE_ID: "aDATR2E7kKORGxzfEDlC7R5D5UDuNqwJI3RXTCu8TTA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["orFyd6Q-iUMOWEQpGA2xf9KYuvxY","orFyd6Tb70NuvfpjyxnpuLP0Iy80"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "重庆",
    // 所在城市
    CITY: "重庆",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "小徐", "year": "2004", "date": "03-22"},
      {"name": "小宇", "year": "2001", "date": "07-20"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-08-01",
    // 结婚纪念日
    // MARRY_DATE: "2020-01-04",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""
    

    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
