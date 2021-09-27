const tagMap = [
    "練習中",
    "おしゅべり",
    "初心者OK",
    "配信中",
    "録音中",
    "Classic",
    "Country/Folk",
    "Club Music/EDM",
    "Hip Hop/Rap",
    "R&B/Soul",
    "Jazz",
    "Fusion",
    "Rock",
    "HR/HM",
    "洋楽",
    "J-Pop",
    "アイドル",
    "アニメ・ゲーム・ボカロ",
    "World"
]


export const tagMaskDecoder = (tagMask: string, tagOrig: string) => {
    const tags: string[] = [];
    const binaryMask = parseInt(tagMask).toString(2).split("").reverse();
    binaryMask.forEach((num, index) => {
        if (num === "1") {
            tags.push((index < 19) ? tagMap[index] : tagOrig)
        }
    });
    return tags
}