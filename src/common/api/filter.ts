import {RoomType} from "../types/dataTypes";

interface DataType {
    rooms: RoomType[];
}

export const filterData = (data: RoomType[], keywords: string[]): RoomType[] => (
    data.filter(({name}) => {
        keywords.forEach(keyword => {
            if (name.includes(keyword)) return true;
        });
        return false;
    })
)